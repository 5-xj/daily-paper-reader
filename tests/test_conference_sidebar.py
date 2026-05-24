import importlib.util
import json
import pathlib
import sys
import tempfile
import unittest


def _load_module(module_name: str, path: pathlib.Path):
    spec = importlib.util.spec_from_file_location(module_name, path)
    mod = importlib.util.module_from_spec(spec)
    assert spec and spec.loader
    sys.modules[module_name] = mod
    spec.loader.exec_module(mod)
    return mod


class ConferenceSidebarTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        root = pathlib.Path(__file__).resolve().parents[1]
        cls.mod = _load_module("conference_sidebar_mod", root / "src" / "conference_sidebar.py")

    def write_result(self, path: pathlib.Path, title: str = "A Conference Paper") -> None:
        payload = {
            "papers": [
                {
                    "id": "openreview-icml-2025-abc123",
                    "title": title,
                    "link": "https://openreview.net/forum?id=abc123",
                    "pdf_url": "https://openreview.net/pdf?id=abc123",
                    "source": "ICML-2025-Accepted",
                    "abstract": "This paper proposes a new reinforcement learning method for symbolic discovery.",
                }
            ],
            "queries": [],
            "llm_ranked": [
                {
                    "paper_id": "openreview-icml-2025-abc123",
                    "score": 9,
                    "canonical_evidence": "命中 ICML 会议检索需求。",
                    "title_zh": "会议论文中文标题",
                    "matched_query_tag": "query:rl:composite",
                }
            ],
        }
        path.write_text(json.dumps(payload, ensure_ascii=False), encoding="utf-8")

    def write_custom_result(
        self,
        path: pathlib.Path,
        paper_id: str,
        title: str,
        tag: str,
        source: str,
    ) -> None:
        payload = {
            "papers": [
                {
                    "id": paper_id,
                    "title": title,
                    "link": f"https://openreview.net/forum?id={paper_id}",
                    "pdf_url": f"https://openreview.net/pdf?id={paper_id}",
                    "source": source,
                    "abstract": f"{title} abstract.",
                }
            ],
            "queries": [],
            "llm_ranked": [
                {
                    "paper_id": paper_id,
                    "score": 9,
                    "canonical_evidence": "命中会议检索需求。",
                    "matched_query_tag": tag,
                }
            ],
        }
        path.write_text(json.dumps(payload, ensure_ascii=False), encoding="utf-8")

    def test_update_sidebar_adds_conference_three_level_group(self):
        with tempfile.TemporaryDirectory() as tmp:
            tmp_path = pathlib.Path(tmp)
            sidebar = tmp_path / "_sidebar.md"
            result = tmp_path / "conference-icml-2025.supabase.llm.json"
            sidebar.write_text("* <a class=\"dpr-sidebar-root-link\" href=\"#/\">首页</a>\n* Daily Papers\n", encoding="utf-8")
            self.write_result(result)

            self.mod.update_sidebar_with_conference(sidebar, result, docs_dir=tmp_path / "docs", deep_min_score=-1)
            text = sidebar.read_text(encoding="utf-8")

            self.assertIn("* Conference Papers", text)
            self.assertIn("  * ICML 2025 <!--dpr-conference:icml-2025-->", text)
            self.assertNotIn("推荐论文", text)
            self.assertIn("    * rl <!--dpr-conference-topic:icml-2025:query-rl-->", text)
            self.assertIn("      * <a class=\"dpr-sidebar-item-link dpr-sidebar-item-structured\"", text)
            self.assertIn("href=\"#/conference/icml-2025/openreview-icml-2025-abc123-a-conference-paper\"", text)
            self.assertIn("A Conference Paper", text)
            self.assertIn("https://openreview.net/forum?id=abc123", text)
            self.assertIn("&quot;selection_source&quot;: &quot;conference_retrieval&quot;", text)
            self.assertIn("&quot;label&quot;: &quot;rl&quot;", text)
            self.assertNotIn("&quot;label&quot;: &quot;ICML&quot;", text)
            self.assertNotIn("&quot;label&quot;: &quot;2025&quot;", text)
            self.assertNotIn("rl:composite", text)
            self.assertIn("* Daily Papers", text)
            paper_md = tmp_path / "docs" / "conference" / "icml-2025" / "openreview-icml-2025-abc123-a-conference-paper.md"
            self.assertTrue(paper_md.exists())
            md_text = paper_md.read_text(encoding="utf-8")
            self.assertIn("title_zh: 会议论文中文标题", md_text)
            self.assertIn("pdf: \"https://openreview.net/pdf?id=abc123\"", md_text)
            self.assertIn("source: ICML-2025-Accepted", md_text)
            self.assertIn('tags: ["query:rl"]', md_text)
            self.assertNotIn("paper:ICML", md_text)
            self.assertNotIn("paper:2025", md_text)
            self.assertIn("selection_source: conference_retrieval", md_text)
            self.assertIn("motivation:", md_text)
            self.assertIn("method:", md_text)
            self.assertIn("method: 方法细节请参考摘要与 OpenReview 原文。", md_text)
            self.assertNotIn("method: This paper proposes", md_text)
            self.assertIn("result:", md_text)
            self.assertIn("conclusion:", md_text)
            self.assertIn("## Abstract", md_text)
            self.assertIn("## 论文详细总结（自动生成）", md_text)
            self.assertIn("### 1. 检索相关性", md_text)
            self.assertIn("### 4. 来源与原文", md_text)
            self.assertNotIn("# A Conference Paper", md_text)
            self.assertNotIn("## 命中理由", md_text)

    def test_update_sidebar_filters_score_three_and_keeps_four(self):
        with tempfile.TemporaryDirectory() as tmp:
            tmp_path = pathlib.Path(tmp)
            sidebar = tmp_path / "_sidebar.md"
            result = tmp_path / "conference-icml-2025.supabase.llm.json"
            payload = {
                "papers": [
                    {
                        "id": "openreview-icml-2025-low",
                        "title": "Score Three Paper",
                        "link": "https://openreview.net/forum?id=low",
                        "pdf_url": "https://openreview.net/pdf?id=low",
                        "source": "ICML-2025-Accepted",
                        "abstract": "Low score abstract.",
                    },
                    {
                        "id": "openreview-icml-2025-keep",
                        "title": "Score Four Paper",
                        "link": "https://openreview.net/forum?id=keep",
                        "pdf_url": "https://openreview.net/pdf?id=keep",
                        "source": "ICML-2025-Accepted",
                        "abstract": "High score abstract.",
                    },
                ],
                "queries": [],
                "llm_ranked": [
                    {"paper_id": "openreview-icml-2025-low", "score": 3, "canonical_evidence": "三分。"},
                    {"paper_id": "openreview-icml-2025-keep", "score": 4, "canonical_evidence": "四分。"},
                ],
            }
            result.write_text(json.dumps(payload, ensure_ascii=False), encoding="utf-8")

            self.mod.update_sidebar_with_conference(sidebar, result, docs_dir=tmp_path / "docs", deep_min_score=-1)
            text = sidebar.read_text(encoding="utf-8")

            self.assertNotIn("Score Three Paper", text)
            self.assertIn("Score Four Paper", text)
            self.assertFalse((tmp_path / "docs" / "conference" / "icml-2025" / "openreview-icml-2025-low-score-three-paper.md").exists())
            self.assertTrue((tmp_path / "docs" / "conference" / "icml-2025" / "openreview-icml-2025-keep-score-four-paper.md").exists())

    def test_update_sidebar_replaces_existing_conference_block(self):
        with tempfile.TemporaryDirectory() as tmp:
            tmp_path = pathlib.Path(tmp)
            sidebar = tmp_path / "_sidebar.md"
            result = tmp_path / "conference-icml-2025.supabase.llm.json"
            sidebar.write_text("* Daily Papers\n", encoding="utf-8")

            self.write_result(result, title="First Title")
            self.mod.update_sidebar_with_conference(sidebar, result, docs_dir=tmp_path / "docs", deep_min_score=-1)
            self.write_result(result, title="Second Title")
            self.mod.update_sidebar_with_conference(sidebar, result, docs_dir=tmp_path / "docs", deep_min_score=-1)
            text = sidebar.read_text(encoding="utf-8")

            self.assertEqual(text.count("<!--dpr-conference:icml-2025-->"), 1)
            self.assertEqual(text.count("<!--dpr-conference-topic:icml-2025:query-rl-->"), 1)
            self.assertNotIn("First Title", text)
            self.assertIn("Second Title", text)

    def test_update_sidebar_merges_different_topics_under_same_conference(self):
        with tempfile.TemporaryDirectory() as tmp:
            tmp_path = pathlib.Path(tmp)
            sidebar = tmp_path / "_sidebar.md"
            result = tmp_path / "conference-icml-2025.supabase.llm.json"
            sidebar.write_text("* Daily Papers\n", encoding="utf-8")

            self.write_result(result, title="RL Topic Paper")
            self.mod.update_sidebar_with_conference(sidebar, result, docs_dir=tmp_path / "docs", deep_min_score=-1)

            payload = json.loads(result.read_text(encoding="utf-8"))
            payload["papers"][0]["id"] = "openreview-icml-2025-xyz789"
            payload["papers"][0]["title"] = "LLM Topic Paper"
            payload["papers"][0]["link"] = "https://openreview.net/forum?id=xyz789"
            payload["papers"][0]["pdf_url"] = "https://openreview.net/pdf?id=xyz789"
            payload["llm_ranked"][0]["paper_id"] = "openreview-icml-2025-xyz789"
            payload["llm_ranked"][0]["matched_query_tag"] = "query:llm-sr"
            result.write_text(json.dumps(payload, ensure_ascii=False), encoding="utf-8")
            self.mod.update_sidebar_with_conference(sidebar, result, docs_dir=tmp_path / "docs", deep_min_score=-1)

            text = sidebar.read_text(encoding="utf-8")
            self.assertEqual(text.count("<!--dpr-conference:icml-2025-->"), 1)
            self.assertIn("<!--dpr-conference-topic:icml-2025:query-rl-->", text)
            self.assertIn("<!--dpr-conference-topic:icml-2025:query-llm-sr-->", text)
            self.assertIn("RL Topic Paper", text)
            self.assertIn("LLM Topic Paper", text)

    def test_update_sidebar_preserves_separate_year_blocks(self):
        with tempfile.TemporaryDirectory() as tmp:
            tmp_path = pathlib.Path(tmp)
            sidebar = tmp_path / "_sidebar.md"
            sidebar.write_text("* Daily Papers\n", encoding="utf-8")

            result_2025 = tmp_path / "conference-icml-2025.supabase.llm.json"
            result_2024 = tmp_path / "conference-icml-2024.supabase.llm.json"
            result_range = tmp_path / "conference-icml-2024-2025.supabase.llm.json"
            self.write_custom_result(result_2025, "openreview-icml-2025-a", "ICML 2025 Paper", "query:rl", "ICML-2025-Accepted")
            self.write_custom_result(result_2024, "openreview-icml-2024-b", "ICML 2024 Paper", "query:llm", "ICML-2024-Accepted")
            self.write_custom_result(result_range, "openreview-icml-range-c", "ICML Range Paper", "query:hybrid", "ICML-2024-2025-Accepted")

            for result in (result_2025, result_2024, result_range):
                self.mod.update_sidebar_with_conference(sidebar, result, docs_dir=tmp_path / "docs", deep_min_score=-1)

            text = sidebar.read_text(encoding="utf-8")
            self.assertIn("ICML 2025 <!--dpr-conference:icml-2025-->", text)
            self.assertIn("ICML 2024 <!--dpr-conference:icml-2024-->", text)
            self.assertIn("ICML 2024, 2025 <!--dpr-conference:icml-2024-2025-->", text)
            self.assertIn("ICML 2025 Paper", text)
            self.assertIn("ICML 2024 Paper", text)
            self.assertIn("ICML Range Paper", text)
            self.assertTrue((tmp_path / "docs" / "conference" / "icml-2025" / "openreview-icml-2025-a-icml-2025-paper.md").exists())
            self.assertTrue((tmp_path / "docs" / "conference" / "icml-2024" / "openreview-icml-2024-b-icml-2024-paper.md").exists())
            self.assertTrue((tmp_path / "docs" / "conference" / "icml-2024-2025" / "openreview-icml-range-c-icml-range-paper.md").exists())

    def test_conference_markdown_writes_media_json_front_matter(self):
        paper = {
            "id": "openreview-icml-2025-media",
            "title": "Media Paper",
            "authors": ["Ada"],
            "published": "2025-07-01",
            "pdf_url": "https://openreview.net/pdf?id=media",
            "source": "ICML-2025-Accepted",
            "abstract": "Media abstract.",
            "_figure_assets": [
                {"url": "assets/figures/openreview/media/fig-001.webp", "index": 1}
            ],
            "_table_assets": [
                {"url": "assets/tables/openreview/media/table-001.webp", "index": 1}
            ],
        }
        ranked = {
            "paper_id": "openreview-icml-2025-media",
            "score": 4,
            "canonical_evidence": "相关。",
            "matched_query_tag": "query:media",
        }

        md = self.mod.build_conference_markdown(paper, ranked, "ICML", "2025")
        meta = self.mod.parse_front_matter(md)

        self.assertIn("figures_json", meta)
        self.assertIn("tables_json", meta)
        figures = self.mod.parse_json_front_matter_value(meta["figures_json"])
        tables = self.mod.parse_json_front_matter_value(meta["tables_json"])
        self.assertEqual(figures[0]["url"], "assets/figures/openreview/media/fig-001.webp")
        self.assertEqual(tables[0]["url"], "assets/tables/openreview/media/table-001.webp")


if __name__ == "__main__":
    unittest.main()
