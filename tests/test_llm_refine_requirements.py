import importlib.util
import os
import pathlib
import sys
import unittest
from unittest.mock import patch


def _load_refine_module():
    root = pathlib.Path(__file__).resolve().parents[1]
    src_dir = root / "src"
    if str(src_dir) not in sys.path:
        sys.path.insert(0, str(src_dir))
    spec = importlib.util.spec_from_file_location(
        "llm_refine_requirements_mod",
        src_dir / "4.llm_refine_papers.py",
    )
    module = importlib.util.module_from_spec(spec)
    assert spec and spec.loader
    spec.loader.exec_module(module)
    return module


def _config_with_active_and_paused_profiles():
    return {
        "subscriptions": {
            "intent_profiles": [
                {
                    "tag": "Active",
                    "enabled": True,
                    "keywords": [
                        {"keyword": "active one", "query": "active semantic one"},
                        {"keyword": "active two", "query": "active semantic two"},
                    ],
                },
                {
                    "tag": "Paused",
                    "enabled": True,
                    "paused": True,
                    "keywords": [
                        {"keyword": "paused one", "query": "paused semantic one"},
                        {"keyword": "paused two", "query": "paused semantic two"},
                    ],
                },
            ]
        }
    }


class LlmRefineRequirementsTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.refine = _load_refine_module()

    def test_active_profile_generates_composite_requirement(self):
        with patch.dict(os.environ, {}, clear=True):
            requirements = self.refine.build_user_requirements(
                _config_with_active_and_paused_profiles(),
                [],
            )

        composite_tags = {
            item["tag"] for item in requirements if item.get("kind") == "composite"
        }
        self.assertIn("query:active:composite", composite_tags)

    def test_paused_profile_does_not_generate_composite_by_default(self):
        with patch.dict(os.environ, {}, clear=True):
            requirements = self.refine.build_user_requirements(
                _config_with_active_and_paused_profiles(),
                [],
            )

        composite_tags = {
            item["tag"] for item in requirements if item.get("kind") == "composite"
        }
        self.assertNotIn("query:paused:composite", composite_tags)

    def test_explicit_runtime_filter_allows_paused_profile_composite(self):
        with patch.dict(
            os.environ,
            {"DPR_FILTER_PROFILE_TAG": "Paused"},
            clear=True,
        ):
            requirements = self.refine.build_user_requirements(
                _config_with_active_and_paused_profiles(),
                [],
            )

        composite_tags = {
            item["tag"] for item in requirements if item.get("kind") == "composite"
        }
        self.assertEqual(composite_tags, {"query:paused:composite"})


if __name__ == "__main__":
    unittest.main()
