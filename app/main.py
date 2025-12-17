# /home/ubuntu/daily-paper/app/main.py
import sqlite3
import os
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import openai

app = FastAPI()

# 允许跨域（方便本地调试，上线后可限制）
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# 数据库与文件路径配置
DB_FILE = os.path.join(os.path.dirname(__file__), "chat.db")
DOCS_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), "docs")
LLM_API_KEY = os.getenv("LLM_API_KEY")
if not LLM_API_KEY:
    raise RuntimeError("缺少环境变量 LLM_API_KEY，请设置大模型的 API Key")

# 从环境变量读取模型名称和可选的 Base URL
LLM_MODEL = os.getenv("LLM_MODEL", "glm-4.6")
LLM_BASE_URL = os.getenv("LLM_BASE_URL", "https://open.bigmodel.cn/api/coding/paas/v4")

# 使用 OpenAI 兼容客户端，建议选择支持 200k 上下文长度的模型
CLIENT = openai.OpenAI(api_key=LLM_API_KEY, base_url=LLM_BASE_URL)

def init_db():
    with sqlite3.connect(DB_FILE) as conn:
        conn.execute("PRAGMA journal_mode=WAL;")
        conn.execute("""
            CREATE TABLE IF NOT EXISTS comments (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                paper_id TEXT, role TEXT, content TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """)
init_db()

class ChatRequest(BaseModel):
    paper_id: str
    question: str  # 前端会传 paper_content，但后端以本地 md/txt 为准读取

@app.get("/api/history")
def get_history(paper_id: str):
    with sqlite3.connect(DB_FILE) as conn:
        cursor = conn.execute("SELECT role, content, created_at FROM comments WHERE paper_id=? ORDER BY id ASC", (paper_id,))
        return [{"role": r[0], "content": r[1], "time": r[2]} for r in cursor.fetchall()]

@app.post("/api/chat")
def chat(req: ChatRequest):
    # 1. 读取本地 Markdown 文件和预处理后的 txt 文本作为上下文
    md_path = os.path.join(DOCS_DIR, f"{req.paper_id}.md")
    if not os.path.exists(md_path):
        raise HTTPException(status_code=404, detail="Paper not found")
    
    with open(md_path, "r", encoding="utf-8") as f:
        paper_md_content = f.read()

    txt_path = os.path.join(DOCS_DIR, f"{req.paper_id}.txt")
    paper_txt_content = ""
    if os.path.exists(txt_path):
        with open(txt_path, "r", encoding="utf-8") as f:
            paper_txt_content = f.read()

    # 2. 存用户问题
    with sqlite3.connect(DB_FILE) as conn:
        conn.execute("INSERT INTO comments (paper_id, role, content) VALUES (?, ?, ?)", (req.paper_id, "user", req.question))
        # 获取历史用于上下文
        cursor = conn.execute("SELECT role, content FROM comments WHERE paper_id=? ORDER BY id ASC", (req.paper_id,))
        history = cursor.fetchall()

    # 3. 组装 Prompt：PDF 文本 + Markdown + 历史讨论 + 本次问题
    messages = [{
        "role": "system",
        "content": "你是学术讨论助手。请综合论文 PDF 原文提取的文本、当前 Markdown 文档内容以及历史讨论记录来回答用户问题。回答时尽量引用论文中的关键信息，并清晰说明理由。",
    }]

    if paper_txt_content:
        messages.append({
            "role": "user",
            "content": f"### 论文 PDF 提取文本 ###\n{paper_txt_content}",
        })

    messages.append({
        "role": "user",
        "content": f"### 论文 Markdown 内容 ###\n{paper_md_content}",
    })
    
    # 将历史对话转为 API 格式
    for role, content in history:
        api_role = "assistant" if role == "ai" else "user"
        messages.append({"role": api_role, "content": content})

    # 4. 调用 LLM
    try:
        resp = CLIENT.chat.completions.create(
            model=LLM_MODEL,
            messages=messages,
            temperature=0.7,  # 模型温度设为 0.7
            stream=False,
        )
        ai_msg = resp.choices[0].message.content
    except Exception as e:
        ai_msg = f"Error: {str(e)}"

    # 5. 存 AI 回答
    with sqlite3.connect(DB_FILE) as conn:
        conn.execute("INSERT INTO comments (paper_id, role, content) VALUES (?, ?, ?)", (req.paper_id, "ai", ai_msg))

    return {"status": "ok"}
