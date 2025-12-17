import os
import fitz  # PyMuPDF


DOCS_DIR = os.path.expanduser("~/workplace/daily-paper-reader/docs")
PAPER_ID = "demo-test-pdf"
PDF_PATH = os.path.join(os.path.dirname(__file__), "test.pdf")
MD_PATH = os.path.join(DOCS_DIR, f"{PAPER_ID}.md")
TXT_PATH = os.path.join(DOCS_DIR, f"{PAPER_ID}.txt")
SIDEBAR_PATH = os.path.join(DOCS_DIR, "_sidebar.md")


def extract_text(pdf_path: str) -> str:
    """使用 PyMuPDF 从 PDF 中抽取纯文本，按页拼接。"""
    doc = fitz.open(pdf_path)
    texts = []
    try:
        for page in doc:
            texts.append(page.get_text("text"))
    finally:
        doc.close()
    return "\n\n".join(texts)


def run_demo():
    """最小 demo：用 test.pdf 生成一套 md + txt，并更新侧边栏。"""
    if not os.path.exists(PDF_PATH):
        raise FileNotFoundError(f"找不到 test.pdf：{PDF_PATH}")

    os.makedirs(DOCS_DIR, exist_ok=True)

    # 1. 抽取文本保存为 txt
    text = extract_text(PDF_PATH)
    with open(TXT_PATH, "w", encoding="utf-8") as f:
        f.write(text)

    # 2. 生成简单的 md 页面
    md_content = f"""# Demo Paper (test.pdf)

本页面用于演示：从本地 test.pdf 抽取文本并作为聊天上下文使用。

对应的文本文件：`{PAPER_ID}.txt`

---

（这里是正文区域，可以写摘要、笔记等内容。）
"""
    with open(MD_PATH, "w", encoding="utf-8") as f:
        f.write(md_content)

    # 3. 更新 docs/_sidebar.md，增加一个入口
    entry_line = f"  * [Demo - test.pdf]({PAPER_ID})\n"
    lines = []
    if os.path.exists(SIDEBAR_PATH):
        with open(SIDEBAR_PATH, "r", encoding="utf-8") as f:
            lines = f.readlines()

    # 如果已经存在相同入口就不重复添加
    if entry_line not in lines:
        # 尝试插在 “Daily Papers” 之后，否则直接追加
        insert_idx = -1
        for i, line in enumerate(lines):
            if "Daily Papers" in line:
                insert_idx = i + 1
                break

        if insert_idx != -1:
            lines.insert(insert_idx, entry_line)
        else:
            if not lines or not lines[-1].endswith("\n"):
                lines.append("\n")
            lines.append(entry_line)

        with open(SIDEBAR_PATH, "w", encoding="utf-8") as f:
            f.writelines(lines)

    print(f"Demo 生成完成：")
    print(f"- MD:  {MD_PATH}")
    print(f"- TXT: {TXT_PATH}")
    print(f"- Sidebar 更新: {SIDEBAR_PATH}")


if __name__ == "__main__":
    run_demo()
