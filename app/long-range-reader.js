/* 独立静态回溯阅读页：每次只读取50条，论文内容仅通过textContent渲染。 */
(function () {
  'use strict';
  const el = (id) => document.getElementById(id);
  let manifest = null;
  let page = 0;
  let requestVersion = 0;
  const initial = new URLSearchParams(window.location.search);
  let targetPaper = initial.get('paper') || '';
  async function readJson(path) {
    const response = await fetch(path, { cache: 'no-cache' });
    if (!response.ok) throw new Error(`读取失败：HTTP ${response.status}`);
    return response.json();
  }
  function text(tag, value, parent, className) {
    const node = document.createElement(tag);
    node.textContent = value || '';
    if (className) node.className = className;
    parent.appendChild(node);
    return node;
  }
  async function render() {
    const version = ++requestVersion;
    el('papers').setAttribute('aria-busy', 'true');
    el('retry').hidden = true;
    try {
      const group = manifest.groups[Number(el('topic').value)];
      const bucket = group.buckets[el('bucket').value];
      const pages = bucket.pages;
      page = Math.max(0, Math.min(page, pages.length - 1));
      const file = pages[page];
      if (file && !/^[a-f0-9]+-(core|related|review|excluded)-[0-9]+\.json$/.test(file)) throw new Error('无效的分页文件');
      const rows = file ? await readJson(file) : [];
      if (version !== requestVersion) return;
      el('papers').replaceChildren();
      el('status').textContent = `${group.tag} · ${bucket.count} 篇 · 第 ${pages.length ? page + 1 : 0}/${pages.length} 页。模型评审并非人工金标准。`;
      el('previous').disabled = page === 0;
      el('next').disabled = page + 1 >= pages.length;
      for (const paper of rows) {
        const article = document.createElement('article');
        article.id = 'long-range-paper-' + paper.id;
        const heading = document.createElement('h2');
        const link = text('a', paper.title, heading);
        link.href = `https://arxiv.org/abs/${encodeURIComponent(String(paper.id).replace(/v\d+$/, ''))}`;
        link.target = '_blank'; link.rel = 'noopener noreferrer'; article.appendChild(heading);
        text('p', `${String(paper.published || '').slice(0, 10)} · ${paper.score}/10 · ${paper.id}`, article, 'meta');
        text('p', paper.reason, article);
        if (paper.scope_guard_passed === false && paper.score >= 8) text('p', '专题限定条件未通过自动核验，请人工确认。', article, 'meta');
        if (paper.evidence) text('blockquote', paper.evidence, article);
        const details = document.createElement('details');
        text('summary', '查看原始摘要', details); text('p', paper.abstract, details);
        article.appendChild(details); el('papers').appendChild(article);
      }
      if (!rows.length) text('p', '该分类暂无论文。', el('papers'));
      if (targetPaper) {
        const target = document.getElementById('long-range-paper-' + targetPaper);
        if (target) { target.style.outline = '2px solid #1976d2'; target.scrollIntoView({block:'center'}); }
      }
    } catch (error) {
      if (version !== requestVersion) return;
      el('papers').replaceChildren();
      el('status').textContent = `加载失败：${error.message}，请重试。`;
      el('retry').hidden = false;
    } finally {
      if (version === requestVersion) el('papers').setAttribute('aria-busy', 'false');
    }
  }
  async function init() {
    try {
      manifest = await readJson('manifest.json');
      el('scope').textContent = `${manifest.start.slice(0, 10)} 至 ${manifest.end_exclusive.slice(0, 10)}（结束日不含） · ${manifest.coverage_note}`;
      el('topic').replaceChildren();
      manifest.groups.forEach((group, index) => {
        const option = text('option', group.tag, el('topic')); option.value = String(index);
      });
      if (!manifest.groups.length) throw new Error('报告没有专题');
      const topic = Number(initial.get('topic'));
      if (Number.isInteger(topic) && topic >= 0 && topic < manifest.groups.length) el('topic').value = String(topic);
      const bucket = initial.get('bucket');
      if (['core','related','review','excluded'].includes(bucket)) el('bucket').value = bucket;
      const requestedPage = Number(initial.get('page'));
      page = Number.isInteger(requestedPage) && requestedPage >= 0 ? requestedPage : 0;
      await render();
    } catch (error) {
      manifest = null; el('status').textContent = `加载失败：${error.message}`; el('retry').hidden = false;
    }
  }
  el('topic').onchange = el('bucket').onchange = () => { targetPaper = ''; page = 0; render(); };
  el('previous').onclick = () => { targetPaper = ''; page -= 1; render(); };
  el('next').onclick = () => { targetPaper = ''; page += 1; render(); };
  el('retry').onclick = () => { if (manifest) render(); else init(); };
  init();
})();
