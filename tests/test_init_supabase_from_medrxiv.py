import importlib.util
import pathlib
import sys
import unittest


def _load_module(module_name: str, path: pathlib.Path):
    spec = importlib.util.spec_from_file_location(module_name, path)
    mod = importlib.util.module_from_spec(spec)
    assert spec and spec.loader
    spec.loader.exec_module(mod)
    return mod


class InitSupabaseFromMedRxivTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        root = pathlib.Path(__file__).resolve().parents[1]
        src_dir = root / "src"
        maintain_dir = src_dir / "maintain"
        for path in (src_dir, maintain_dir):
            if str(path) not in sys.path:
                sys.path.insert(0, str(path))
        cls.mod = _load_module(
            "init_medrxiv_supabase_mod",
            src_dir / "maintain" / "init_medrxiv.py",
        )

    def test_resolve_date_token_long_range(self):
        token = self.mod.resolve_date_token("", 30)
        self.assertRegex(token, r"^\d{8}-\d{8}$")

    def test_resolve_date_token_manual(self):
        token = self.mod.resolve_date_token("20260301-20260310", 30)
        self.assertEqual(token, "20260301-20260310")

    def test_remote_sync_streams_completed_chunks(self):
        source = (pathlib.Path(self.mod.__file__)).read_text(encoding="utf-8")
        self.assertIn('DEFAULT_EMBED_CHUNK_SIZE = 128', source)
        self.assertIn('sync_cmd.append("--stream-upsert")', source)


if __name__ == "__main__":
    unittest.main()
