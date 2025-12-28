// 订阅管理总模块（浮层壳 + 搜索 + 分发到各子模块）
// 负责：创建订阅管理浮层、Arxiv 搜索、调用关键词/Zotero/跟踪模块、对接 GitHub Token 模块

window.SubscriptionsManager = (function () {
  let overlay = null;
  let panel = null;
  let input = null;
  let searchBtn = null;
  let closeBtn = null;
  let resultsEl = null;
  let msgEl = null;
  let lastSearchTs = 0;

  const ensureOverlay = () => {
    if (overlay && panel) return;
    overlay = document.getElementById('arxiv-search-overlay');
    if (overlay) {
      panel = document.getElementById('arxiv-search-panel');
      return;
    }

    overlay = document.createElement('div');
    overlay.id = 'arxiv-search-overlay';
    overlay.innerHTML = `
      <div id="arxiv-search-panel">
        <div id="arxiv-search-panel-header">
          <div style="font-weight:600;">后台管理</div>
          <div style="display:flex; gap:8px; align-items:center;">
            <button id="github-auth-btn" class="arxiv-tool-btn" style="padding:2px 10px; background:#6c757d; color:white;">未登录</button>
            <button id="arxiv-search-close-btn" class="arxiv-tool-btn" style="padding:2px 6px;">关闭</button>
          </div>
        </div>
        
        <!-- GitHub Token 管理区域 -->
        <div id="github-token-section" style="display:none; background:#fff3cd; padding:12px; border-radius:6px; margin-bottom:12px; border:1px solid #ffc107;">
          <div style="font-weight:500; margin-bottom:8px; font-size:14px;">GitHub Token 配置</div>
          <div style="font-size:12px; color:#856404; margin-bottom:8px; line-height:1.5;">
            <strong>⚠️ 隐私说明：</strong>密钥仅保存在浏览器本地存储，不会上传到云端。<br>
            <strong>所需权限：</strong>repo（仓库读写）、workflow（工作流）、gist<br>
            <strong>注意：</strong>请确保该 Token 有权限管理当前 GitHub Pages 所在仓库
          </div>
          <div style="display:flex; gap:8px; margin-bottom:8px;">
            <input id="github-token-input" type="password" 
              placeholder="输入 GitHub Personal Access Token" 
              style="flex:1; padding:8px; border:1px solid #ccc; border-radius:4px; font-size:12px;" />
            <button id="github-token-toggle-visibility" class="arxiv-tool-btn" style="padding:6px 10px;">👁️</button>
          </div>
          <div style="display:flex; gap:8px; align-items:center;">
            <button id="github-token-verify-btn" class="arxiv-tool-btn" style="flex:1; padding:8px; background:#28a745; color:white; font-weight:500;">验证并保存</button>
            <button id="github-token-clear-btn" class="arxiv-tool-btn" style="padding:8px 12px; background:#dc3545; color:white;">清除</button>
          </div>
          <div id="github-token-message" style="margin-top:8px; font-size:12px; line-height:1.5;"></div>
          <div id="github-token-info" style="display:none; margin-top:8px; padding:8px; background:#d4edda; border:1px solid #c3e6cb; border-radius:4px; font-size:12px;">
            <div><strong>登录用户：</strong><span id="github-user-name"></span></div>
            <div><strong>Token 有效期：</strong><span id="github-token-expiry">永久</span></div>
            <div><strong>管理仓库：</strong><span id="github-repo-name"></span></div>
          </div>
        </div>

        <div id="arxiv-subscriptions">
          <div id="arxiv-top-row">
            <div id="arxiv-keywords-pane" class="arxiv-pane">
              <div style="font-weight:500; margin-bottom:4px;">订阅关键词</div>
              <div id="arxiv-keywords-list" style="font-size:12px; height:120px; overflow-y:auto; border:1px solid #eee; padding:6px; border-radius:4px; background:#fff; margin-bottom:4px;"></div>
              <div style="display:flex; gap:4px; margin-bottom:4px; align-items:center; max-width:100%;">
                <input id="arxiv-keyword-input" type="text"
                  placeholder="新增关键词，如 llm"
                  style="flex:3 1 0; min-width:0; padding:6px; border-radius:4px; border:1px solid #ccc; font-size:12px;"
                />
                <input id="arxiv-keyword-alias-input" type="text"
                  placeholder="备注（必填）"
                  required
                  style="flex:2 1 0; min-width:0; padding:6px; border-radius:4px; border:1px solid #ccc; font-size:12px;"
                />
                <button id="arxiv-keyword-add-btn" class="arxiv-tool-btn"
                  style="flex:1 1 0; min-width:0; white-space:nowrap; padding:6px 4px; font-size:12px;">新增</button>
              </div>
            </div>

            <div id="arxiv-zotero-pane" class="arxiv-pane">
              <div style="font-weight:500; margin-bottom:4px;">智能订阅（LLM Query）</div>
              <div id="zotero-list" style="font-size:12px; height:88px; overflow-y:auto; border:1px solid #eee; padding:6px; border-radius:4px; background:#fff; margin-bottom:4px;"></div>
              <div style="display:flex; gap:4px; margin-bottom:4px; align-items:center; max-width:100%;">
                <input id="zotero-id-input" type="text"
                  placeholder="输入偏好描述 / 查询语句，如: small LLM for code"
                  style="flex:3 1 0; min-width:0; padding:6px; border-radius:4px; border:1px solid #ccc; font-size:12px;"
                />
                <input id="zotero-alias-input" type="text"
                  placeholder="备注（必填）"
                  required
                  style="flex:1 1 0; min-width:0; padding:6px; border-radius:4px; border:1px solid #ccc; font-size:12px;"
                />
                <button id="zotero-add-btn" class="arxiv-tool-btn"
                  style="flex:1 1 0; min-width:0; white-space:nowrap; padding:6px 4px; font-size:12px;">新增</button>
              </div>
            </div>
          </div>
        </div>

        <div id="arxiv-search-section" class="arxiv-pane">
          <div style="font-weight:500; margin-bottom:4px;">订阅论文新引用</div>
          <div id="arxiv-tracked-list" style="font-size:12px; max-height:120px; overflow-y:auto; overflow-x:hidden; border:1px solid #eee; padding:6px; border-radius:4px; background:#fff; margin-bottom:8px;"></div>

          <div style="font-weight:500; margin-bottom:4px;">通过 Arxiv 搜索新增需跟踪的论文</div>
          <div style="display:flex; gap:4px; margin-bottom:4px; max-width:100%;">
            <input id="arxiv-search-input" type="text"
              placeholder="输入 Arxiv 关键词或链接"
              style="flex:1 1 0; min-width:0; padding:6px; border-radius:4px; border:1px solid #ccc; font-size:12px;"
            />
            <button id="arxiv-search-btn" class="arxiv-tool-btn" style="flex:0 0 auto; padding:6px 10px; font-size:12px; white-space:nowrap;">搜索</button>
          </div>
          <div id="arxiv-search-msg" style="font-size:12px; color:#666; margin-bottom:4px;">提示：3 秒内只能搜索一次</div>
          <div id="arxiv-search-results"></div>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    panel = document.getElementById('arxiv-search-panel');

    // 绑定基础 DOM 引用
    input = document.getElementById('arxiv-search-input');
    searchBtn = document.getElementById('arxiv-search-btn');
    closeBtn = document.getElementById('arxiv-search-close-btn');
    resultsEl = document.getElementById('arxiv-search-results');
    msgEl = document.getElementById('arxiv-search-msg');

    // GitHub Token 交给专用模块
    if (window.SubscriptionsGithubToken) {
      const githubAuthBtn = document.getElementById('github-auth-btn');
      const githubTokenSection =
        document.getElementById('github-token-section');
      const githubTokenInput = document.getElementById('github-token-input');
      const githubTokenToggleBtn = document.getElementById(
        'github-token-toggle-visibility',
      );
      const githubTokenVerifyBtn = document.getElementById(
        'github-token-verify-btn',
      );
      const githubTokenClearBtn = document.getElementById(
        'github-token-clear-btn',
      );
      const githubTokenMessage = document.getElementById(
        'github-token-message',
      );
      const githubTokenInfo =
        document.getElementById('github-token-info');
      const githubUserName =
        document.getElementById('github-user-name');
      const githubTokenExpiry = document.getElementById(
        'github-token-expiry',
      );
      const githubRepoName =
        document.getElementById('github-repo-name');

      window.SubscriptionsGithubToken.init({
        githubAuthBtn,
        githubTokenSection,
        githubTokenInput,
        githubTokenToggleBtn,
        githubTokenVerifyBtn,
        githubTokenClearBtn,
        githubTokenMessage,
        githubTokenInfo,
        githubUserName,
        githubTokenExpiry,
        githubRepoName,
      });
    }

    const reloadAll = () => {
      loadSubscriptions();
    };

    // 交给子模块管理各自区域
    if (window.SubscriptionsKeywords) {
      window.SubscriptionsKeywords.attach({
        keywordsListEl: document.getElementById('arxiv-keywords-list'),
        keywordInput: document.getElementById('arxiv-keyword-input'),
        keywordAliasInput: document.getElementById('arxiv-keyword-alias-input'),
        keywordAddBtn: document.getElementById('arxiv-keyword-add-btn'),
        msgEl,
        reloadAll,
      });
    }

    if (window.SubscriptionsZotero) {
      window.SubscriptionsZotero.attach({
        zoteroListEl: document.getElementById('zotero-list'),
        zoteroIdInput: document.getElementById('zotero-id-input'),
        zoteroAliasInput: document.getElementById('zotero-alias-input'),
        zoteroAddBtn: document.getElementById('zotero-add-btn'),
        msgEl,
        reloadAll,
      });
    }

    if (window.SubscriptionsTrackedPapers) {
      window.SubscriptionsTrackedPapers.attach({
        trackedListEl: document.getElementById('arxiv-tracked-list'),
        msgEl,
        reloadAll,
      });
    }

    bindBaseEvents();
  };

  const openOverlay = () => {
    ensureOverlay();
    if (!overlay) return;
    overlay.style.display = 'flex';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        overlay.classList.add('show');
      });
    });
    if (msgEl) {
      msgEl.textContent = '提示：3 秒内只能搜索一次';
      msgEl.style.color = '#666';
    }
    if (resultsEl) {
      resultsEl.innerHTML = '';
    }
    loadSubscriptions();
    if (input) {
      setTimeout(() => input.focus(), 50);
    }
  };

  const closeOverlay = () => {
    if (!overlay) return;
    overlay.classList.remove('show');
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 300);
  };

  const renderResults = (items) => {
    if (!resultsEl) return;
    if (!items || !items.length) {
      resultsEl.innerHTML =
        '<div style="font-size:12px; color:#999;">未找到相关结果，请尝试修改关键词。</div>';
      return;
    }
    resultsEl.innerHTML = '';
    items.forEach((item, idx) => {
      const row = document.createElement('div');
      row.className = 'arxiv-result-item';
      if (idx === 0) row.classList.add('selected');
      const allAuthors = item.authors || [];
      const displayAuthors =
        allAuthors.slice(0, 5).join(', ') +
        (allAuthors.length > 5 ? ', ...' : '');
      row.innerHTML = `
        <input type="radio" name="arxiv-choice" value="${item.arxiv_id}" ${
          idx === 0 ? 'checked' : ''
        } style="pointer-events:none; flex-shrink:0;" />
        <div class="arxiv-result-meta">
          <div class="arxiv-result-title">${item.title || ''}</div>
          <div class="arxiv-result-authors">${
            displayAuthors || ''
          }</div>
          <div class="arxiv-result-published">
            ${item.published ? '发表于：' + item.published : ''}
            ${
              item.arxiv_id
                ? (item.published ? ' ｜ ' : '') + 'arXiv: ' + item.arxiv_id
                : ''
            }
          </div>
        </div>
      `;

      if (idx === 0) {
        const actionDiv = document.createElement('div');
        actionDiv.className = 'arxiv-result-action-area';
        actionDiv.innerHTML = `
          <input type="text" class="arxiv-track-alias-input" placeholder="备注" required />
          <button class="arxiv-track-btn arxiv-tool-btn">加入后台</button>
        `;
        row.appendChild(actionDiv);
      }

      row.addEventListener('click', (e) => {
        if (e.target.tagName === 'INPUT' && e.target.type === 'text') return;
        if (e.target.tagName === 'BUTTON') return;
        resultsEl.querySelectorAll('.arxiv-result-item').forEach((r) => {
          r.classList.remove('selected');
          const actionArea = r.querySelector('.arxiv-result-action-area');
          if (actionArea) actionArea.remove();
        });

        row.classList.add('selected');
        const radio = row.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;

        const actionDiv = document.createElement('div');
        actionDiv.className = 'arxiv-result-action-area';
        actionDiv.innerHTML = `
          <input type="text" class="arxiv-track-alias-input" placeholder="备注" required />
          <button class="arxiv-track-btn arxiv-tool-btn">加入后台</button>
        `;
        row.appendChild(actionDiv);
        const trackBtn = actionDiv.querySelector('.arxiv-track-btn');
        trackBtn.addEventListener('click', () => doTrack());
      });

      if (idx === 0) {
        const trackBtn = row.querySelector('.arxiv-track-btn');
        if (trackBtn) {
          trackBtn.addEventListener('click', () => doTrack());
        }
      }

      resultsEl.appendChild(row);
    });
  };

  const doSearch = async () => {
    if (!input || !msgEl || !resultsEl) return;
    const now = Date.now();
    if (now - lastSearchTs < 3000) {
      msgEl.textContent = '搜索过于频繁，请稍后再试（3 秒内只能搜索一次）';
      msgEl.style.color = '#c00';
      return;
    }
    const q = (input.value || '').trim();
    if (!q) {
      msgEl.textContent = '请输入关键词或 arxiv 链接';
      msgEl.style.color = '#c00';
      return;
    }
    lastSearchTs = now;
    msgEl.textContent = '搜索中...';
    msgEl.style.color = '#666';
    resultsEl.innerHTML = '';

    try {
      const res = await fetch(
        `${window.API_BASE_URL}/api/arxiv_search?query=${encodeURIComponent(
          q,
        )}`,
      );
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        msgEl.textContent = data.detail || '搜索失败';
        msgEl.style.color = '#c00';
        return;
      }
      const data = await res.json();
      renderResults(data.items || []);
      msgEl.textContent = '搜索完成，可选择一篇论文并点击「加入后台」';
      msgEl.style.color = '#666';
    } catch (e) {
      console.error(e);
      msgEl.textContent = '搜索失败，请稍后重试';
      msgEl.style.color = '#c00';
    }
  };

  const doTrack = async () => {
    if (!msgEl) return;
    const checked = document.querySelector(
      'input[name="arxiv-choice"]:checked',
    );
    if (!checked) {
      msgEl.textContent = '请先在结果中选中一篇论文';
      msgEl.style.color = '#c00';
      return;
    }
    const arxivId = checked.value;
    const selectedRow = checked.closest('.arxiv-result-item');
    const trackAliasInput = selectedRow
      ? selectedRow.querySelector('.arxiv-track-alias-input')
      : null;
    const alias = ((trackAliasInput && trackAliasInput.value) || '').trim();
    if (!alias) {
      msgEl.textContent = '备注为必填项';
      msgEl.style.color = '#c00';
      return;
    }
    msgEl.textContent = '正在加入后台...';
    msgEl.style.color = '#666';
    try {
      const res = await fetch(`${window.API_BASE_URL}/api/arxiv_track`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ arxiv_id: arxivId, alias }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        msgEl.textContent = data.detail || '加入后台失败';
        msgEl.style.color = '#c00';
      } else {
        msgEl.textContent =
          '已加入后台（如果之前已存在则会忽略）。';
        msgEl.style.color = '#080';
        if (typeof loadSubscriptions === 'function') {
          loadSubscriptions();
        }
        const reChecked = document.querySelector(
          'input[name="arxiv-choice"]:checked',
        );
        if (reChecked) {
          const selRow = reChecked.closest('.arxiv-result-item');
          const aliasInput = selRow
            ? selRow.querySelector('.arxiv-track-alias-input')
            : null;
          if (aliasInput) aliasInput.value = '';
        }
      }
    } catch (e) {
      console.error(e);
      msgEl.textContent = '加入后台失败，请稍后重试';
      msgEl.style.color = '#c00';
    }
  };

  const loadSubscriptions = async () => {
    try {
      const res = await fetch(`${window.API_BASE_URL}/api/subscriptions`);
      if (!res.ok) return;
      const data = await res.json();
      if (window.SubscriptionsKeywords && window.SubscriptionsKeywords.render) {
        window.SubscriptionsKeywords.render(data.keywords || []);
      }
      if (
        window.SubscriptionsTrackedPapers &&
        window.SubscriptionsTrackedPapers.render
      ) {
        window.SubscriptionsTrackedPapers.render(data.tracked_papers || []);
      }
      if (window.SubscriptionsZotero && window.SubscriptionsZotero.render) {
        window.SubscriptionsZotero.render(data.zotero_accounts || []);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const bindBaseEvents = () => {
    if (closeBtn && !closeBtn._bound) {
      closeBtn._bound = true;
      closeBtn.addEventListener('click', closeOverlay);
    }
    if (overlay && !overlay._boundClick) {
      overlay._boundClick = true;
      overlay.addEventListener('mousedown', (e) => {
        if (e.target === overlay) {
          closeOverlay();
        }
      });
    }
    if (searchBtn && !searchBtn._bound) {
      searchBtn._bound = true;
      searchBtn.addEventListener('click', doSearch);
    }
    if (input && !input._bound) {
      input._bound = true;
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) {
          e.preventDefault();
          doSearch();
        }
      });
    }
  };

  const init = () => {
    const run = () => {
      ensureOverlay();
      document.addEventListener('ensure-arxiv-ui', () => {
        ensureOverlay();
      });
      if (!document._arxivLoadSubscriptionsEventBound) {
        document._arxivLoadSubscriptionsEventBound = true;
        document.addEventListener('load-arxiv-subscriptions', () => {
          ensureOverlay();
          loadSubscriptions();
          openOverlay();
        });
      }
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', run);
    } else {
      run();
    }
  };

  return {
    init,
    openOverlay,
    closeOverlay,
    loadSubscriptions,
  };
})();
