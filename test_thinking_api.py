#!/usr/bin/env python
"""
简单测试：调用柏拉图网关（OpenAI 兼容接口），检查是否返回思考过程。

使用方法：
1. 在终端导出你的 API Key（你给的那串）：
   export PLATO_API_KEY="sk-xxxx"
2. 在项目根目录运行：
   python test_thinking_api.py

脚本会打印：
- 模型名称
- 是否包含 reasoning_content / thinking 字段
"""
import os

from openai import OpenAI


def main() -> None:
  api_key = os.getenv("PLATO_API_KEY")
  if not api_key:
    raise SystemExit("请先设置环境变量 PLATO_API_KEY 再运行本脚本。")

  # 根据你当前配置的网关与模型名称调整
  base_url = "https://api.bltcy.ai/v1"
  # 支持通过环境变量 PLATO_MODEL 切换不同模型，默认测试 Flash 思考版
  model = os.getenv(
    "PLATO_MODEL",
    "gemini-3-flash-preview-thinking-1000",
  )

  client = OpenAI(api_key=api_key, base_url=base_url)

  messages = [
    {
      "role": "system",
      "content": "你是一名调试助手，用中文简要回答问题即可。",
    },
    {
      "role": "user",
      "content": "请用一句话解释一下什么是注意力机制（attention），顺便展示一下你的思考过程。",
    },
  ]

  print(f"调用模型: {model}")
  resp = client.chat.completions.create(
    model=model,
    messages=messages,
    # 按 DeepSeek / 一些思考模型的约定，显式要求返回 reasoning
    extra_body={"return_reasoning": True},
  )

  choice = resp.choices[0]
  msg = choice.message

  reasoning = getattr(msg, "reasoning_content", None) or getattr(
    msg, "thinking", None
  )
  content = msg.content

  print("\n=== 思考过程 (reasoning / thinking) ===")
  if reasoning:
    print(reasoning)
  else:
    print("未返回 reasoning_content/thinking 字段。")

  print("\n=== 最终回答 content ===")
  print(content)


if __name__ == "__main__":
  main()
