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
            self.assertIn("    * <a class=\"dpr-sidebar-item-link dpr-sidebar-item-structured\"", text)
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
            self.assertNotIn("First Title", text)
            self.assertIn("Second Title", text)


if __name__ == "__main__":
    unittest.main()
