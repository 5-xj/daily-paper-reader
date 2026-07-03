const assert = require('node:assert/strict');
const fs = require('node:fs');

const css = fs.readFileSync('app/app.css', 'utf8');

function readRule(selector) {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = css.match(new RegExp(`${escaped}\\s*\\{([^}]+)\\}`));
  assert.ok(match, `missing CSS rule: ${selector}`);
  return match[1];
}

function readColor(selector) {
  const rule = readRule(selector);
  const match = rule.match(/color:\s*([^;]+);/);
  assert.ok(match, `missing color declaration: ${selector}`);
  return match[1].trim();
}

function testConferenceChoiceCountsUseGreenOnly() {
  const green = '#166534';
  assert.equal(readColor('.dpr-choice-year'), green);
  assert.equal(readColor('.dpr-choice-total-wrap'), green);
  assert.equal(readColor('.dpr-choice-total'), green);
}

testConferenceChoiceCountsUseGreenOnly();
console.log('conference choice css tests passed');
