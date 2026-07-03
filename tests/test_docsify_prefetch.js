const assert = require('assert');
const fs = require('fs');

const js = fs.readFileSync('app/docsify-plugin.js', 'utf8');

function testPrefetchCachesMissingMarkdown() {
  const start = js.indexOf('const prefetchHref = async (href) => {');
  const end = js.indexOf('const prefetchAdjacent = () => {', start);
  assert.ok(start > 0 && end > start, 'prefetchHref should be present');
  const block = js.slice(start, end);

  assert.ok(
    /if\s*\(!res\.ok\)\s*{[\s\S]*PREFETCH_STATE\.cache\.set\(key,\s*{[\s\S]*missing:\s*true[\s\S]*}\);[\s\S]*return;/m.test(block),
    'prefetchHref should cache non-ok responses so missing paper markdown is not refetched on every sidebar update',
  );
}

testPrefetchCachesMissingMarkdown();

console.log('docsify prefetch tests passed');
