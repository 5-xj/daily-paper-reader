import importlib.util
import pathlib
import sys
import unittest


def _load_module(module_name: str, path: pathlib.Path):
    spec = importlib.util.spec_from_file_location(module_name, path)
    module = importlib.util.module_from_spec(spec)
    assert spec and spec.loader
    sys.modules[module_name] = module
    spec.loader.exec_module(module)
    return module


class Sosp2026MetadataTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        root = pathlib.Path(__file__).resolve().parents[1]
        src_dir = root / "src"
        if str(src_dir) not in sys.path:
            sys.path.insert(0, str(src_dir))
        cls.fetcher = _load_module(
            "sosp_2026_fetcher_test_module",
            src_dir / "maintain" / "fetchers" / "fetch_systems_security_conferences.py",
        )
        cls.sync = _load_module("sosp_2026_sync_test_module", src_dir / "maintain" / "sync.py")
        cls.paper_dates = _load_module("sosp_2026_dates_test_module", src_dir / "paper_dates.py")

    def test_schedule_parser_reads_formal_acm_metadata(self):
        html = """
        <ul class="papers">
          <li>Janus: Multi-LLM Serving at Production Scale
            [<a href="https://dl.acm.org/doi/10.1145/3830418.3843867">paper</a>]<br>
            <em>Ada Lovelace</em>
          </li>
        </ul>
        """
        items = self.fetcher.parse_sosp_schedule_page(html)
        self.assertEqual(
            items,
            [{
                "title": "Janus: Multi-LLM Serving at Production Scale",
                "doi": "10.1145/3830418.3843867",
                "link": "https://dl.acm.org/doi/10.1145/3830418.3843867",
                "pdf_url": "https://dl.acm.org/doi/pdf/10.1145/3830418.3843867",
                "source_paper_id": "10.1145/3830418.3843867",
            }],
        )

    def test_schedule_metadata_matches_accepted_title(self):
        papers = [{"title": "Janus: Multi-LLM Serving at Production Scale", "link": "accepted"}]
        items = [{
            "title": "Janus: Multi-LLM Serving at Production Scale",
            "doi": "10.1145/3830418.3843867",
            "link": "https://dl.acm.org/doi/10.1145/3830418.3843867",
            "pdf_url": "https://dl.acm.org/doi/pdf/10.1145/3830418.3843867",
            "source_paper_id": "10.1145/3830418.3843867",
        }]
        result = self.fetcher.apply_sosp_schedule_metadata(papers, items)
        self.assertEqual(result[0]["doi"], "10.1145/3830418.3843867")
        self.assertEqual(result[0]["source_paper_id"], "10.1145/3830418.3843867")
        self.assertEqual(result[0]["pdf_url"], "https://dl.acm.org/doi/pdf/10.1145/3830418.3843867")

    def test_sync_preserves_formal_metadata_without_empty_overwrites(self):
        row = self.sync.normalize_paper({
            "id": "sosp-2026-janus",
            "title": "Janus",
            "doi": "10.1145/3830418.3843867",
            "source_paper_id": "10.1145/3830418.3843867",
            "version": "",
            "pdf_url": "https://dl.acm.org/doi/pdf/10.1145/3830418.3843867",
        })
        self.assertEqual(row["doi"], "10.1145/3830418.3843867")
        self.assertEqual(row["source_paper_id"], "10.1145/3830418.3843867")
        self.assertNotIn("version", row)

    def test_official_release_registry_uses_proceedings_date(self):
        result = self.paper_dates.resolve_publication_date(
            {"source": "SOSP-2026-ACM"},
            "SOSP",
            2026,
        )
        self.assertEqual(result["publication_date"], "2026-09-28")
        self.assertEqual(result["publication_date_precision"], "day")
        self.assertEqual(result["publication_date_kind"], "proceedings")


if __name__ == "__main__":
    unittest.main()
