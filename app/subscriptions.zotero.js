// 智能订阅管理模块（原 Zotero）
// 负责：渲染智能订阅列表（query + 备注）、增加/删除订阅

window.SubscriptionsZotero = (function () {
  let zoteroListEl = null;
  let zoteroIdInput = null;
  let zoteroAliasInput = null;
  let zoteroAddBtn = null;
  let msgEl = null;
  let reloadAll = null;

  const escapeHtml = (str) => {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  };

  const render = (items) => {
    if (!zoteroListEl) return;
    if (!items || !items.length) {
      zoteroListEl.innerHTML =
        '<div style="color:#999;">暂无智能订阅，可在下方新增。</div>';
      return;
    }
    zoteroListEl.innerHTML = '';
    items.forEach((item) => {
      const row = document.createElement('div');
      row.style.display = 'flex';
      row.style.alignItems = 'center';
      row.style.justifyContent = 'space-between';
      row.style.marginBottom = '2px';
      const alias = item.alias || '';
      row.innerHTML = `
        <span>${
          alias
            ? '<span class="tag-label tag-blue">' +
              escapeHtml(alias) +
              '</span>'
            : ''
        }${escapeHtml(item.zotero_id || '')}</span>
        <button data-id="${
          item.id
        }" class="zotero-del-btn" style="border:none;background:none;color:#c00;font-size:11px;cursor:pointer;">删除</button>
      `;
      zoteroListEl.appendChild(row);
    });

    zoteroListEl.querySelectorAll('.zotero-del-btn').forEach((btn) => {
      if (btn._bound) return;
      btn._bound = true;
      btn.addEventListener('click', async () => {
        const id = btn.getAttribute('data-id');
        if (!id) return;
        try {
          await fetch(
            `${window.API_BASE_URL}/api/subscriptions/zotero/${id}`,
            { method: 'DELETE' },
          );
          if (typeof reloadAll === 'function') reloadAll();
        } catch (err) {
          console.error(err);
        }
      });
    });
  };

  const addZotero = async () => {
    if (!zoteroIdInput || !zoteroAliasInput) return;

    const query = (zoteroIdInput.value || '').trim();
    const alias = (zoteroAliasInput.value || '').trim();
    if (!query) {
      if (msgEl) {
        msgEl.textContent = '查询语句不能为空';
        msgEl.style.color = '#c00';
      }
      return;
    }
    if (!alias) {
      if (msgEl) {
        msgEl.textContent = '备注为必填项';
        msgEl.style.color = '#c00';
      }
      return;
    }
    try {
      const res = await fetch(
        `${window.API_BASE_URL}/api/subscriptions/zotero`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            // 复用后端字段：zotero_id 存放 query，api_key 使用占位符
            zotero_id: query,
            api_key: 'LLM_QUERY',
            alias,
          }),
        },
      );
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (msgEl) {
          msgEl.textContent = data.detail || '新增智能订阅失败';
          msgEl.style.color = '#c00';
        }
      } else {
        if (msgEl) {
          msgEl.textContent = '智能订阅已新增。';
          msgEl.style.color = '#080';
        }
        zoteroIdInput.value = '';
        zoteroAliasInput.value = '';
        if (typeof reloadAll === 'function') reloadAll();
      }
    } catch (e) {
      console.error(e);
      if (msgEl) {
        msgEl.textContent = '新增智能订阅失败，请稍后重试';
        msgEl.style.color = '#c00';
      }
    }
  };

  const attach = (context) => {
    zoteroListEl = context.zoteroListEl || null;
    zoteroIdInput = context.zoteroIdInput || null;
    zoteroAliasInput = context.zoteroAliasInput || null;
    zoteroAddBtn = context.zoteroAddBtn || null;
    msgEl = context.msgEl || null;
    reloadAll = context.reloadAll || null;

    if (zoteroAddBtn && !zoteroAddBtn._bound) {
      zoteroAddBtn._bound = true;
      zoteroAddBtn.addEventListener('click', addZotero);
    }

    if (zoteroAliasInput && !zoteroAliasInput._bound) {
      zoteroAliasInput._bound = true;
      zoteroAliasInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) {
          e.preventDefault();
          addZotero();
        }
      });
    }
  };

  return {
    attach,
    render,
  };
})();
