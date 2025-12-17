#!/usr/bin/env python
# /home/ubuntu/daily-paper/scripts/daily_job.py
import datetime
import os
import re

import fitz  # PyMuPDF
import requests

# 配置
DOCS_DIR = os.path.expanduser("~/workplace/daily-paper-reader/docs")
TODAY = datetime.date.today().strftime("%Y-%m-%d")

paper_title = "Attention Is All You Need"
paper_authors = ["Ashish Vaswani", "Noam Shazeer"]  # list
pdf_url = "https://arxiv.org/pdf/1706.03762.pdf"
date = TODAY


def slugify(title: str) -> str:
    """
    将论文标题转换为适合文件名和 URL 的 slug。
    规则：小写、空白转为连字符、移除非字母数字和连字符。
    """
    s = title.strip().lower()
    s = re.sub(r"\s+", "-", s)
    s = re.sub(r"[^a-z0-9\-]+", "", s)
    return s or "paper"


PAPER_ID = f"{TODAY}-{slugify(paper_title)}"
MD_FILE_NAME = f"{PAPER_ID}.md"
MD_FILE_PATH = os.path.join(DOCS_DIR, MD_FILE_NAME)
PDF_FILE_NAME = f"{PAPER_ID}.pdf"
PDF_FILE_PATH = os.path.join(DOCS_DIR, PDF_FILE_NAME)
TXT_FILE_NAME = f"{PAPER_ID}.txt"
TXT_FILE_PATH = os.path.join(DOCS_DIR, TXT_FILE_NAME)


def extract_pdf_text(pdf_path: str) -> str:
    """
    使用 PyMuPDF 从 PDF 中抽取纯文本，并按页面顺序拼接。
    """
    doc = fitz.open(pdf_path)
    texts = []
    try:
        for page in doc:
            # 使用默认布局提取文本，兼顾可读性与鲁棒性
            texts.append(page.get_text("text"))
    finally:
        doc.close()
    return "\n\n".join(texts)


def main():
    os.makedirs(DOCS_DIR, exist_ok=True)

    # 1. 下载 PDF 原文到本地
    resp = requests.get(pdf_url, timeout=60)
    resp.raise_for_status()
    with open(PDF_FILE_PATH, "wb") as f:
        f.write(resp.content)

    # 2. 使用 PyMuPDF 抽取文本内容，保存为 .txt 文件
    pdf_text = extract_pdf_text(PDF_FILE_PATH)
    with open(TXT_FILE_PATH, "w", encoding="utf-8") as f:
        f.write(pdf_text)

    # 3. 生成对应的 Markdown 文件（用于 Docsify 展示）
    title = paper_title
    content = f"""
# {title}

**Authors**: {', '.join(paper_authors)}
**Date**: {date}

[Download PDF]({pdf_url})

---

## Abstract
...
"""
    with open(MD_FILE_PATH, "w", encoding="utf-8") as f:
        f.write(content)
    
    # 4. 更新 _sidebar.md (把新文章插到最前面)
    sidebar_path = os.path.join(DOCS_DIR, "_sidebar.md")
    # Docsify 中的路由 ID 与 PAPER_ID 对应
    new_entry = f"  * [{TODAY} - {paper_title}]({PAPER_ID})\n"
    
    lines = []
    if os.path.exists(sidebar_path):
        with open(sidebar_path, "r", encoding="utf-8") as f:
            lines = f.readlines()
    
    # 找到 "Daily Papers" 这一行，插在它后面
    insert_idx = -1
    for i, line in enumerate(lines):
        if "Daily Papers" in line:
            insert_idx = i + 1
            break
            
    if insert_idx != -1:
        lines.insert(insert_idx, new_entry)
        with open(sidebar_path, "w", encoding="utf-8") as f:
            f.writelines(lines)
    else:
        # 如果没找到，就追加
        with open(sidebar_path, "a", encoding="utf-8") as f:
            f.write("\n* Daily Papers\n" + new_entry)

    print(f"Generated {MD_FILE_NAME}, {PDF_FILE_NAME}, {TXT_FILE_NAME}")


if __name__ == "__main__":
    main()
