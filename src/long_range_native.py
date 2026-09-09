"""复用原有阅读链路：静态投影与可选PDF全文补齐，不重新召回或调用模型。"""

import importlib.util
import json
import re
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime, timedelta
from pathlib import Path

from daily_report_state import (
    bootstrap_daily_state_from_sidebar,
    daily_state_path,
    entries_from_state,
    load_daily_state,
    merge_daily_state,
    save_daily_state,
)


def publish_native_reports(root, *, with_fulltext=False):
    root = Path(root)
    docs = root / "docs"
    manifests = sorted((docs / "long-range").glob("*/manifest.json"))
    if not manifests:
        return []
    # 复用 Step 6 的纯格式化函数；禁止调用 process_paper 等联网生成入口。
    spec = importlib.util.spec_from_file_location(
        "long_range_docs_formatter", Path(__file__).with_name("6.generate_docs.py")
    )
    generator = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(generator)
    by_date = {}
    for path in manifests:
        manifest = json.loads(path.read_text(encoding="utf-8"))
        start = datetime.fromisoformat(manifest["start"]).date()
        end = datetime.fromisoformat(manifest["end_exclusive"]).date() - timedelta(
            days=1
        )
        date = f"{start:%Y%m%d}-{end:%Y%m%d}"
        group = by_date.setdefault(
            date, {"rows": {}, "generated_at": "", "label": f"{start} ～ {end}"}
        )
        group["generated_at"] = max(
            group["generated_at"], manifest.get("generated_at", "")
        )
        for topic in manifest["groups"]:
            for bucket, label in [
                ("core", "核心"),
                ("related", "补充"),
                ("review", "待复核"),
            ]:
                for filename in (
                    topic.get("buckets", {}).get(bucket, {}).get("pages", [])
                ):
                    if not re.fullmatch(
                        r"[a-f0-9]+-(core|related|review)-[1-9]\d*\.json", filename
                    ):
                        raise ValueError("无效回溯分页路径")
                    for row in json.loads(
                        (path.parent / filename).read_text(encoding="utf-8")
                    ):
                        pid = str(row["id"])
                        if not re.fullmatch(r"[A-Za-z0-9][A-Za-z0-9._-]{0,120}", pid):
                            raise ValueError("无效论文ID，拒绝生成不安全路径")
                        tags = [f'query:{topic["tag"]}', f"paper:{label}"]
                        previous = group["rows"].get(pid)
                        if previous:
                            tags = sorted(set(previous["llm_tags"] + tags))
                            if previous["llm_score"] > row["score"]:
                                previous["llm_tags"] = tags
                                continue
                        group["rows"][pid] = {
                            **row,
                            "llm_score": row["score"],
                            "llm_tags": tags,
                            "canonical_evidence": row.get("reason", ""),
                            "source": "arxiv",
                            "selection_source": "long-range",
                            "pdf_url": row.get("pdf_url")
                            or f"https://arxiv.org/pdf/{pid}",
                        }

    fulltext_jobs = []
    for date, group in sorted(by_date.items()):
        state_path = daily_state_path(str(docs), date)
        existing = load_daily_state(state_path) or bootstrap_daily_state_from_sidebar(
            str(docs / "_sidebar.md"), date
        )
        papers = list(group["rows"].values())
        records = []
        for paper in papers:
            records.append(
                {
                    "paper_id": paper["id"],
                    "route": f'{date}/{paper["id"]}',
                    "title": paper["title"],
                    "section": "quick",
                    "score": paper["llm_score"],
                    "tags": [
                        dict(zip(("kind", "label"), tag.split(":", 1)))
                        for tag in paper["llm_tags"]
                    ],
                    "evidence": paper["canonical_evidence"],
                }
            )
        state = merge_daily_state(
            existing, date, records, group["generated_at"], True, group["label"]
        )
        # 重建是同一批静态结果的投影，不增加运行次数。
        state["run_count"] = max(1, existing.get("run_count", 0))
        save_daily_state(state_path, state)
        target = docs / date
        target.mkdir(parents=True, exist_ok=True)
        cumulative = {record["paper_id"]: record for record in state["papers"]}
        for paper in papers:
            record = cumulative[paper["id"]]
            paper["llm_tags"] = [
                f'{tag["kind"]}:{tag["label"]}' for tag in record["tags"]
            ]
            paper["llm_score"] = record["score"]
            text = generator.build_markdown_content(
                paper, "quick", "", "", paper["llm_tags"]
            )
            text += "\n\n## 专题评审\n\n" + paper.get("reason", "")
            if paper.get("evidence"):
                text += "\n\n原文证据：\n\n" + "\n".join(
                    "> " + line for line in paper["evidence"].splitlines()
                )
            text += "\n\n仅依据标题与摘要评审；待复核不代表已确认相关。\n"
            destination = target / (paper["id"] + ".md")
            fulltext_jobs.append((paper["pdf_url"], target / (paper["id"] + ".txt")))
            # 不覆盖用户或旧流水线已生成的详细阅读内容。
            if not destination.exists():
                destination.write_text(text, encoding="utf-8")
            else:
                previous = destination.read_text(encoding="utf-8")
                if (
                    generator._parse_front_matter(previous).get("selection_source")
                    == "long-range"
                ):
                    # 仅同步机器元数据，保留用户可能添加的正文和笔记。
                    for key, value in {
                        "tags": json.dumps(paper["llm_tags"], ensure_ascii=False),
                        "score": str(paper["llm_score"]),
                        "evidence": generator.yaml_escape_value(record["evidence"]),
                    }.items():
                        previous, _ = generator.upsert_front_matter_field(
                            previous, key, value
                        )
                    destination.write_text(previous, encoding="utf-8")
        deep, quick, evidence = entries_from_state(state)
        generator.update_sidebar(
            str(docs / "_sidebar.md"),
            date,
            deep,
            quick,
            evidence,
            date_label=group["label"],
            replace_existing=True,
        )
        generator.write_day_report_readme(
            str(docs),
            date,
            group["label"],
            deep,
            quick,
            True,
            run_count=state["run_count"],
            generated_at=group["generated_at"],
            summary="",
        )
        generator.write_day_meta_index_json(
            str(docs),
            date,
            group["label"],
            [],
            papers,
            merged_deep_entries=deep,
            merged_quick_entries=quick,
        )
    if with_fulltext:
        failures = []
        with ThreadPoolExecutor(max_workers=3) as pool:
            jobs = {
                pool.submit(generator.ensure_text_content, url, str(path)): path
                for url, path in fulltext_jobs
            }
            for future in as_completed(jobs):
                path = jobs[future]
                try:
                    text = future.result()
                    print(f"[全文] {path.name} 就绪，{len(text)} 字符", flush=True)
                except Exception as error:
                    if isinstance(error, generator.PaperFulltextUnavailable):
                        # 保留不可用的真实原因，不能把撤稿通知当作全文；错误缓存移到隔离文件。
                        if path.exists() and not generator.is_usable_paper_text(
                            path.read_text(encoding="utf-8")
                        ):
                            path.replace(path.with_suffix(".invalid-text"))
                        path.with_suffix(".fulltext.json").write_text(
                            json.dumps(
                                {
                                    "status": "unavailable",
                                    "reason": str(error),
                                },
                                ensure_ascii=False,
                            ),
                            encoding="utf-8",
                        )
                        print(f"[全文] {path.name} 官方不可用：{error}", flush=True)
                        continue
                    failures.append(path.name)
                    print(f"[全文] {path.name} 失败：{error}", flush=True)
        if failures:
            raise RuntimeError(
                f"{len(failures)}/{len(fulltext_jobs)} 篇全文未就绪："
                + ", ".join(failures)
            )
    return sorted(by_date)


if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(
        description="为已有回溯结果补全文，不重新召回或调用DeepSeek"
    )
    parser.add_argument(
        "--root", type=Path, default=Path(__file__).resolve().parents[1]
    )
    parser.add_argument("--backfill-fulltext", action="store_true", required=True)
    arguments = parser.parse_args()
    publish_native_reports(arguments.root, with_fulltext=True)
