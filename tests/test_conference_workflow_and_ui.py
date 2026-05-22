import pathlib
import unittest

import yaml


class ConferenceWorkflowAndUiTest(unittest.TestCase):
    def test_daily_workflow_uses_fast_rerank_budget(self):
        root = pathlib.Path(__file__).resolve().parents[1]
        workflow_path = root / ".github" / "workflows" / "daily-paper-reader.yml"
        text = workflow_path.read_text(encoding="utf-8")

        self.assertIn("MKL_THREADING_LAYER: GNU", text)
        self.assertIn("DPR_RERANK_GLOBAL_POOL_LIMIT: \"120\"", text)
        self.assertIn("DPR_RERANK_GUARANTEED_PER_LANE: \"2\"", text)
        self.assertIn("RERANK_PROFILE", text)
        self.assertIn("RERANK_API_KEY", text)
        self.assertIn("SILICONFLOW_API_KEY", text)
        self.assertIn("BLT_RERANK_API_KEY", text)

    def test_conference_retrieval_workflow_dispatches_pipeline(self):
        root = pathlib.Path(__file__).resolve().parents[1]
        workflow_path = root / ".github" / "workflows" / "conference-paper-retrieval.yml"
        text = workflow_path.read_text(encoding="utf-8")
        workflow = yaml.safe_load(text) or {}
        on_block = workflow.get("on") or workflow.get(True) or {}
        inputs = (((on_block.get("workflow_dispatch") or {}).get("inputs")) or {})

        self.assertIn("conference", inputs)
        self.assertIn("years", inputs)
        self.assertEqual((inputs.get("top_k") or {}).get("default"), "50")
        self.assertEqual((inputs.get("rrf_top_n") or {}).get("default"), "200")
        self.assertEqual((inputs.get("run_rerank") or {}).get("default"), "true")
        self.assertEqual((inputs.get("reranker_profile") or {}).get("default"), "")
        self.assertEqual((inputs.get("run_llm_refine") or {}).get("default"), "true")
        self.assertIn("MKL_THREADING_LAYER: GNU", text)
        self.assertIn("DPR_RERANK_GLOBAL_POOL_LIMIT: \"120\"", text)
        self.assertIn("DPR_RERANK_GUARANTEED_PER_LANE: \"2\"", text)
        self.assertIn("RERANK_PROFILE", text)
        self.assertIn("RERANK_API_KEY", text)
        self.assertIn("SILICONFLOW_API_KEY", text)
        self.assertIn("BLT_RERANK_API_KEY", text)
        self.assertIn("DEEPSEEK_API_KEY", text)
        self.assertIn("python src/conference_pipeline.py", text)
        self.assertIn("--run-llm-refine", text)
        self.assertIn("--output-dir \"archive/${RUN_DATE}/filtered\"", text)
        self.assertIn("DPR_FILTER_PROFILE_TAG", text)

    def test_frontend_triggers_conference_retrieval_workflow(self):
        root = pathlib.Path(__file__).resolve().parents[1]
        runner = (root / "app" / "workflows.runner.js").read_text(encoding="utf-8")
        manager = (root / "app" / "subscriptions.manager.js").read_text(encoding="utf-8")

        self.assertIn("conference-paper-retrieval.yml", runner)
        self.assertIn("runConferenceRetrieval", runner)
        self.assertIn("run_rerank: 'true'", runner)
        self.assertIn("run_llm_refine: 'true'", runner)
        self.assertIn("reranker_profile", runner)
        self.assertIn("runConferenceRetrieval(conf, years)", manager)
        self.assertIn("会议论文检索", manager)
        self.assertNotIn("runConferenceMaintain(conf, years)", manager)


if __name__ == "__main__":
    unittest.main()
