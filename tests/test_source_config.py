import unittest
import sys
from pathlib import Path
from unittest.mock import patch

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
from src.source_config import (
    ARXIV_SOURCE_KEY,
    get_source_backend,
    get_supabase_shared_config,
    migrate_source_config_inplace,
    resolve_source_backends,
)


class SourceConfigMigrationTest(unittest.TestCase):
    def test_migrate_fills_missing_paper_sources_and_source_backends(self):
        cfg = {
            "supabase": {
                "enabled": True,
                "url": "https://example.supabase.co",
                "anon_key": "anon",
                "papers_table": "arxiv_papers",
                "use_bm25_rpc": True,
                "use_vector_rpc": True,
            },
            "subscriptions": {
                "intent_profiles": [
                    {
                        "tag": "AHD",
                        "enabled": True,
                        "keywords": [{"keyword": "test", "query": "test"}],
                    }
                ]
            },
        }
        changed, notes = migrate_source_config_inplace(cfg)
        self.assertTrue(changed)
        self.assertTrue(notes)
        self.assertEqual(cfg["subscriptions"]["intent_profiles"][0]["paper_sources"], [ARXIV_SOURCE_KEY])
        self.assertIn("source_backends", cfg)
        self.assertIn(ARXIV_SOURCE_KEY, cfg["source_backends"])

    def test_migrate_rejects_empty_paper_sources(self):
        cfg = {
            "subscriptions": {
                "intent_profiles": [
                    {
                        "tag": "BAD",
                        "enabled": True,
                        "paper_sources": [],
                        "keywords": [{"keyword": "test", "query": "test"}],
                    }
                ]
            }
        }
        with self.assertRaises(ValueError):
            migrate_source_config_inplace(cfg)

    def test_resolve_source_backends_prefers_new_shape(self):
        cfg = {
            "supabase_shared": {
                "enabled": True,
                "url": "https://shared.supabase.co",
                "anon_key": "shared-key",
                "schema": "public",
            },
            "source_backends": {
                "arxiv": {
                    "url": "https://new.supabase.co",
                    "papers_table": "papers",
                }
            },
            "supabase": {
                "enabled": True,
                "url": "https://legacy.supabase.co",
                "anon_key": "legacy-key",
            },
        }
        backends = resolve_source_backends(cfg)
        self.assertEqual(backends["arxiv"]["url"], "https://new.supabase.co")
        self.assertEqual(get_source_backend(cfg, "arxiv")["anon_key"], "shared-key")

    def test_resolve_source_backends_merges_supabase_shared(self):
        cfg = {
            "supabase_shared": {
                "enabled": True,
                "url": "https://shared.supabase.co",
                "anon_key": "shared-key",
                "schema": "public",
            },
            "source_backends": {
                "biorxiv": {
                    "enabled": False,
                    "papers_table": "biorxiv_papers",
                    "vector_rpc_exact": "match_biorxiv_papers_exact",
                    "bm25_rpc": "match_biorxiv_papers_bm25",
                }
            },
        }
        shared = get_supabase_shared_config(cfg)
        self.assertEqual(shared["url"], "https://shared.supabase.co")
        backend = get_source_backend(cfg, "biorxiv")
        self.assertEqual(backend["url"], "https://shared.supabase.co")
        self.assertEqual(backend["anon_key"], "shared-key")
        self.assertEqual(backend["papers_table"], "biorxiv_papers")
        self.assertFalse(backend["enabled"])

    def test_resolve_source_backends_supports_env_biorxiv_backend(self):
        cfg = {
            "supabase_shared": {
                "url": "https://shared.supabase.co",
                "anon_key": "shared-key",
                "schema": "public",
            }
        }
        with patch.dict(
            "os.environ",
            {
                "DPR_ENABLE_BIORXIV_BACKEND": "1",
                "DPR_BIORXIV_ENABLED": "1",
                "DPR_BIORXIV_PAPERS_TABLE": "biorxiv_papers",
                "DPR_BIORXIV_VECTOR_RPC_EXACT": "match_biorxiv_papers_exact",
                "DPR_BIORXIV_BM25_RPC": "match_biorxiv_papers_bm25",
            },
            clear=False,
        ):
            backend = get_source_backend(cfg, "biorxiv")
        self.assertEqual(backend["url"], "https://shared.supabase.co")
        self.assertEqual(backend["papers_table"], "biorxiv_papers")
        self.assertEqual(backend["vector_rpc_exact"], "match_biorxiv_papers_exact")


if __name__ == "__main__":
    unittest.main()
