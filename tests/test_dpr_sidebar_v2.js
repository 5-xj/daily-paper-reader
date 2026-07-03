const assert = require('node:assert/strict');
const fs = require('node:fs');

function decodeEntities(value) {
  return String(value || '')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

function setupBrowserStub(hash) {
  global.window = {
    location: { hash: hash || '#/' },
    localStorage: {
      getItem: () => null,
      setItem: () => {},
    },
    addEventListener: () => {},
    setTimeout,
    clearTimeout,
    matchMedia: () => ({ matches: false }),
    CSS: {
      escape: (value) => String(value),
    },
  };
  global.document = {
    readyState: 'loading',
    addEventListener: () => {},
    querySelector: () => null,
    querySelectorAll: () => [],
    createElement: () => {
      let text = '';
      return {
        set innerHTML(value) {
          text = decodeEntities(value).replace(/<[^>]*>/g, '');
        },
        get innerHTML() {
          return text;
        },
        get textContent() {
          return text;
        },
        set textContent(value) {
          text = String(value == null ? '' : value);
        },
      };
    },
    body: {
      appendChild: () => {},
      classList: { add: () => {} },
    },
    documentElement: {
      style: { setProperty: () => {} },
    },
  };
}

function loadSidebarForTest(hash) {
  setupBrowserStub(hash);
  delete require.cache[require.resolve('../app/dpr-sidebar.js')];
  return require('../app/dpr-sidebar.js');
}

function cssRule(css, selector) {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = new RegExp('(^|\\n)\\s*' + escaped + '\\s*\\{').exec(css);
  const index = match ? match.index + match[1].length : -1;
  assert.notEqual(index, -1, selector + ' CSS rule should exist');
  const start = css.indexOf('{', index);
  const end = css.indexOf('}', start);
  assert.ok(start >= 0 && end > start, selector + ' CSS rule should be complete');
  return css.slice(start + 1, end);
}

function createClassList(initial = []) {
  const values = new Set(initial);
  return {
    add: (...items) => items.forEach((item) => values.add(item)),
    remove: (...items) => items.forEach((item) => values.delete(item)),
    contains: (item) => values.has(item),
    toggle(item, force) {
      if (typeof force === 'boolean') {
        if (force) values.add(item);
        else values.delete(item);
        return force;
      }
      if (values.has(item)) {
        values.delete(item);
        return false;
      }
      values.add(item);
      return true;
    },
    toString: () => Array.from(values).join(' '),
  };
}

const sampleSidebar = `
* <a class="dpr-sidebar-root-link" href="#/">首页</a>
* <a class="dpr-sidebar-root-link" href="#/tutorial/README">使用教程</a>

* Conference Papers
  * NEURIPS 2024 <!--dpr-conference:neurips-2024-->
    * rl <!--dpr-conference-topic:neurips-2024:query-rl-->
      * <a class="dpr-sidebar-item-link dpr-sidebar-item-structured" href="#/conference/neurips-2024/paper-c" data-sidebar-item="{&quot;title&quot;:&quot;Paper C&quot;,&quot;score&quot;:&quot;9.0&quot;,&quot;tags&quot;:[{&quot;kind&quot;:&quot;query&quot;,&quot;label&quot;:&quot;rl&quot;}]}">Fallback C</a>
  * ICLR 2025 <!--dpr-conference:iclr-2025-->
    * symbolic <!--dpr-conference-topic:iclr-2025:query-symbolic-->
      * <a class="dpr-sidebar-item-link dpr-sidebar-item-structured" href="#/conference/iclr-2025/paper-e" data-sidebar-item="{&quot;title&quot;:&quot;Paper E&quot;,&quot;score&quot;:&quot;8.0&quot;,&quot;tags&quot;:[{&quot;kind&quot;:&quot;query&quot;,&quot;label&quot;:&quot;symbolic&quot;}]}">Fallback E</a>

* Daily Papers
  * 2026-06-24 <!--dpr-date:20260624-->
    * 精读区
      * <a class="dpr-sidebar-item-link dpr-sidebar-item-structured" href="#/202606/24/paper-a" data-sidebar-item="{&quot;title&quot;:&quot;Paper A&quot;,&quot;score&quot;:&quot;10.0&quot;,&quot;evidence&quot;:&quot;中文解释 A&quot;,&quot;tags&quot;:[{&quot;kind&quot;:&quot;query&quot;,&quot;label&quot;:&quot;rl&quot;}]}">Fallback A</a>
    * 速读区
      * <a class="dpr-sidebar-item-link dpr-sidebar-item-structured" href="#/202606/24/paper-b" data-sidebar-item="{&quot;title&quot;:&quot;Paper B&quot;,&quot;score&quot;:&quot;8.0&quot;}">Fallback B</a>
  * 2026-06-23 <!--dpr-date:20260623-->
    * 精读区
      * <a class="dpr-sidebar-item-link dpr-sidebar-item-structured" href="#/202606/23/paper-d" data-sidebar-item="{&quot;title&quot;:&quot;Paper D&quot;,&quot;score&quot;:&quot;9.0&quot;,&quot;tags&quot;:[{&quot;kind&quot;:&quot;query&quot;,&quot;label&quot;:&quot;rl&quot;}]}">Fallback D</a>
`;

const unorderedSidebar = `
* <a class="dpr-sidebar-root-link" href="#/">首页</a>

* Conference Papers
  * NEURIPS 2024 <!--dpr-conference:neurips-2024-->
    * rl
      * <a class="dpr-sidebar-item-link" href="#/conference/neurips-2024/conf-old" data-sidebar-item="{&quot;title&quot;:&quot;Conf Old&quot;,&quot;published&quot;:&quot;2024-04-01&quot;}">Conf Old</a>
      * <a class="dpr-sidebar-item-link" href="#/conference/neurips-2024/conf-new" data-sidebar-item="{&quot;title&quot;:&quot;Conf New&quot;,&quot;published&quot;:&quot;2024-09-01&quot;}">Conf New</a>
  * ICLR 2025 <!--dpr-conference:iclr-2025-->
    * rl
      * <a class="dpr-sidebar-item-link" href="#/conference/iclr-2025/conf-2025" data-sidebar-item="{&quot;title&quot;:&quot;Conf 2025&quot;}">Conf 2025</a>

* Daily Papers
  * 2026-06-23 <!--dpr-date:20260623-->
    * 精读区
      * <a class="dpr-sidebar-item-link" href="#/202606/23/old" data-sidebar-item="{&quot;title&quot;:&quot;Old Daily&quot;,&quot;published&quot;:&quot;2026-06-23T02:00:00Z&quot;}">Old Daily</a>
  * 2026-06-25 <!--dpr-date:20260625-->
    * 精读区
      * <a class="dpr-sidebar-item-link" href="#/202606/25/new" data-sidebar-item="{&quot;title&quot;:&quot;New Daily&quot;,&quot;published&quot;:&quot;2026-06-25T02:00:00Z&quot;}">New Daily</a>
`;

function testSidebarNavigationContract() {
  const sidebar = loadSidebarForTest('#/202606/24/paper-b?from=test');
  const tools = sidebar.__test;
  assert.ok(tools, 'dpr-sidebar.js should export test helpers');
  assert.equal(typeof tools.parseSidebar, 'function');

  const model = tools.parseSidebar(sampleSidebar);
  assert.deepEqual(tools.collectPaperHrefsFromModel(model), [
    '#/202606/24/paper-a',
    '#/202606/24/paper-b',
    '#/202606/23/paper-d',
    '#/conference/iclr-2025/paper-e',
    '#/conference/neurips-2024/paper-c',
  ]);
  assert.deepEqual(tools.collectReportHrefsFromModel(model), [
    '#/202606/24/README',
    '#/202606/23/README',
  ]);
  assert.equal(
    tools.findCurrentPaperHrefFromModel(model, '#/202606/24/paper-b?from=test'),
    '#/202606/24/paper-b',
  );
  assert.equal(
    tools.findCurrentReportHrefFromModel(model, '#/202606/24/README'),
    '#/202606/24/README',
  );
}

function testAxisViewsForDailyAndConference() {
  const sidebar = loadSidebarForTest('#/202606/24/paper-a');
  const tools = sidebar.__test;
  const model = tools.parseSidebar(sampleSidebar);
  assert.equal(typeof tools.buildDailyDateView, 'function');
  assert.equal(typeof tools.buildDailyTagView, 'function');
  assert.equal(typeof tools.buildConferenceConfView, 'function');
  assert.equal(typeof tools.buildConferenceTagView, 'function');

  const dateView = tools.buildDailyDateView(model, '20260623');
  assert.deepEqual(dateView.tabs.map((tab) => tab.label), ['2026-06-24', '2026-06-23']);
  assert.equal(dateView.activeKey, '20260623');
  assert.deepEqual(dateView.groups.map((group) => group.label), ['2026-06-23']);
  assert.deepEqual(dateView.groups[0].papers.map((paper) => paper.title), ['Paper D']);

  const dailyTagView = tools.buildDailyTagView(model, 'rl');
  assert.deepEqual(dailyTagView.tabs.map((tab) => tab.label), ['rl', '未标注']);
  assert.equal(dailyTagView.activeKey, 'rl');
  assert.deepEqual(dailyTagView.groups.map((group) => group.label), ['2026-06-24', '2026-06-23']);
  assert.deepEqual(dailyTagView.groups.map((group) => group.papers.map((paper) => paper.title)), [
    ['Paper A'],
    ['Paper D'],
  ]);

  const confView = tools.buildConferenceConfView(model, 'iclr-2025');
  assert.deepEqual(confView.tabs.map((tab) => tab.label), ['ICLR 2025', 'NEURIPS 2024']);
  assert.equal(confView.activeKey, 'iclr-2025');
  assert.deepEqual(confView.groups.map((group) => group.label), ['symbolic']);
  assert.deepEqual(confView.groups[0].papers.map((paper) => paper.title), ['Paper E']);

  const confTagView = tools.buildConferenceTagView(model, 'rl');
  assert.deepEqual(confTagView.tabs.map((tab) => tab.label), ['symbolic', 'rl']);
  assert.equal(confTagView.activeKey, 'rl');
  assert.deepEqual(confTagView.groups.map((group) => group.label), ['NEURIPS 2024 / rl']);
  assert.deepEqual(confTagView.groups[0].papers.map((paper) => paper.title), ['Paper C']);
}

function testHyphenatedConferenceMarkerParsing() {
  const sidebar = loadSidebarForTest('#/conference/ieee-sp-2025/paper-s');
  const tools = sidebar.__test;
  const model = tools.parseSidebar(`
* Conference Papers
  * IEEE_SP 2025 <!--dpr-conference:ieee-sp-2025-->
    * security
      * <a class="dpr-sidebar-item-link" href="#/conference/ieee-sp-2025/paper-s" data-sidebar-item="{&quot;title&quot;:&quot;Paper S&quot;}">Paper S</a>
`);
  assert.deepEqual(model.conferences.map((conf) => [conf.name, conf.years]), [['ieee-sp', '2025']]);
  const confView = tools.buildConferenceConfView(model, 'ieee-sp-2025');
  assert.deepEqual(confView.tabs.map((tab) => tab.key), ['ieee-sp-2025']);
}

function testAxisTabsRenderUnreadCounts() {
  const sidebar = loadSidebarForTest('#/202606/24/paper-a');
  const tools = sidebar.__test;
  const model = tools.parseSidebar(sampleSidebar);

  const html = tools.renderBodyHtml(model, {
    expandedGroups: { conference: true, daily: true },
    conferenceViewMode: 'conf',
    dailyViewMode: 'date',
    activeConference: 'neurips-2024',
    activeDailyDate: '20260624',
    readMap: {
      '202606/24/paper-a': 'read',
      'conference/neurips-2024/paper-c': 'good',
    },
  });

  assert.ok(html.includes('data-axis-key="20260624"'));
  assert.ok(html.includes('data-axis-key="20260624" data-unread="1"'));
  assert.ok(!html.includes('dpr-sidebar-axis-tab-dot'));
  assert.ok(html.includes('<span class="dpr-sidebar-axis-tab-unread">1</span>/<span class="dpr-sidebar-axis-tab-total">2</span>'));
  assert.ok(html.includes('data-axis-key="neurips-2024"'));
  assert.ok(html.includes('data-axis-key="neurips-2024" data-unread="0"'));
  assert.ok(html.includes('<span class="dpr-sidebar-axis-tab-unread">0</span>/<span class="dpr-sidebar-axis-tab-total">1</span>'));
  assert.ok(html.includes('data-axis-section-toggle="daily:date:20260624" aria-expanded="true" data-unread="1"'));
  assert.ok(!html.includes('dpr-sidebar-axis-section-dot'));

  assert.equal(typeof tools.buildAxisViewForMode, 'function');
  const updatedDateView = tools.buildAxisViewForMode(model, 'daily', 'date', {
    dailyViewMode: 'date',
    activeDailyDate: '20260624',
  }, {
    '202606/24/paper-a': 'read',
    '202606/24/paper-b': 'blue',
  });
  const updatedDateTab = updatedDateView.tabs.find((tab) => tab.key === '20260624');
  assert.equal(updatedDateTab.unreadCount, 0);
  assert.equal(updatedDateView.groups[0].unreadCount, 0);

  const updatedConferenceView = tools.buildAxisViewForMode(model, 'conference', 'conf', {
    conferenceViewMode: 'conf',
    activeConference: 'neurips-2024',
  }, {
    'conference/neurips-2024/paper-c': 'good',
  });
  const updatedConferenceTab = updatedConferenceView.tabs.find((tab) => tab.key === 'neurips-2024');
  assert.equal(updatedConferenceTab.unreadCount, 0);
  assert.equal(updatedConferenceView.groups[0].unreadCount, 0);
}

function testPaperEvidenceAndActionButtonsRender() {
  const sidebar = loadSidebarForTest('#/202606/24/paper-a');
  const tools = sidebar.__test;
  const model = tools.parseSidebar(sampleSidebar);

  const html = tools.renderBodyHtml(model, {
    expandedGroups: { conference: true, daily: true },
    conferenceViewMode: 'conf',
    dailyViewMode: 'date',
    activeConference: 'neurips-2024',
    activeDailyDate: '20260624',
  });

  assert.ok(html.includes('中文解释 A'));
  assert.ok(html.includes('class="dpr-sidebar-paper-actions"'));
  assert.ok(!html.includes('dpr-sidebar-paper-unread-dot'));
  assert.ok(html.includes('data-paper-status="good"'));
  assert.ok(html.includes('data-paper-status="blue"'));
  assert.ok(html.includes('data-paper-status="orange"'));
  assert.ok(html.includes('data-paper-status="bad"'));
}

function testPaperMetaOrderKeepsEvidenceBetweenTitleAndStars() {
  const sidebar = loadSidebarForTest('#/202606/24/paper-a');
  const tools = sidebar.__test;
  const model = tools.parseSidebar(sampleSidebar);
  const html = tools.renderBodyHtml(model, {
    expandedGroups: { conference: true, daily: true },
    conferenceViewMode: 'conf',
    dailyViewMode: 'date',
    activeConference: 'neurips-2024',
    activeDailyDate: '20260624',
  });
  const titleIndex = html.indexOf('<span class="dpr-sidebar-paper-title">Paper A</span>');
  const evidenceIndex = html.indexOf('<div class="dpr-sidebar-paper-evidence">中文解释 A</div>');
  const starsIndex = html.indexOf('<span class="dpr-sidebar-paper-stars" data-score="10.0">★★★★★</span>');
  const tagsIndex = html.indexOf('<span class="dpr-sidebar-paper-tags">', starsIndex);

  assert.ok(titleIndex >= 0, 'title should render');
  assert.ok(evidenceIndex > titleIndex, 'Chinese evidence should render after title');
  assert.ok(starsIndex > evidenceIndex, 'stars should render after Chinese evidence');
  assert.ok(tagsIndex > starsIndex, 'tags should stay on the same metadata line after stars');
}

function testQuickLinksCenterTextAndDetachIcon() {
  const sidebar = loadSidebarForTest('#/');
  const tools = sidebar.__test;
  assert.equal(typeof tools.renderQuickLink, 'function');

  const html = tools.renderQuickLink('dpr-sidebar-quick-home', '#/', '🏠', '首页');
  assert.ok(html.includes('class="dpr-sidebar-quick dpr-sidebar-quick-home"'));
  assert.ok(html.includes('<span class="dpr-sidebar-quick-label"><span class="dpr-sidebar-quick-icon" aria-hidden="true">🏠</span>首页</span>'));

  const css = fs.readFileSync('app/app.css', 'utf8');
  const quickRule = cssRule(css, '.dpr-sidebar-quick');
  assert.ok(/position:\s*relative/i.test(quickRule));
  assert.ok(/justify-content:\s*center/i.test(quickRule));

  const labelRule = cssRule(css, '.dpr-sidebar-quick-label');
  assert.ok(/position:\s*relative/i.test(labelRule));
  assert.ok(/display:\s*inline-block/i.test(labelRule));
  assert.ok(/text-align:\s*center/i.test(labelRule));

  const iconRule = cssRule(css, '.dpr-sidebar-quick-icon');
  assert.ok(/position:\s*absolute/i.test(iconRule));
  assert.ok(/right:\s*calc\(100%\s*\+\s*4px\)/i.test(iconRule));
  assert.ok(/top:\s*50%/i.test(iconRule));
  assert.ok(/transform:\s*translateY\(-50%\)/i.test(iconRule));
}

function testSidebarFooterControlsReplaceRefresh() {
  const sidebar = loadSidebarForTest('#/');
  const tools = sidebar.__test;
  assert.equal(typeof tools.renderSidebarFooterControls, 'function');

  const html = tools.renderSidebarFooterControls(false);
  assert.ok(html.includes('class="dpr-sidebar-footer"'));
  assert.ok(html.includes('class="dpr-sidebar-footer-btn dpr-sidebar-collapse-btn"'));
  assert.ok(html.includes('data-sidebar-collapse'));
  assert.ok(html.includes('aria-label="收起侧边栏"'));
  assert.ok(html.includes('class="dpr-sidebar-footer-btn dpr-sidebar-settings-btn"'));
  assert.ok(html.includes('data-sidebar-settings'));
  assert.ok(html.includes('aria-label="打开设置"'));
  assert.ok(!html.includes('dpr-sidebar-refresh'));
  assert.ok(!html.includes('刷新'));

  const collapsedHtml = tools.renderSidebarFooterControls(true);
  assert.ok(collapsedHtml.includes('aria-label="展开侧边栏"'));
  assert.ok(collapsedHtml.includes('title="展开侧边栏"'));

  const css = fs.readFileSync('app/app.css', 'utf8');
  const bodyRule = cssRule(css, 'body.dpr-sidebar-v2');
  assert.ok(/--dpr-sidebar-collapsed-width:\s*0px/i.test(bodyRule));
  const contentRule = cssRule(css, 'body.dpr-sidebar-v2 .content');
  assert.ok(/left:\s*var\(--dpr-sidebar-width,\s*280px\)\s*!important/i.test(contentRule));
  assert.ok(/transition:\s*left \.24s ease,\s*width \.24s ease/i.test(contentRule));
  const footerRule = cssRule(css, '.dpr-sidebar-footer');
  assert.ok(/display:\s*flex/i.test(footerRule));
  assert.ok(/gap:\s*8px/i.test(footerRule));
  assert.ok(/margin-top:\s*auto/i.test(footerRule));
  assert.ok(/background:\s*var\(--dpr-sidebar-surface\)/i.test(footerRule));

  const footerBtnRule = cssRule(css, '.dpr-sidebar-footer-btn');
  assert.ok(/width:\s*34px/i.test(footerBtnRule));
  assert.ok(/height:\s*34px/i.test(footerBtnRule));
  assert.ok(/display:\s*inline-flex/i.test(footerBtnRule));

  const collapsedRootRule = cssRule(css, '#dpr-sidebar-v2.is-collapsed');
  assert.ok(/width:\s*var\(--dpr-sidebar-collapsed-width\)/i.test(collapsedRootRule));
  assert.ok(/border-right-color:\s*transparent/i.test(collapsedRootRule));
  assert.ok(/border-right-width:\s*0/i.test(collapsedRootRule));
  assert.ok(/overflow:\s*visible/i.test(collapsedRootRule));
  assert.ok(/pointer-events:\s*none/i.test(collapsedRootRule));
  const collapsedContentRule = cssRule(css, 'body.dpr-sidebar-v2.dpr-sidebar-v2-collapsed .content');
  assert.ok(/left:\s*0\s*!important/i.test(collapsedContentRule));
  const collapsedFooterRule = cssRule(css, '#dpr-sidebar-v2.is-collapsed .dpr-sidebar-footer');
  assert.ok(/position:\s*fixed/i.test(collapsedFooterRule));
  assert.ok(/left:\s*12px/i.test(collapsedFooterRule));
  assert.ok(/padding:\s*0/i.test(collapsedFooterRule));
  assert.ok(/border:\s*0/i.test(collapsedFooterRule));
  assert.ok(/border-radius:\s*0/i.test(collapsedFooterRule));
  assert.ok(/box-shadow:\s*none/i.test(collapsedFooterRule));
  assert.ok(/background:\s*transparent/i.test(collapsedFooterRule));
  assert.ok(/pointer-events:\s*auto/i.test(collapsedFooterRule));
  assert.ok(/@media \(max-width:\s*1023px\)/i.test(css));
  assert.ok(/@media \(max-width:\s*1023px\)[\s\S]*body\.dpr-sidebar-v2 \.content\s*{[^}]*left:\s*0\s*!important/i.test(css));
  assert.ok(/@media \(max-width:\s*1023px\)[\s\S]*#dpr-sidebar-v2\s*{[^}]*transform:\s*translateX\(-100%\)/i.test(css));
  assert.ok(/\.dpr-sidebar-refresh/.test(css) === false, 'refresh button CSS should be removed');

  const uiScript = fs.readFileSync('app/ui.layout-and-subscriptions-entry.js', 'utf8');
  assert.ok(/function isDprSidebarV2Active\(\)/.test(uiScript));
  assert.ok(/function shouldUseDprSidebarInternalSettings\(\)/.test(uiScript));
  assert.ok(/window\.matchMedia\('\(min-width:\s*1024px\)'\)\.matches/i.test(uiScript));
  assert.ok(/if\s*\(shouldUseDprSidebarInternalSettings\(\)\)\s*return;/i.test(uiScript));
}

function testCollapsedSidebarRecentersChatSurface() {
  const css = fs.readFileSync('app/app.css', 'utf8');
  const v2InputRule = cssRule(css, 'body.dpr-sidebar-v2 #paper-chat-container .input-area');
  assert.ok(/left:\s*calc\(\s*var\(--dpr-sidebar-width,\s*280px\)\s*\+\s*\(100%\s*-\s*var\(--dpr-sidebar-width,\s*280px\)\)\s*\/\s*2\s*\)/i.test(v2InputRule));
  assert.ok(/max-width:\s*min\(var\(--dpr-paper-content-max-width\),\s*calc\(100%\s*-\s*var\(--dpr-sidebar-width,\s*280px\)\s*-\s*40px\)\)/i.test(v2InputRule));

  const collapsedInputRule = cssRule(css, 'body.dpr-sidebar-v2.dpr-sidebar-v2-collapsed #paper-chat-container .input-area');
  assert.ok(/left:\s*50%/i.test(collapsedInputRule));
  assert.ok(/max-width:\s*min\(var\(--dpr-paper-content-max-width\),\s*calc\(100%\s*-\s*var\(--dpr-paper-content-gap-desktop\)\)\)/i.test(collapsedInputRule));

  const collapsedFooterRule = cssRule(css, 'body.dpr-sidebar-v2.dpr-sidebar-v2-collapsed .chat-footer');
  assert.ok(/left:\s*50%/i.test(collapsedFooterRule));
  assert.ok(/max-width:\s*min\(var\(--dpr-paper-content-max-width\),\s*calc\(100%\s*-\s*var\(--dpr-paper-content-gap-desktop\)\)\)/i.test(collapsedFooterRule));

  const collapsedQuestionRule = cssRule(css, 'body.dpr-sidebar-v2.dpr-sidebar-v2-collapsed #paper-chat-container .chat-questions-panel');
  assert.ok(/left:\s*50%/i.test(collapsedQuestionRule));
  assert.ok(/max-width:\s*min\(var\(--dpr-paper-content-max-width\),\s*calc\(100%\s*-\s*var\(--dpr-paper-content-gap-desktop\)\)\)/i.test(collapsedQuestionRule));

  const collapsedBeforeRule = cssRule(css, 'body.dpr-sidebar-v2.dpr-sidebar-v2-collapsed #paper-chat-container::before');
  const collapsedAfterRule = cssRule(css, 'body.dpr-sidebar-v2.dpr-sidebar-v2-collapsed #paper-chat-container::after');
  assert.ok(/left:\s*0/i.test(collapsedBeforeRule));
  assert.ok(/left:\s*0/i.test(collapsedAfterRule));

  assert.ok(/@media \(max-width:\s*1023px\)[\s\S]*body\.dpr-sidebar-v2 #paper-chat-container \.input-area\s*{[^}]*left:\s*50%/i.test(css));
}

function testResponsiveModeClearsDesktopCollapsedStateOnOverlayViewports() {
  const sidebar = loadSidebarForTest('#/');
  const tools = sidebar.__test;
  assert.equal(typeof tools.syncResponsiveSidebarMode, 'function');

  const rootClassList = createClassList(['is-collapsed']);
  const bodyClassList = createClassList(['dpr-sidebar-v2', 'dpr-sidebar-v2-collapsed']);
  const collapseButton = {
    attrs: {},
    setAttribute(key, value) {
      this.attrs[key] = value;
    },
  };

  document.body.classList = bodyClassList;
  document.querySelector = (selector) => {
    if (selector === '#dpr-sidebar-v2') return { classList: rootClassList, querySelector: () => collapseButton };
    return null;
  };
  window.matchMedia = (query) => ({ matches: query.includes('max-width: 1023px') });

  tools.syncResponsiveSidebarMode();

  assert.equal(rootClassList.contains('is-collapsed'), false);
  assert.equal(bodyClassList.contains('dpr-sidebar-v2-collapsed'), false);
  assert.equal(collapseButton.attrs['aria-label'], '收起侧边栏');
}

function testSidebarSortsByNewestTimeFirst() {
  const sidebar = loadSidebarForTest('#/202606/25/new');
  const tools = sidebar.__test;
  const model = tools.parseSidebar(unorderedSidebar);

  const dailyView = tools.buildDailyDateView(model, '');
  assert.deepEqual(dailyView.tabs.map((tab) => tab.key), ['20260625', '20260623']);

  const confView = tools.buildConferenceConfView(model, '');
  assert.deepEqual(confView.tabs.map((tab) => tab.key), ['iclr-2025', 'neurips-2024']);

  const neuripsView = tools.buildConferenceConfView(model, 'neurips-2024');
  assert.deepEqual(neuripsView.groups[0].papers.map((paper) => paper.title), ['Conf New', 'Conf Old']);
}

function testSidebarUtilityHelpers() {
  const sidebar = loadSidebarForTest('#/202606/24/paper-a');
  const tools = sidebar.__test;

  assert.equal(typeof tools.statusForMarkIndex, 'function');
  assert.equal(tools.statusForMarkIndex('1'), 'good');
  assert.equal(tools.statusForMarkIndex('2'), 'blue');
  assert.equal(tools.statusForMarkIndex('3'), 'orange');
  assert.equal(tools.statusForMarkIndex('4'), 'bad');
  assert.equal(tools.statusForMarkIndex('5'), '');

  assert.equal(typeof tools.shouldAutoMarkRead, 'function');
  assert.equal(tools.shouldAutoMarkRead(''), true);
  assert.equal(tools.shouldAutoMarkRead(null), true);
  assert.equal(tools.shouldAutoMarkRead('read'), false);
  assert.equal(tools.shouldAutoMarkRead('good'), false);

  assert.equal(typeof tools.clampSidebarWidth, 'function');
  assert.equal(tools.clampSidebarWidth(180), 240);
  assert.equal(tools.clampSidebarWidth(360), 360);
  assert.equal(tools.clampSidebarWidth(720), 520);

  assert.equal(typeof tools.rerenderOptionsForReadStateEvent, 'function');
  assert.deepEqual(tools.rerenderOptionsForReadStateEvent(), {
    syncActive: true,
    centerActive: false,
    autoMark: false,
    preserveScroll: true,
  });
  assert.equal(typeof tools.rerenderOptionsForStatusClick, 'function');
  assert.deepEqual(tools.rerenderOptionsForStatusClick(), {
    updateInPlace: true,
    syncActive: false,
    centerActive: false,
    autoMark: false,
    preserveScroll: true,
    dispatchUpdated: false,
  });
  assert.equal(typeof tools.syncActiveOptionsForInitialLoad, 'function');
  assert.deepEqual(tools.syncActiveOptionsForInitialLoad(), {
    center: true,
    autoMark: false,
  });
  assert.equal(typeof tools.rerenderOptionsForAxisInteraction, 'function');
  assert.deepEqual(tools.rerenderOptionsForAxisInteraction('daily'), {
    syncActive: false,
    scrollPanel: 'daily',
  });

  assert.equal(typeof tools.updatePaperTitleOverflowMarks, 'function');
  function fakePaper(scrollWidth, clientWidth) {
    const marks = {};
    const title = { scrollWidth, clientWidth };
    const li = {
      classList: {
        toggle: (name, value) => {
          marks[name] = value;
        },
      },
      querySelector: (selector) => selector === '.dpr-sidebar-paper-title' ? title : null,
    };
    return { li, marks };
  }
  const overflowing = fakePaper(160, 100);
  const fitting = fakePaper(98, 100);
  tools.updatePaperTitleOverflowMarks({
    querySelectorAll: (selector) => selector === '.dpr-sidebar-paper'
      ? [overflowing.li, fitting.li]
      : [],
  });
  assert.equal(overflowing.marks['is-title-overflowing'], true);
  assert.equal(fitting.marks['is-title-overflowing'], false);
}

function testEvidenceCssIsPersistent() {
  const css = fs.readFileSync('app/app.css', 'utf8');
  assert.ok(!/\\.dpr-sidebar-paper-evidence\\s*{[^}]*display:\\s*none/i.test(css));
  assert.ok(!/\.dpr-sidebar-paper:hover \.dpr-sidebar-paper-evidence\s*{[^}]*display:\s*none/i.test(css));
  assert.ok(/\.dpr-sidebar-paper-actions\s*{[^}]*opacity:\s*0/i.test(css));
  assert.ok(css.includes('.dpr-sidebar-paper:hover .dpr-sidebar-paper-actions'));
  assert.ok(/\.dpr-sidebar-paper-evidence\s*{[^}]*background:\s*transparent/i.test(css));
  assert.ok(/\.dpr-sidebar-paper\.dpr-sidebar-paper-conference\s*{[^}]*border-left-color:\s*#93c5fd/i.test(css));
}

function testSidebarPaperVisualStateCssContract() {
  const css = fs.readFileSync('app/app.css', 'utf8');
  assert.ok(/\.dpr-sidebar-paper\s*{[^}]*background:\s*#ffffff/i.test(css));
  assert.ok(/\.dpr-sidebar-paper\s*{[^}]*min-height:\s*68px/i.test(css));
  assert.ok(/\.dpr-sidebar-paper\.is-active\s*{[^}]*background:\s*#e5e7eb/i.test(css));
  assert.ok(/body\.dpr-dark \.dpr-sidebar-paper\.is-active\s*{[^}]*background:\s*#334155/i.test(css));
  assert.ok(!css.includes('dpr-sidebar-unread-dot'));
  assert.ok(!css.includes('dpr-sidebar-axis-tab-dot'));
  assert.ok(!css.includes('dpr-sidebar-axis-section-dot'));
  assert.ok(/#dpr-sidebar-v2\s+\.dpr-sidebar-paper\s*{[^}]*position:\s*relative\s*!important/i.test(css));
  assert.ok(!/#dpr-sidebar-v2\s+\.dpr-sidebar-paper\s*{[^}]*margin:\s*2px 8px\s*!important/i.test(css));
  assert.ok(/\.dpr-sidebar-paper\[data-read="0"\]::after\s*{[^}]*content:\s*""/i.test(css));
  assert.ok(/\.dpr-sidebar-paper\[data-read="0"\]::after\s*{[^}]*background:\s*#ef4444/i.test(css));
  assert.ok(/\.dpr-sidebar-paper\[data-read="0"\]::after\s*{[^}]*right:\s*6px/i.test(css));
  assert.ok(/\.dpr-sidebar-paper\[data-read="0"\]::after\s*{[^}]*top:\s*7px/i.test(css));
  assert.ok(/\.dpr-sidebar-paper\[data-read="0"\]::after\s*{[^}]*width:\s*8px/i.test(css));
  assert.ok(/\.dpr-sidebar-paper\[data-read="0"\]::after\s*{[^}]*height:\s*8px/i.test(css));
  assert.ok(/\.dpr-sidebar-paper\[data-read="0"\]::after\s*{[^}]*box-shadow:\s*0 0 0 2px #ffffff,\s*0 0 5px rgba\(239,\s*68,\s*68,\s*\.45\)/i.test(css));
  assert.ok(/\.dpr-sidebar-paper\[data-read="0"\]::after\s*{[^}]*z-index:\s*6/i.test(css));
  assert.ok(!/#dpr-sidebar-v2\.is-filter-unread\s+\.dpr-sidebar-paper\[data-read="1"\]\s*{[^}]*display:\s*none/i.test(css));
  assert.ok(!/#dpr-sidebar-v2\.is-filter-unread\s+\.dpr-sidebar-paper\.is-active\[data-read="1"\]/i.test(css));
  assert.ok(!css.includes('.dpr-sidebar-axis-section.is-all-read:has(.dpr-sidebar-paper.is-active)'));
  assert.ok(!/#dpr-sidebar-v2\.is-filter-unread\s+\.dpr-sidebar-axis-section\.is-all-read\s*{[^}]*display:\s*none/i.test(css));
  assert.ok(!/#dpr-sidebar-v2\.is-filter-unread\s+\.dpr-sidebar-axis-section\.is-all-read\.has-active-paper/i.test(css));

  const mainRule = cssRule(css, '.dpr-sidebar-paper-main');
  assert.ok(/display:\s*block/i.test(mainRule));
  assert.ok(/position:\s*relative/i.test(mainRule));
  assert.ok(/min-width:\s*0/i.test(mainRule));

  const linkRule = cssRule(css, '.dpr-sidebar-paper-link');
  assert.ok(/width:\s*100%/i.test(linkRule));
  assert.ok(/box-sizing:\s*border-box/i.test(linkRule));
  assert.ok(/padding:\s*7px 8px 7px 14px/i.test(linkRule));

  const titleRule = cssRule(css, '.dpr-sidebar-paper-title');
  assert.ok(/display:\s*block/i.test(titleRule));
  assert.ok(/position:\s*relative/i.test(titleRule));
  assert.ok(/font-size:\s*14px/i.test(titleRule));
  assert.ok(/white-space:\s*nowrap/i.test(titleRule));
  assert.ok(/overflow:\s*hidden/i.test(titleRule));
  assert.ok(/text-overflow:\s*clip/i.test(titleRule));
  assert.ok(/padding-right:\s*calc\(20px \+ 1ch\)/i.test(titleRule));
  assert.ok(/box-sizing:\s*border-box/i.test(titleRule));
  assert.ok(!/-webkit-line-clamp/i.test(titleRule));

  const titleDotsRule = cssRule(css, '.dpr-sidebar-paper-title::after');
  assert.ok(/content:\s*""/i.test(titleDotsRule));
  assert.ok(/position:\s*absolute/i.test(titleDotsRule));
  assert.ok(/right:\s*-8px/i.test(titleDotsRule));
  assert.ok(/width:\s*calc\(28px \+ 3ch\)/i.test(titleDotsRule));
  assert.ok(/padding-left:\s*0/i.test(titleDotsRule));
  assert.ok(!/linear-gradient/i.test(titleDotsRule));
  assert.ok(/background:\s*var\(--dpr-sidebar-paper-bg\)/i.test(titleDotsRule));
  assert.ok(/text-align:\s*left/i.test(titleDotsRule));
  assert.ok(/opacity:\s*0/i.test(titleDotsRule));

  assert.ok(!/\.dpr-sidebar-paper\.is-title-overflowing \.dpr-sidebar-paper-title::after\s*{[^}]*opacity:\s*1/i.test(css));
  assert.ok(/\.dpr-sidebar-paper:hover \.dpr-sidebar-paper-title,\s*\.dpr-sidebar-paper:focus-within \.dpr-sidebar-paper-title\s*{[^}]*padding-right:\s*calc\(var\(--dpr-sidebar-paper-action-reserve\) \+ 1ch\)/i.test(css));
  assert.ok(/\.dpr-sidebar-paper:hover \.dpr-sidebar-paper-title::after,\s*\.dpr-sidebar-paper:focus-within \.dpr-sidebar-paper-title::after\s*{[^}]*right:\s*-8px/i.test(css));
  assert.ok(/\.dpr-sidebar-paper:hover \.dpr-sidebar-paper-title::after,\s*\.dpr-sidebar-paper:focus-within \.dpr-sidebar-paper-title::after\s*{[^}]*width:\s*calc\(\(var\(--dpr-sidebar-paper-action-reserve\) \+ 8px \+ 2ch\) \* 0\.66\)/i.test(css));
  assert.ok(/\.dpr-sidebar-paper:hover \.dpr-sidebar-paper-title::after,\s*\.dpr-sidebar-paper:focus-within \.dpr-sidebar-paper-title::after\s*{[^}]*opacity:\s*1/i.test(css));

  const actionsRule = cssRule(css, '.dpr-sidebar-paper-actions');
  assert.ok(/position:\s*absolute/i.test(actionsRule));
  assert.ok(/right:\s*10px/i.test(actionsRule));
  assert.ok(/top:\s*50%/i.test(actionsRule));
  assert.ok(/transform:\s*translateY\(-50%\)/i.test(actionsRule));
  assert.ok(/width:\s*39px/i.test(actionsRule));

  assert.ok(/\.dpr-sidebar-paper:hover \.dpr-sidebar-paper-evidence,\s*\.dpr-sidebar-paper:focus-within \.dpr-sidebar-paper-evidence,\s*\.dpr-sidebar-paper:hover \.dpr-sidebar-paper-meta,\s*\.dpr-sidebar-paper:focus-within \.dpr-sidebar-paper-meta\s*{[^}]*padding-right:\s*var\(--dpr-sidebar-paper-action-reserve\)/i.test(css));

  const sectionLabelRule = cssRule(css, '.dpr-sidebar-axis-section-label');
  assert.ok(/font-size:\s*12px/i.test(sectionLabelRule));
  assert.ok(/(?:^|\n)\.dpr-sidebar-day-counts\s*{[^}]*font-size:\s*12px/i.test(css));
  const metaRule = cssRule(css, '.dpr-sidebar-paper-meta');
  assert.ok(/font-size:\s*12px/i.test(metaRule));
  const starsRule = cssRule(css, '.dpr-sidebar-paper-stars');
  assert.ok(/font-size:\s*12px/i.test(starsRule));
  const tagRule = cssRule(css, '.dpr-sidebar-paper-tag');
  assert.ok(/font-size:\s*11px/i.test(tagRule));
  const evidenceRule = cssRule(css, '.dpr-sidebar-paper-evidence');
  assert.ok(/font-size:\s*12px/i.test(evidenceRule));

  const readRowRule = /\.dpr-sidebar-paper\[data-read-status="read"\]\s*{[^}]*background:/i;
  assert.ok(!readRowRule.test(css), 'read should not paint the whole row');

  assert.ok(/\.dpr-sidebar-paper\[data-read-status="good"\]\s*{[^}]*background:\s*#f0fdf4/i.test(css));
  assert.ok(/\.dpr-sidebar-paper\[data-read-status="bad"\]\s*{[^}]*background:\s*#fef2f2/i.test(css));
  assert.ok(/\.dpr-sidebar-paper\[data-read-status="blue"\]\s*{[^}]*background:\s*#eff6ff/i.test(css));
  assert.ok(/\.dpr-sidebar-paper\[data-read-status="orange"\]\s*{[^}]*background:\s*#faf5ff/i.test(css));

  assert.ok(/\.dpr-sidebar-paper-status-good\.is-active\s*{[^}]*background:\s*#22c55e/i.test(css));
  assert.ok(/\.dpr-sidebar-paper-status-blue\.is-active\s*{[^}]*background:\s*#3b82f6/i.test(css));
  assert.ok(/\.dpr-sidebar-paper-status-orange\.is-active\s*{[^}]*background:\s*#8b5cf6/i.test(css));
  assert.ok(/\.dpr-sidebar-paper-status-bad\.is-active\s*{[^}]*background:\s*#ef4444/i.test(css));
}

function testSidebarStickyHierarchyCssContract() {
  const css = fs.readFileSync('app/app.css', 'utf8');
  const rootRule = cssRule(css, '#dpr-sidebar-v2');
  assert.ok(/--dpr-sidebar-surface:\s*#ffffff/i.test(rootRule));
  assert.ok(/--dpr-sidebar-paper-action-reserve:\s*calc\(52px \+ 2ch\)/i.test(rootRule));
  assert.ok(/--dpr-sidebar-sticky-mask-bg:\s*var\(--dpr-sidebar-surface\)/i.test(rootRule));
  assert.ok(/--dpr-sidebar-sticky-mask-bleed:\s*8px/i.test(rootRule));
  assert.ok(/--dpr-sidebar-sticky-panel-top:\s*0px/i.test(rootRule));
  assert.ok(/--dpr-sidebar-sticky-axis-top:\s*36px/i.test(rootRule));
  assert.ok(/--dpr-sidebar-sticky-section-top:\s*74px/i.test(rootRule));

  const panelHeaderBaseRule = cssRule(css, '.dpr-sidebar-panel-header');
  assert.ok(/padding:\s*8px 14px/i.test(panelHeaderBaseRule));

  const panelHeaderRule = cssRule(css, '.dpr-sidebar-panel.is-expanded > .dpr-sidebar-panel-header');
  assert.ok(/position:\s*sticky/i.test(panelHeaderRule));
  assert.ok(/top:\s*var\(--dpr-sidebar-sticky-panel-top\)/i.test(panelHeaderRule));
  assert.ok(/z-index:\s*18/i.test(panelHeaderRule));
  assert.ok(/isolation:\s*isolate/i.test(panelHeaderRule));
  assert.ok(/background:\s*var\(--dpr-sidebar-sticky-mask-bg\)/i.test(panelHeaderRule));

  const axisRowRule = cssRule(css, '.dpr-sidebar-panel.is-expanded > .dpr-sidebar-panel-content > .dpr-sidebar-axis-row');
  assert.ok(/position:\s*sticky/i.test(axisRowRule));
  assert.ok(/top:\s*var\(--dpr-sidebar-sticky-axis-top\)/i.test(axisRowRule));
  assert.ok(/z-index:\s*17/i.test(axisRowRule));
  assert.ok(/isolation:\s*isolate/i.test(axisRowRule));
  assert.ok(/background:\s*var\(--dpr-sidebar-sticky-mask-bg\)/i.test(axisRowRule));

  const axisToggleRule = cssRule(css, '.dpr-sidebar-axis-toggle');
  assert.ok(/display:\s*inline-flex/i.test(axisToggleRule));
  assert.ok(/align-items:\s*center/i.test(axisToggleRule));
  assert.ok(/justify-content:\s*center/i.test(axisToggleRule));
  assert.ok(/box-sizing:\s*border-box/i.test(axisToggleRule));
  assert.ok(/padding:\s*0/i.test(axisToggleRule));

  const axisTabsRule = cssRule(css, '.dpr-sidebar-axis-tabs');
  assert.ok(/padding-top:\s*2px/i.test(axisTabsRule));
  assert.ok(!/margin-top:\s*-/i.test(axisTabsRule));

  const sectionHeaderRule = cssRule(css, '.dpr-sidebar-panel.is-expanded .dpr-sidebar-axis-section-header');
  assert.ok(/position:\s*sticky/i.test(sectionHeaderRule));
  assert.ok(/top:\s*var\(--dpr-sidebar-sticky-section-top\)/i.test(sectionHeaderRule));
  assert.ok(/z-index:\s*16/i.test(sectionHeaderRule));
  assert.ok(/isolation:\s*isolate/i.test(sectionHeaderRule));
  assert.ok(/background:\s*var\(--dpr-sidebar-sticky-mask-bg\)/i.test(sectionHeaderRule));

  const panelHeaderMaskRule = cssRule(css, '.dpr-sidebar-panel.is-expanded > .dpr-sidebar-panel-header::before');
  assert.ok(/content:\s*""/i.test(panelHeaderMaskRule));
  assert.ok(/inset:\s*calc\(var\(--dpr-sidebar-sticky-mask-bleed\) \* -1\) 0 0 0/i.test(panelHeaderMaskRule));
  assert.ok(/background:\s*var\(--dpr-sidebar-sticky-mask-bg\)/i.test(panelHeaderMaskRule));
  assert.ok(/z-index:\s*-1/i.test(panelHeaderMaskRule));

  assert.ok(/\.dpr-sidebar-panel\.is-expanded > \.dpr-sidebar-panel-content > \.dpr-sidebar-axis-row::before,\s*\.dpr-sidebar-panel\.is-expanded \.dpr-sidebar-axis-section-header::before\s*{[^}]*content:\s*""/i.test(css));
  assert.ok(/\.dpr-sidebar-panel\.is-expanded > \.dpr-sidebar-panel-content > \.dpr-sidebar-axis-row::before,\s*\.dpr-sidebar-panel\.is-expanded \.dpr-sidebar-axis-section-header::before\s*{[^}]*inset:\s*calc\(var\(--dpr-sidebar-sticky-mask-bleed\) \* -1\) 0 0 0/i.test(css));
  assert.ok(!/\.dpr-sidebar-panel\.is-expanded > \.dpr-sidebar-panel-content > \.dpr-sidebar-axis-row::before,\s*\.dpr-sidebar-panel\.is-expanded \.dpr-sidebar-axis-section-header::before\s*{[^}]*inset:\s*calc\(var\(--dpr-sidebar-sticky-mask-bleed\) \* -1\) 0\s*;/i.test(css));
  assert.ok(/\.dpr-sidebar-panel\.is-expanded > \.dpr-sidebar-panel-content > \.dpr-sidebar-axis-row::before,\s*\.dpr-sidebar-panel\.is-expanded \.dpr-sidebar-axis-section-header::before\s*{[^}]*background:\s*var\(--dpr-sidebar-sticky-mask-bg\)/i.test(css));
  assert.ok(/\.dpr-sidebar-panel\.is-expanded > \.dpr-sidebar-panel-content > \.dpr-sidebar-axis-row::before,\s*\.dpr-sidebar-panel\.is-expanded \.dpr-sidebar-axis-section-header::before\s*{[^}]*z-index:\s*-1/i.test(css));

  const panelContentRule = cssRule(css, '.dpr-sidebar-panel-content');
  assert.ok(/background:\s*var\(--dpr-sidebar-surface\)/i.test(panelContentRule));
  const axisContentRule = cssRule(css, '.dpr-sidebar-axis-content');
  assert.ok(/background:\s*var\(--dpr-sidebar-surface\)/i.test(axisContentRule));
  const axisSectionRule = cssRule(css, '.dpr-sidebar-axis-section');
  assert.ok(/background:\s*var\(--dpr-sidebar-surface\)/i.test(axisSectionRule));
  const papersRule = cssRule(css, '.dpr-sidebar-axis-papers');
  assert.ok(/background:\s*var\(--dpr-sidebar-surface\)/i.test(papersRule));
}

function testRenderBodyPutsConferenceAboveDaily() {
  const sidebar = loadSidebarForTest('#/conference/neurips-2024/paper-c');
  const tools = sidebar.__test;
  const model = tools.parseSidebar(sampleSidebar);
  assert.equal(typeof tools.renderBodyHtml, 'function');
  const html = tools.renderBodyHtml(model, {
    expandedGroups: { conference: true, daily: true },
    conferenceViewMode: 'conf',
    dailyViewMode: 'date',
    activeConference: 'neurips-2024',
    activeDailyDate: '20260624',
  });
  assert.ok(html.indexOf('dpr-sidebar-group-conference') < html.indexOf('dpr-sidebar-group-daily'));
  assert.ok(html.includes('data-axis-group="conference"'));
  assert.ok(html.includes('data-axis-group="daily"'));
  assert.ok(html.includes('data-axis-mode="conf"'));
  assert.ok(html.includes('data-axis-mode="date"'));
}

function testAxisSectionsAreExpandable() {
  const sidebar = loadSidebarForTest('#/conference/neurips-2024/paper-c');
  const tools = sidebar.__test;
  const model = tools.parseSidebar(sampleSidebar);
  assert.equal(typeof tools.axisSectionStateKey, 'function');

  const sectionKey = tools.axisSectionStateKey('conference', 'conf', 'neurips-2024:rl');
  const expandedHtml = tools.renderBodyHtml(model, {
    expandedGroups: { conference: true, daily: true },
    conferenceViewMode: 'conf',
    dailyViewMode: 'date',
    activeConference: 'neurips-2024',
    activeDailyDate: '20260624',
  });

  assert.ok(/class="[^"]*dpr-sidebar-axis-section-conference[^"]*is-expanded[^"]*"/.test(expandedHtml));
  assert.ok(expandedHtml.includes(`data-axis-section-toggle="${sectionKey}"`));
  assert.ok(expandedHtml.includes('aria-expanded="true"'));

  const collapsedHtml = tools.renderBodyHtml(model, {
    expandedGroups: { conference: true, daily: true },
    conferenceViewMode: 'conf',
    dailyViewMode: 'date',
    activeConference: 'neurips-2024',
    activeDailyDate: '20260624',
    collapsedAxisSections: new Set([sectionKey]),
  });

  assert.ok(collapsedHtml.includes('data-axis-section-toggle="' + sectionKey + '" aria-expanded="false"'));
  assert.ok(!collapsedHtml.includes('dpr-sidebar-axis-section-conference is-expanded" data-axis-section="neurips-2024:rl"'));
}

function testPanelCountsUseFullModel() {
  const sidebar = loadSidebarForTest('#/202606/24/paper-a');
  const tools = sidebar.__test;
  const model = tools.parseSidebar(sampleSidebar);
  assert.equal(typeof tools.computeModelReadSummary, 'function');

  const summary = tools.computeModelReadSummary(model, {
    '202606/24/paper-a': 'read',
    'conference/neurips-2024/paper-c': 'good',
  });

  assert.deepEqual(summary.total, { papers: 5, unread: 3 });
  assert.deepEqual(summary.daily, { papers: 3, unread: 2 });
  assert.deepEqual(summary.conference, { papers: 2, unread: 1 });

  const html = tools.renderBodyHtml(model, {
    expandedGroups: { conference: true, daily: true },
    conferenceViewMode: 'conf',
    dailyViewMode: 'date',
    activeConference: 'neurips-2024',
    activeDailyDate: '20260624',
    readMap: {
      '202606/24/paper-a': 'read',
      'conference/neurips-2024/paper-c': 'good',
    },
  });
  assert.ok(html.includes('<span class="dpr-sidebar-day-unread">1</span>/<span class="dpr-sidebar-day-total">2</span>'));
  assert.ok(html.includes('<span class="dpr-sidebar-day-unread">2</span>/<span class="dpr-sidebar-day-total">3</span>'));
}

function testSearchResultsComeFromFullModel() {
  const sidebar = loadSidebarForTest('#/202606/24/paper-a');
  const tools = sidebar.__test;
  const model = tools.parseSidebar(sampleSidebar);
  assert.equal(typeof tools.buildDailyResultView, 'function');

  const view = tools.buildDailyResultView(model, {
    keyword: 'paper d',
    readMap: {},
    unreadOnly: false,
  });

  assert.equal(view.resultMode, true);
  assert.deepEqual(view.groups.map((group) => group.label), ['2026-06-23']);
  assert.deepEqual(view.groups[0].papers.map((paper) => paper.title), ['Paper D']);

  const html = tools.renderBodyHtml(model, {
    expandedGroups: { conference: true, daily: true },
    conferenceViewMode: 'conf',
    dailyViewMode: 'date',
    activeConference: 'neurips-2024',
    activeDailyDate: '20260624',
    search: 'paper d',
    filter: 'all',
    readMap: {},
  });
  assert.ok(html.includes('Paper D'));
  assert.ok(!html.includes('Paper A'));
  assert.ok(!html.includes('dpr-sidebar-group-conference'));
  assert.ok(html.includes('dpr-sidebar-group-daily'));
}

function testSearchNoResultsShowsEmptyState() {
  const sidebar = loadSidebarForTest('#/202606/24/paper-a');
  const tools = sidebar.__test;
  const model = tools.parseSidebar(sampleSidebar);

  const html = tools.renderBodyHtml(model, {
    expandedGroups: { conference: true, daily: true },
    conferenceViewMode: 'conf',
    dailyViewMode: 'date',
    activeConference: 'neurips-2024',
    activeDailyDate: '20260624',
    search: 'not in sidebar',
    filter: 'all',
    readMap: {},
  });

  assert.ok(!html.includes('dpr-sidebar-group-conference'));
  assert.ok(!html.includes('dpr-sidebar-group-daily'));
  assert.ok(html.includes('dpr-sidebar-empty'));
}

function testUnreadResultsComeFromFullModel() {
  const sidebar = loadSidebarForTest('#/202606/24/paper-a');
  const tools = sidebar.__test;
  const model = tools.parseSidebar(sampleSidebar);
  assert.equal(typeof tools.buildDailyResultView, 'function');

  const view = tools.buildDailyResultView(model, {
    keyword: '',
    readMap: {
      '202606/24/paper-a': 'read',
      '202606/24/paper-b': 'read',
    },
    unreadOnly: true,
  });

  assert.deepEqual(view.groups.map((group) => group.label), ['2026-06-23']);
  assert.deepEqual(view.groups[0].papers.map((paper) => paper.title), ['Paper D']);
}

function testUnreadResultsKeepCurrentReadPaperVisible() {
  const sidebar = loadSidebarForTest('#/202606/24/paper-a');
  const tools = sidebar.__test;
  const model = tools.parseSidebar(sampleSidebar);

  const view = tools.buildDailyResultView(model, {
    keyword: '',
    readMap: {
      '202606/24/paper-a': 'read',
      '202606/24/paper-b': 'read',
    },
    unreadOnly: true,
    currentPaperId: '202606/24/paper-a',
  });

  assert.deepEqual(view.groups.map((group) => group.label), ['2026-06-24', '2026-06-23']);
  assert.deepEqual(view.groups[0].papers.map((paper) => paper.title), ['Paper A']);
  assert.equal(view.groups[0].unreadCount, 0);
  assert.equal(view.tabs[0].unreadCount, 1);

  const html = tools.renderBodyHtml(model, {
    expandedGroups: { conference: true, daily: true },
    conferenceViewMode: 'conf',
    dailyViewMode: 'date',
    activeConference: 'neurips-2024',
    activeDailyDate: '20260624',
    filter: 'unread',
    readMap: {
      '202606/24/paper-a': 'read',
      '202606/24/paper-b': 'read',
    },
  });
  assert.ok(html.includes('Paper A'));
  assert.ok(html.includes('data-paper-id="202606/24/paper-a"'));
  assert.ok(html.includes('data-read="1"'));
  assert.ok(/class="dpr-sidebar-axis-section dpr-sidebar-axis-section-daily[^"]*has-active-paper/.test(html));
  assert.ok(/class="dpr-sidebar-paper dpr-sidebar-paper-deep is-active"/.test(html));
}

function testUnreadSessionSnapshotKeepsSeenRowsVisibleUntilReload() {
  const sidebar = loadSidebarForTest('#/202606/24/paper-a');
  const tools = sidebar.__test;
  const model = tools.parseSidebar(sampleSidebar);
  assert.equal(typeof tools.collectUnreadPaperIdsForSnapshot, 'function');

  const snapshot = tools.collectUnreadPaperIdsForSnapshot(model, {
    '202606/23/paper-d': 'read',
  });
  assert.deepEqual(Array.from(snapshot).sort(), [
    '202606/24/paper-a',
    '202606/24/paper-b',
    'conference/iclr-2025/paper-e',
    'conference/neurips-2024/paper-c',
  ].sort());

  const html = tools.renderBodyHtml(model, {
    expandedGroups: { conference: true, daily: true },
    conferenceViewMode: 'conf',
    dailyViewMode: 'date',
    activeConference: 'neurips-2024',
    activeDailyDate: '20260624',
    filter: 'unread',
    unreadResultPaperIds: snapshot,
    readMap: {
      '202606/24/paper-a': 'read',
      '202606/24/paper-b': 'read',
      '202606/23/paper-d': 'read',
      'conference/iclr-2025/paper-e': 'read',
      'conference/neurips-2024/paper-c': 'read',
    },
  });

  assert.ok(html.includes('Paper A'));
  assert.ok(html.includes('Paper B'));
  assert.ok(html.includes('Paper C'));
  assert.ok(html.includes('Paper E'));
  assert.ok(!html.includes('Paper D'));
  assert.equal((html.match(/data-read="1"/g) || []).length, 4);
  assert.equal((html.match(/data-read="0"/g) || []).length, 0);
}

function testUnreadClickPendingHrefKeepsClickedPaperVisibleBeforeHashUpdates() {
  const sidebar = loadSidebarForTest('#/202606/24/paper-a');
  const tools = sidebar.__test;
  const model = tools.parseSidebar(sampleSidebar);
  assert.equal(typeof tools.rememberPendingPaperHref, 'function');
  tools.rememberPendingPaperHref('#/202606/24/paper-b');

  const html = tools.renderBodyHtml(model, {
    expandedGroups: { conference: true, daily: true },
    conferenceViewMode: 'conf',
    dailyViewMode: 'date',
    activeConference: 'neurips-2024',
    activeDailyDate: '20260624',
    filter: 'unread',
    readMap: {
      '202606/24/paper-a': 'read',
      '202606/24/paper-b': 'read',
    },
  });

  assert.ok(!html.includes('Paper A'));
  assert.ok(html.includes('Paper B'));
  assert.ok(html.includes('data-paper-id="202606/24/paper-b"'));
  assert.ok(/class="dpr-sidebar-paper dpr-sidebar-paper-quick is-active"/.test(html));
  assert.ok(/class="dpr-sidebar-axis-section dpr-sidebar-axis-section-daily[^"]*has-active-paper/.test(html));
}

function testPaperLinkClickStoresPendingHrefBeforeRouteChange() {
  const js = fs.readFileSync('app/dpr-sidebar.js', 'utf8');
  const start = js.indexOf("var paperLink = e.target.closest('.dpr-sidebar-paper-link');");
  const end = js.indexOf("// 顶部 Home / Tutorial", start);
  assert.ok(start > 0 && end > start, 'paper link click handler should be present');
  const block = js.slice(start, end);
  assert.ok(block.includes('rememberPendingPaperHref('));
  assert.ok(block.includes("paperLink.getAttribute('href')"));
}

function testStatusClickKeepsPaperRowInPlace() {
  const js = fs.readFileSync('app/dpr-sidebar.js', 'utf8');
  const start = js.indexOf("var statusButton = e.target.closest('.dpr-sidebar-paper-status-btn');");
  const end = js.indexOf("var sectionToggle = e.target.closest('.dpr-sidebar-axis-section-header');", start);
  assert.ok(start > 0 && end > start, 'status button click handler should be present');
  const block = js.slice(start, end);
  assert.ok(block.includes('updateReadStateMarks();'));
  assert.ok(block.includes('applyFilterAndSearch();'));
  assert.ok(!block.includes('rerenderSidebarBody(rerenderOptionsForStatusClick())'));
  assert.ok(!block.includes('.blur('));
}

function testReadStatusNormalization() {
  const sidebar = loadSidebarForTest('#/202606/24/paper-a');
  const tools = sidebar.__test;
  assert.ok(tools, 'dpr-sidebar.js should export test helpers');
  assert.equal(tools.normalizeReadStatus('good'), 'good');
  assert.equal(tools.normalizeReadStatus('bad'), 'bad');
  assert.equal(tools.normalizeReadStatus('blue'), 'blue');
  assert.equal(tools.normalizeReadStatus('orange'), 'orange');
  assert.equal(tools.normalizeReadStatus('read'), 'read');
  assert.equal(tools.normalizeReadStatus(true), 'read');
  assert.equal(tools.normalizeReadStatus(false), '');
  assert.equal(tools.normalizeReadStatus(null), '');
}

testSidebarNavigationContract();
testAxisViewsForDailyAndConference();
testHyphenatedConferenceMarkerParsing();
testAxisTabsRenderUnreadCounts();
testPaperEvidenceAndActionButtonsRender();
testPaperMetaOrderKeepsEvidenceBetweenTitleAndStars();
testQuickLinksCenterTextAndDetachIcon();
testSidebarFooterControlsReplaceRefresh();
testCollapsedSidebarRecentersChatSurface();
testResponsiveModeClearsDesktopCollapsedStateOnOverlayViewports();
testSidebarSortsByNewestTimeFirst();
testSidebarUtilityHelpers();
testEvidenceCssIsPersistent();
testSidebarPaperVisualStateCssContract();
testSidebarStickyHierarchyCssContract();
testRenderBodyPutsConferenceAboveDaily();
testAxisSectionsAreExpandable();
testPanelCountsUseFullModel();
testSearchResultsComeFromFullModel();
testSearchNoResultsShowsEmptyState();
testUnreadResultsComeFromFullModel();
testUnreadResultsKeepCurrentReadPaperVisible();
testUnreadSessionSnapshotKeepsSeenRowsVisibleUntilReload();
testUnreadClickPendingHrefKeepsClickedPaperVisibleBeforeHashUpdates();
testPaperLinkClickStoresPendingHrefBeforeRouteChange();
testStatusClickKeepsPaperRowInPlace();
testReadStatusNormalization();

console.log('dpr sidebar v2 tests passed');
