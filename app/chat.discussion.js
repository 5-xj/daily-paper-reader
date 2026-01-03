// 私人研讨区模块：负责聊天 UI、LLM 配置与本地记忆（IndexedDB）
window.PrivateDiscussionChat = (function () {
  const CHAT_HISTORY_KEY = 'dpr_chat_history_v1'; // 仅用于旧版本迁移
  const CHAT_DB_NAME = 'dpr_chat_db_v1';
  const CHAT_STORE_NAME = 'paper_chats';
  const CHAT_MODEL_PREF_KEY = 'dpr_chat_model_preference_v1';

  // 读取用户偏好的 Chat 模型名称（跨页面生效）
  const loadPreferredModelName = () => {
    try {
      if (!window.localStorage) return '';
      const v = window.localStorage.getItem(CHAT_MODEL_PREF_KEY);
      return typeof v === 'string' ? v : '';
    } catch {
      return '';
    }
  };

  // 保存用户偏好的 Chat 模型名称
  const savePreferredModelName = (name) => {
    try {
      if (!window.localStorage) return;
      const v = (name || '').trim();
      if (!v) return;
      window.localStorage.setItem(CHAT_MODEL_PREF_KEY, v);
    } catch {
      // ignore
    }
  };

  // 从 secret.private 解密结果中生成可用的 Chat 模型列表
  const getChatLLMConfig = () => {
    const secret = window.decoded_secret_private || {};
    const chatList = Array.isArray(secret.chatLLMs) ? secret.chatLLMs : [];
    const models = [];
    chatList.forEach((item) => {
      if (!item || !item.models || !Array.isArray(item.models)) return;
      const baseUrl = (item.baseUrl || '').trim();
      const apiKey = (item.apiKey || '').trim();
      item.models.forEach((m) => {
        const name = (m || '').trim();
        if (!name || !apiKey || !baseUrl) return;
        // 仅保留 Gemini 系列模型，其他模型不出现在私人研讨区下拉列表中
        if (!name.toLowerCase().startsWith('gemini-')) return;
        models.push({
          name,
          apiKey,
          baseUrl,
        });
      });
    });
    return models;
  };

  let chatDbPromise = null;

  const openChatDB = () => {
    if (chatDbPromise) return chatDbPromise;
    if (typeof indexedDB === 'undefined') {
      chatDbPromise = Promise.resolve(null);
      return chatDbPromise;
    }
    chatDbPromise = new Promise((resolve) => {
      try {
        const req = indexedDB.open(CHAT_DB_NAME, 1);
        req.onupgradeneeded = (event) => {
          const db = event.target.result;
          if (!db.objectStoreNames.contains(CHAT_STORE_NAME)) {
            db.createObjectStore(CHAT_STORE_NAME, { keyPath: 'paperId' });
          }
        };
        req.onsuccess = (event) => {
          const db = event.target.result;
          // 迁移旧版 localStorage 聊天记录
          try {
            if (window.localStorage) {
              const raw = window.localStorage.getItem(CHAT_HISTORY_KEY);
              if (raw) {
                const obj = JSON.parse(raw) || {};
                const tx = db.transaction(CHAT_STORE_NAME, 'readwrite');
                const store = tx.objectStore(CHAT_STORE_NAME);
                Object.keys(obj).forEach((pid) => {
                  const list = obj[pid];
                  if (pid && Array.isArray(list)) {
                    store.put({ paperId: pid, messages: list });
                  }
                });
                tx.oncomplete = () => {
                  window.localStorage.removeItem(CHAT_HISTORY_KEY);
                };
              }
            }
          } catch {
            // ignore
          }
          resolve(db);
        };
        req.onerror = () => resolve(null);
      } catch {
        resolve(null);
      }
    });
    return chatDbPromise;
  };

  const loadChatHistory = async (paperId) => {
    if (!paperId) return [];
    const db = await openChatDB();
    if (!db) {
      try {
        if (!window.localStorage) return [];
        const raw = window.localStorage.getItem(CHAT_HISTORY_KEY);
        if (!raw) return [];
        const obj = JSON.parse(raw);
        if (!obj || typeof obj !== 'object') return [];
        const list = obj[paperId];
        return Array.isArray(list) ? list : [];
      } catch {
        return [];
      }
    }
    return new Promise((resolve) => {
      try {
        const tx = db.transaction(CHAT_STORE_NAME, 'readonly');
        const store = tx.objectStore(CHAT_STORE_NAME);
        const req = store.get(paperId);
        req.onsuccess = () => {
          const record = req.result;
          if (record && Array.isArray(record.messages)) {
            resolve(record.messages);
          } else {
            resolve([]);
          }
        };
        req.onerror = () => resolve([]);
      } catch {
        resolve([]);
      }
    });
  };

  const saveChatHistory = async (paperId, list) => {
    if (!paperId) return;
    const db = await openChatDB();
    if (!db) {
      try {
        if (!window.localStorage) return;
        const raw = window.localStorage.getItem(CHAT_HISTORY_KEY);
        const obj = raw ? JSON.parse(raw) || {} : {};
        obj[paperId] = list;
        window.localStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(obj));
      } catch {
        // ignore
      }
      return;
    }
    try {
      const tx = db.transaction(CHAT_STORE_NAME, 'readwrite');
      const store = tx.objectStore(CHAT_STORE_NAME);
      store.put({ paperId, messages: list });
    } catch {
      // ignore
    }
  };

  const renderChatUI = () => {
    return `
      <div id="paper-chat-container">
        <div id="chat-history">
            <div style="text-align:center; color:#999">暂无讨论，输入你的想法开始对话（仅保存在本机）</div>
        </div>
        <div class="input-area">
          <textarea id="user-input" rows="3" placeholder="针对这篇论文提问，仅自己可见..."></textarea>
          <button id="send-btn">发送</button>
        </div>
        <div class="chat-footer">
          <div class="chat-footer-controls">
            <button id="chat-sidebar-toggle-btn" class="chat-footer-icon-btn" type="button">☰</button>
            <button id="chat-settings-toggle-btn" class="chat-footer-icon-btn" type="button">⚙️</button>
          </div>
          <select id="chat-llm-model-select" class="chat-model-select"></select>
          <span id="chat-status" class="chat-status"></span>
        </div>
      </div>
    `;
  };

  const renderHistory = async (paperId) => {
    const historyDiv = document.getElementById('chat-history');
    if (!historyDiv) return;

    const data = await loadChatHistory(paperId);
    if (!data || !data.length) {
      historyDiv.innerHTML =
        '<div style="text-align:center; color:#999">暂无讨论，输入上方问题开始提问。</div>';
      return;
    }

    const { renderMarkdownWithTables, renderMathInEl } = window.DPRMarkdown || {};
    historyDiv.innerHTML = '';
    data.forEach((msg) => {
      const item = document.createElement('div');
      item.className = 'msg-item';

      const isThinking = msg.role === 'thinking';
      const isAi = msg.role === 'ai' || isThinking;

      if (!isThinking) {
        const contentDiv = document.createElement('div');
        contentDiv.className =
          'msg-content ' + (isAi ? 'msg-content-ai' : 'msg-content-user');
        const markdown = msg.content || '';
        if (renderMarkdownWithTables) {
          contentDiv.innerHTML = renderMarkdownWithTables(markdown);
        } else {
          contentDiv.textContent = markdown;
        }
        if (renderMathInEl) {
          renderMathInEl(contentDiv);
        }

        item.appendChild(contentDiv);
        historyDiv.appendChild(item);
        return;
      }

      const thinkingContainer = document.createElement('div');
      thinkingContainer.className = 'thinking-history-container';

      const thinkingHeader = document.createElement('div');
      thinkingHeader.className = 'thinking-history-header';
      const titleSpan = document.createElement('span');
      titleSpan.textContent = '思考过程';
      const toggleBtn = document.createElement('button');
      toggleBtn.className = 'thinking-history-toggle';
      toggleBtn.textContent = '展开';
      thinkingHeader.appendChild(titleSpan);
      thinkingHeader.appendChild(toggleBtn);

      const thinkingContent = document.createElement('div');
      thinkingContent.className =
        'msg-content thinking-history-content thinking-collapsed';
      const markdown = msg.content || '';
      if (renderMarkdownWithTables) {
        thinkingContent.innerHTML = renderMarkdownWithTables(markdown);
      } else {
        thinkingContent.textContent = markdown;
      }
      if (renderMathInEl) {
        renderMathInEl(thinkingContent);
      }

      thinkingContainer.appendChild(thinkingHeader);
      thinkingContainer.appendChild(thinkingContent);

      toggleBtn.addEventListener('click', () => {
        const collapsed = thinkingContent.classList.toggle('thinking-collapsed');
        toggleBtn.textContent = collapsed ? '展开' : '折叠';
      });

      const header = document.createElement('div');
      const roleSpan = document.createElement('span');
      roleSpan.className = 'msg-role ai';
      roleSpan.textContent = '🧠 AI 思考过程';
      const timeSpan = document.createElement('span');
      timeSpan.className = 'msg-time';
      timeSpan.textContent = msg.time || '';
      header.appendChild(roleSpan);
      header.appendChild(timeSpan);

      item.appendChild(header);
      item.appendChild(thinkingContainer);
      historyDiv.appendChild(item);
    });

    historyDiv.scrollTop = historyDiv.scrollHeight;

    // 聊天历史渲染完成后，通知 Zotero 元数据刷新一次（包含最新对话）
    try {
      if (window.DPRZoteroMeta && window.DPRZoteroMeta.updateFromPage) {
        // vm.route.file 在前端不可见，这里只传 paperId，后端函数会使用当前路由
        window.DPRZoteroMeta.updateFromPage(paperId);
      }
    } catch {
      // 忽略刷新失败
    }
  };

  const sendMessage = async (paperId) => {
    // 游客模式或尚未解锁密钥时，禁止直接调用大模型
    if (window.DPR_ACCESS_MODE === 'guest' || window.DPR_ACCESS_MODE === 'locked') {
      const statusEl = document.getElementById('chat-status');
      if (statusEl) {
        statusEl.textContent =
          '当前为游客模式或尚未解锁密钥，无法直接与大模型对话。';
        statusEl.style.color = '#c00';
      }
      const historyDiv = document.getElementById('chat-history');
      if (historyDiv && !historyDiv._guestHintShown) {
        historyDiv._guestHintShown = true;
        historyDiv.innerHTML =
          '<div style="text-align:center; color:#999; padding:8px 0;">当前为游客模式，解锁密钥后可启用大模型对话。</div>';
      }
      return;
    }
    const input = document.getElementById('user-input');
    const btn = document.getElementById('send-btn');
    const statusEl = document.getElementById('chat-status');
    const question = input.value.trim();
    let paperContent = '';

    // 优先使用与后端一致的 .txt 抽取全文作为上下文（不截断）
    if (paperId) {
      try {
        const txtUrl = `docs/${paperId}.txt`;
        const resp = await fetch(txtUrl);
        if (resp.ok) {
          const txt = await resp.text();
          if (txt && txt.trim()) {
            paperContent = txt;
            const snippet = txt.slice(0, 50).replace(/\s+/g, ' ');
            console.log(
              `[DPR DEBUG] paper_txt_content (${paperId}): '${snippet}'`,
            );
          } else {
            console.log(
              `[DPR DEBUG] paper_txt_content (${paperId}): <empty or whitespace>`,
            );
          }
        } else {
          console.log(
            `[DPR DEBUG] paper_txt_content (${paperId}): <http ${resp.status}>`,
          );
        }
      } catch {
        console.log(
          `[DPR DEBUG] paper_txt_content (${paperId}): <fetch failed>`,
        );
      }
    }

    // 回退策略：如果 .txt 不存在，就用页面正文纯文本
    if (!paperContent) {
      paperContent =
        (document.querySelector('.markdown-section') || {}).innerText ||
        '';
    }

    if (!question) return;

    input.disabled = true;
    btn.disabled = true;
    btn.innerText = '思考中...';

    const historyDiv = document.getElementById('chat-history');
    const nowStr = new Date().toLocaleString();
    historyDiv.innerHTML += `
        <div class="msg-item">
            <div><span class="msg-role user">👤 你</span><span class="msg-time">${nowStr}</span></div>
            <div class="msg-content">${question}</div>
        </div>
    `;
    historyDiv.scrollTop = historyDiv.scrollHeight;

    const aiItem = document.createElement('div');
    aiItem.className = 'msg-item';
    aiItem.innerHTML = `
        <div>
          <span class="msg-role ai">🤖 私人助手</span>
          <span class="msg-time">${nowStr}</span>
        </div>
        <div class="thinking-container" style="margin-top:8px; border-left:3px solid #ddd; padding-left:8px; font-size:0.85rem; color:#666; display:none;">
          <div style="display:flex; align-items:center; justify-content:space-between;">
            <span>思考过程</span>
            <button class="thinking-toggle" style="margin-left:8px; font-size:0.75rem; padding:2px 6px;">展开</button>
          </div>
          <div class="thinking-content" style="white-space:pre-wrap; margin-top:4px;"></div>
        </div>
        <div class="msg-content"></div>
    `;
    historyDiv.appendChild(aiItem);

    const thinkingContainer = aiItem.querySelector('.thinking-container');
    const thinkingContent = aiItem.querySelector('.thinking-content');
    const toggleBtn = aiItem.querySelector('.thinking-toggle');
    const aiAnswerDiv = aiItem.querySelector('.msg-content');

    const history = await loadChatHistory(paperId);

    // 调试：打印历史消息前 50 个字符
    try {
      history.forEach((m, idx) => {
        const role = m.role || 'unknown';
        const snippet = (m.content || '').slice(0, 50).replace(/\s+/g, ' ');
        console.log(
          `[DPR DEBUG] history[${idx}] role=${role}: '${snippet}'`,
        );
      });
      const qSnippet = question.slice(0, 50).replace(/\s+/g, ' ');
      console.log(`[DPR DEBUG] current_question: '${qSnippet}'`);
    } catch {
      // 忽略调试输出错误
    }
    history.push({
      role: 'user',
      content: question,
      time: nowStr,
    });
    await saveChatHistory(paperId, history);

    // 用户发起提问后，立即刷新一次 Zotero 摘要（包含最新提问）
    try {
      if (window.DPRZoteroMeta && window.DPRZoteroMeta.updateFromPage) {
        window.DPRZoteroMeta.updateFromPage(paperId);
      }
    } catch {
      // 忽略刷新失败
    }

    const chatModels = getChatLLMConfig();
    const modelSelect = document.getElementById('chat-llm-model-select');

    if (!chatModels.length) {
      aiAnswerDiv.textContent =
        '当前未在密钥配置中找到可用的 Chat 模型，请先完成首页「新配置指引」。';
      if (statusEl) {
        statusEl.textContent =
          '未检测到可用 Chat 模型，请检查密钥配置。';
        statusEl.style.color = '#c00';
      }
      input.disabled = false;
      btn.disabled = false;
      btn.innerText = '发送';
      return;
    }

    // 选择默认模型：优先下拉框当前值，否则取列表第一项
    let selectedModelName = '';
    if (modelSelect && modelSelect.value) {
      selectedModelName = modelSelect.value;
    } else if (chatModels.length) {
      selectedModelName = chatModels[0].name;
    }
    const modelEntry =
      chatModels.find((m) => m.name === selectedModelName) ||
      chatModels[0] ||
      null;

    const apiKey = modelEntry ? (modelEntry.apiKey || '').trim() : '';
    const baseUrl = modelEntry ? (modelEntry.baseUrl || '').trim() : '';
    const model = modelEntry ? modelEntry.name : '';

    if (!apiKey) {
      aiAnswerDiv.textContent =
        '未检测到可用的 Chat LLM API Key，请检查密钥配置。';
      if (statusEl) {
        statusEl.textContent = '未配置 Chat LLM API Key。';
        statusEl.style.color = '#c00';
      }
      input.disabled = false;
      btn.disabled = false;
      btn.innerText = '发送';
      return;
    }

    if (!model) {
      aiAnswerDiv.textContent =
        '未指定 Chat 模型，请检查密钥配置。';
      if (statusEl) {
        statusEl.textContent = '未配置 Chat 模型。';
        statusEl.style.color = '#c00';
      }
      input.disabled = false;
      btn.disabled = false;
      btn.innerText = '发送';
      return;
    }

    // 记录当前使用的模型为用户偏好，供后续页面复用
    savePreferredModelName(model);

    if (statusEl) {
      statusEl.textContent = `正在调用 Chat 模型 ${model}...`;
      statusEl.style.color = '#666';
    }

    let thinkingBuffer = '';
    let answerBuffer = '';
    // 默认以折叠模式展示思考过程，仅显示前若干行
    let thinkingCollapsed = true;
    let renderTimer = null;

    const { renderMarkdownWithTables, renderMathInEl } =
      window.DPRMarkdown || {};

    const applyThinkingView = () => {
      if (!thinkingBuffer || !thinkingContent) return;
      const source = thinkingBuffer;
      const maxLines = 6;
      let toRender = source;

      if (thinkingCollapsed) {
        const lines = source.split('\n');
        if (lines.length > maxLines) {
          toRender =
            lines.slice(0, maxLines).join('\n') +
            '\n...（已折叠，点击展开查看更多思考过程）';
        }
      }

      if (renderMarkdownWithTables) {
        thinkingContent.innerHTML = renderMarkdownWithTables(toRender);
      } else {
        thinkingContent.textContent = toRender;
      }
      if (renderMathInEl) {
        renderMathInEl(thinkingContent);
      }
    };

    const applyAnswerView = () => {
      if (!aiAnswerDiv) return;
      const content = answerBuffer || '（空响应）';
      if (renderMarkdownWithTables) {
        aiAnswerDiv.innerHTML = renderMarkdownWithTables(content);
      } else {
        aiAnswerDiv.textContent = content;
      }
      if (renderMathInEl) {
        renderMathInEl(aiAnswerDiv);
      }
    };

    if (toggleBtn && thinkingContainer) {
      toggleBtn.addEventListener('click', () => {
        thinkingCollapsed = !thinkingCollapsed;
        toggleBtn.textContent = thinkingCollapsed ? '展开' : '折叠';
        applyThinkingView();
      });
    }

    const scheduleRender = () => {
      if (renderTimer) return;
      renderTimer = requestAnimationFrame(() => {
        renderTimer = null;
        if (thinkingBuffer && thinkingContainer) {
          thinkingContainer.style.display = 'block';
          applyThinkingView();
        }
        if (answerBuffer) {
          applyAnswerView();
        }
      });
    };

    try {
      const messages = [];
      messages.push({
        role: 'system',
        content:
          '你是学术讨论助手，负责围绕当前论文内容进行深入分析与讨论。请使用中文回答，并使用 Markdown + LaTeX 表达公式。',
      });
      // 使用全文上下文（优先 .txt 抽取结果），不再做 8000 字截断
      if (paperContent) {
        messages.push({
          role: 'user',
          content: `下面是当前论文的完整纯文本内容（可能包含自动抽取噪声，仅供参考）：\n\n${paperContent}`,
        });
      }

          const prev = await loadChatHistory(paperId);
      prev.forEach((m) => {
        if (m.role === 'user' || m.role === 'ai') {
          messages.push({
            role: m.role === 'ai' ? 'assistant' : 'user',
            content: m.content || '',
          });
        }
      });

      messages.push({
        role: 'user',
          content: question,
      });

      const resp = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model,
          messages,
          stream: true,
          // OpenAI 兼容：请求返回思考过程（reasoning_content / thinking）
          reasoning: {
            effort: 'medium',
          },
          // DeepSeek / 部分聚合网关要求通过 extra_body.return_reasoning 开启思考输出
          extra_body: {
            return_reasoning: true,
          },
        }),
      });

      if (!resp.ok) {
        let errorText = '';
        try {
          errorText = await resp.text();
        } catch {
          errorText = '';
        }
        const preview = (errorText || '').slice(0, 300).replace(/\s+/g, ' ');
        console.error(
          '[DPR CHAT] Chat API 调用失败：',
          `HTTP ${resp.status} ${resp.statusText || ''}`,
          preview ? `| 响应内容片段: ${preview}` : '',
        );
        aiAnswerDiv.textContent = `请求失败: HTTP ${resp.status} ${
          resp.statusText || ''
        }${preview ? ` - ${preview}` : ''}`;
        if (statusEl) {
          statusEl.textContent = `调用 Chat 模型失败: HTTP ${resp.status} ${
            resp.statusText || ''
          }${preview ? ` - ${preview}` : ''}`;
          statusEl.style.color = '#c00';
        }
        return;
      }

      if (!resp.body) {
        // 回退：如果不支持流，则按一次性响应处理
        const data = await resp.json();
        const answer =
          data &&
          data.choices &&
          data.choices[0] &&
          data.choices[0].message &&
          data.choices[0].message.content
            ? data.choices[0].message.content
            : '（模型未返回内容）';
        answerBuffer = answer;
        scheduleRender();
      } else {
        const reader = resp.body.getReader();
        const decoder = new TextDecoder('utf-8');
        let buffer = '';

        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });

          const parts = buffer.split('\n\n');
          buffer = parts.pop() || '';

          for (const part of parts) {
            const line = part.trim();
            if (!line || !line.startsWith('data:')) continue;
            const jsonStr = line.replace(/^data:\s*/, '');
            if (jsonStr === '[DONE]') continue;
            let payload;
            try {
              payload = JSON.parse(jsonStr);
            } catch {
              continue;
            }
            const choice =
              payload.choices && payload.choices[0]
                ? payload.choices[0]
                : null;
            const delta = choice ? choice.delta || {} : {};
            const reasoning =
              delta.reasoning_content || delta.thinking || '';
            const contentPiece = delta.content || '';

            if (reasoning) {
              thinkingBuffer += reasoning;
            }
            if (contentPiece) {
              answerBuffer += contentPiece;
            }
            if (reasoning || contentPiece) {
              scheduleRender();
            }
          }
        }
      }

      const nowStrAnswer = new Date().toLocaleString();
      const updated = await loadChatHistory(paperId);
      if (thinkingBuffer.trim()) {
        updated.push({
          role: 'thinking',
          content: thinkingBuffer,
          time: nowStrAnswer,
        });
      }
      updated.push({
        role: 'ai',
        content: answerBuffer || '（模型未返回内容）',
      time: nowStrAnswer,
    });
    await saveChatHistory(paperId, updated);

      // 新一轮对话完成后，再次刷新 Zotero 元数据
      try {
        if (window.DPRZoteroMeta && window.DPRZoteroMeta.updateFromPage) {
          window.DPRZoteroMeta.updateFromPage(paperId);
        }
      } catch {
        // 忽略刷新失败
      }

      if (statusEl) {
        statusEl.textContent = `已使用模型 ${model}`;
        statusEl.style.color = '#4caf50';
      }

      input.value = '';
    } catch (e) {
      console.error(e);
      aiAnswerDiv.textContent = '发送失败，请检查网络或模型配置。';
      if (statusEl) {
        statusEl.textContent = '发送失败，请检查网络或模型配置。';
        statusEl.style.color = '#c00';
      }
    } finally {
      input.disabled = false;
      btn.disabled = false;
      btn.innerText = '发送';
      input.focus();
    }
  };

  const initForPage = (paperId) => {
    const mainContent = document.querySelector('.markdown-section');
    if (!mainContent || !paperId) return;

    const container = document.createElement('div');
    container.innerHTML = renderChatUI();
    mainContent.appendChild(container);

    const sendBtnEl = document.getElementById('send-btn');
    const inputEl = document.getElementById('user-input');
    const statusEl = document.getElementById('chat-status');
    const modelSelect = document.getElementById('chat-llm-model-select');
    const chatSidebarBtn = document.getElementById('chat-sidebar-toggle-btn');
    const chatSettingsBtn = document.getElementById('chat-settings-toggle-btn');

    const inGuestMode =
      window.DPR_ACCESS_MODE === 'guest' || window.DPR_ACCESS_MODE === 'locked';

    const enableChatControls = () => {
      const sendBtn = document.getElementById('send-btn');
      const input = document.getElementById('user-input');
      const status = document.getElementById('chat-status');
      const select = document.getElementById('chat-llm-model-select');

      if (sendBtn && !sendBtn._boundSend) {
        sendBtn._boundSend = true;
        sendBtn.disabled = false;
        sendBtn.title = '';
        sendBtn.addEventListener('click', () => {
          sendMessage(paperId);
        });
      }

      if (input && !input._boundKey) {
        input._boundKey = true;
        input.disabled = false;
        input.placeholder = '针对这篇论文提问，仅自己可见...';
        input.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) {
            e.preventDefault();
            sendMessage(paperId);
          }
        });
      }

      if (select) {
        const chatModels = getChatLLMConfig();
        // 解锁后重新启用下拉框
        select.disabled = false;
        select.title = '';
        select.innerHTML = '';
        const names = Array.from(
          new Set(chatModels.map((m) => (m.name || '').trim()).filter(Boolean)),
        );
        names.forEach((name) => {
          const opt = document.createElement('option');
          opt.value = name;
          opt.textContent = name;
          select.appendChild(opt);
        });
        // 选择模型默认值：
        // 1. 若存在用户偏好（localStorage），优先使用偏好；
        // 2. 否则退回第一个可用模型。
        const prefName = loadPreferredModelName();
        let defaultName = '';
        if (prefName && names.includes(prefName)) {
          defaultName = prefName;
        } else if (names.length) {
          defaultName = names[0];
        }
        if (defaultName) {
          select.value = defaultName;
        }
        if (!names.length && status) {
          status.textContent =
            '未检测到可用 Chat 模型，请在新配置指引中配置 chatLLMs。';
          status.style.color = '#c00';
        }

        // 用户手动切换模型时，更新偏好，跨页面复用
        if (!select._boundChange) {
          select._boundChange = true;
          select.addEventListener('change', () => {
            const v = (select.value || '').trim();
            if (v) {
              savePreferredModelName(v);
            }
          });
        }
      }
    };

    if (sendBtnEl) {
      if (inGuestMode) {
        sendBtnEl.disabled = true;
        sendBtnEl.title = '当前为游客模式或未解锁密钥，无法直接提问。';
      } else {
        enableChatControls();
      }
    }
    if (inputEl) {
      if (inGuestMode) {
        inputEl.disabled = true;
        inputEl.placeholder = '当前为游客模式，解锁密钥后才能向大模型提问。';
      } else {
        // 已在 enableChatControls 中绑定
      }
    }
    if (modelSelect) {
      if (inGuestMode) {
        modelSelect.disabled = true;
        modelSelect.title = '当前为游客模式或未解锁密钥，无法选择大模型。';
      }
    }

    // 如果当前是 locked/guest，则等待密钥解锁事件，再启用聊天控件
    if (inGuestMode) {
      const handler = (e) => {
        const mode = e && e.detail && e.detail.mode;
        if (mode === 'full') {
          document.removeEventListener('dpr-access-mode-changed', handler);
          enableChatControls();
        }
      };
      document.addEventListener('dpr-access-mode-changed', handler);
    }

    // 小屏幕下聊天区侧边栏开关与后台管理按钮
    if (chatSidebarBtn && !chatSidebarBtn._bound) {
      chatSidebarBtn._bound = true;
      chatSidebarBtn.addEventListener('click', () => {
        // 优先复用 Docsify 自带的 sidebar-toggle 行为
        const toggle = document.querySelector('.sidebar-toggle');
        if (toggle) {
          toggle.click();
          return;
        }
        // 兜底：直接切换 body.close，用于控制侧边栏展开/收起
        // const body = document.body;
        // if (!body) return;
        // body.classList.toggle('close');
      });
    }

    if (chatSettingsBtn && !chatSettingsBtn._bound) {
      chatSettingsBtn._bound = true;
      chatSettingsBtn.addEventListener('click', () => {
        // 复用底部齿轮按钮的行为：发出 ensure-arxiv-ui 和 load-arxiv-subscriptions 事件
        const ensureEvent = new CustomEvent('ensure-arxiv-ui');
        document.dispatchEvent(ensureEvent);

        setTimeout(() => {
          const loadEvent = new CustomEvent('load-arxiv-subscriptions');
          document.dispatchEvent(loadEvent);

          const overlay = document.getElementById('arxiv-search-overlay');
          if (overlay) {
            overlay.style.display = 'flex';
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                overlay.classList.add('show');
              });
            });
          }
        }, 100);
      });
    }

    renderHistory(paperId).catch(() => {});
  };

  return {
    initForPage,
  };
})();
