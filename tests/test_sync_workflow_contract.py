from pathlib import Path
import re


SYNC_WORKFLOW = Path(".github/workflows/sync.yml")


def test_sync_workflow_random_delay_fits_job_timeout():
    text = SYNC_WORKFLOW.read_text(encoding="utf-8")
    timeout_match = re.search(r"timeout-minutes:\s*(\d+)", text)
    delay_match = re.search(r"shuf\s+-i\s+0-(\d+)\s+-n\s+1", text)

    assert timeout_match, "sync.yml must set an explicit job timeout"
    assert delay_match, "sync.yml must keep scheduled runs staggered with a bounded delay"

    timeout_seconds = int(timeout_match.group(1)) * 60
    max_delay_seconds = int(delay_match.group(1))

    assert (
        max_delay_seconds + 900 <= timeout_seconds
    ), "random delay must leave at least 15 minutes for the actual upstream sync"


def test_sync_workflow_requests_pages_rebuild_after_successful_sync():
    text = SYNC_WORKFLOW.read_text(encoding="utf-8")

    assert re.search(r"pages:\s*write", text), "GITHUB_TOKEN needs Pages write permission"
    assert "Request GitHub Pages rebuild" in text
    assert "/pages/builds" in text
    assert "secrets.GITHUB_TOKEN" in text

    sync_step = text.index("Sync upstream changes")
    rebuild_step = text.index("Request GitHub Pages rebuild")
    assert sync_step < rebuild_step, "Pages rebuild must happen after upstream sync"
