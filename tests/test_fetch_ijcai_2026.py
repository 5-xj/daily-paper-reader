"""IJCAI 正式论文集的摘要和发布日期不得用占位值代替。"""

import importlib.util
from pathlib import Path
from unittest.mock import patch

import pytest
from bs4 import BeautifulSoup


ROOT = Path(__file__).resolve().parents[1]
SPEC = importlib.util.spec_from_file_location(
    "fetch_ijcai_2026_test_mod", ROOT / "src/maintain/fetchers/fetch_ijcai.py"
)
fetcher = importlib.util.module_from_spec(SPEC)
assert SPEC and SPEC.loader
SPEC.loader.exec_module(fetcher)


INDEX = """
<div class="paper_wrapper">
  <div class="title">An IJCAI 2026 Paper</div>
  <div class="authors">Ada Lovelace, Alan Turing</div>
  <div class="details"><a href="0001.pdf">PDF</a> | <a href="/proceedings/2026/1">Details</a></div>
</div>
"""
DETAIL = """
<meta name="citation_publication_date" content="2026/09/16">
<div class="container-fluid proceedings-detail">
  <div class="row"><div class="col-md-12">A verified abstract from the official detail page.</div></div>
  <div class="row"><div class="col-md-12"><div class="keywords">Keywords: agents</div></div></div>
</div>
"""


def test_ijcai_detail_supplies_abstract_and_real_publication_date():
    wrapper = BeautifulSoup(INDEX, "html.parser").select_one(".paper_wrapper")
    with patch.object(fetcher, "_get", return_value=DETAIL) as get:
        paper = fetcher._parse_paper(wrapper, 2026)
    get.assert_called_once_with("https://www.ijcai.org/proceedings/2026/1")
    assert paper["abstract"] == "A verified abstract from the official detail page."
    assert paper["authors"] == ["Ada Lovelace", "Alan Turing"]
    assert paper["published"] == "2026-09-16T00:00:00+00:00"
    assert paper["publication_date"] == "2026-09-16"
    assert paper["publication_date_precision"] == "day"
    assert paper["pdf_url"] == "https://www.ijcai.org/proceedings/2026/0001.pdf"


def test_ijcai_missing_detail_date_does_not_fabricate_august_first():
    wrapper = BeautifulSoup(INDEX, "html.parser").select_one(".paper_wrapper")
    with patch.object(fetcher, "_get", return_value=DETAIL.replace("2026/09/16", "unknown")):
        paper = fetcher._parse_paper(wrapper, 2026)
    assert paper["published"] is None
    assert paper["publication_date"] == "2026"
    assert paper["publication_date_precision"] == "year"


def test_ijcai_2026_full_fetch_refuses_incomplete_detail_before_sync():
    def response(url):
        return INDEX if url.endswith("/2026/") else DETAIL.replace("2026/09/16", "unknown")

    with patch.object(fetcher, "_get", side_effect=response):
        with pytest.raises(RuntimeError, match="incomplete official proceedings"):
            fetcher.fetch_year(2026, workers=1, fetch_abstracts=True)
