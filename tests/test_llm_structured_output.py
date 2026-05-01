import sys
import unittest
from pathlib import Path
from unittest.mock import MagicMock, patch

import requests


ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "src"))

from llm import LLMClient


class LlmStructuredOutputTest(unittest.TestCase):
    def _mock_success_response(self, message: dict):
        resp = MagicMock()
        resp.raise_for_status.return_value = None
        resp.json.return_value = {
            "choices": [
                {
                    "message": message,
                    "finish_reason": "stop",
                }
            ],
            "usage": {
                "prompt_tokens": 1,
                "completion_tokens": 1,
                "total_tokens": 2,
            },
        }
        return resp

    def _mock_http_error_response(self, text: str, status_code: int = 400):
        resp = MagicMock()
        resp.status_code = status_code
        resp.text = text
        resp.raise_for_status.side_effect = requests.exceptions.HTTPError(
            f"HTTP {status_code}",
            response=resp,
        )
        return resp

    @patch("llm.requests.post")
    def test_chat_structured_falls_back_to_json_object(self, mock_post):
        mock_post.side_effect = [
            self._mock_http_error_response(
                '{"error":{"message":"response_format json_schema is not supported"}}'
            ),
            self._mock_success_response({"content": '{"answer":"ok"}'}),
        ]
        client = LLMClient(
            api_key="test-key",
            model="gpt-4.1-mini",
            base_url="https://api.openai.com/v1",
        )

        result = client.chat_structured(
            messages=[{"role": "user", "content": "hello"}],
            schema_name="answer_payload",
            schema={
                "type": "object",
                "properties": {"answer": {"type": "string"}},
                "required": ["answer"],
                "additionalProperties": False,
            },
        )

        self.assertEqual(result["response_format_used"], "json_object")
        self.assertEqual(result["parsed"], {"answer": "ok"})
        self.assertEqual(
            [call.kwargs["json"]["response_format"]["type"] for call in mock_post.call_args_list],
            ["json_schema", "json_object"],
        )

    @patch("llm.requests.post")
    def test_chat_structured_prefers_json_schema_for_official_openai(self, mock_post):
        mock_post.return_value = self._mock_success_response({"content": '{"answer":"ok"}'})
        client = LLMClient(
            api_key="test-key",
            model="gpt-4.1-mini",
            base_url="https://api.openai.com/v1",
        )

        result = client.chat_structured(
            messages=[{"role": "user", "content": "hello"}],
            schema_name="answer_payload",
            schema={
                "type": "object",
                "properties": {"answer": {"type": "string"}},
                "required": ["answer"],
                "additionalProperties": False,
            },
        )

        self.assertEqual(result["response_format_used"], "json_schema")
        self.assertEqual(result["parsed"], {"answer": "ok"})
        self.assertEqual(
            mock_post.call_args.kwargs["json"]["response_format"]["type"],
            "json_schema",
        )

    @patch("llm.requests.post")
    def test_chat_structured_prefers_json_object_for_deepseek(self, mock_post):
        mock_post.return_value = self._mock_success_response({"content": '{"answer":"ok"}'})
        client = LLMClient(
            api_key="test-key",
            model="deepseek-chat",
            base_url="https://api.deepseek.com",
        )

        result = client.chat_structured(
            messages=[{"role": "user", "content": "hello"}],
            schema_name="answer_payload",
            schema={
                "type": "object",
                "properties": {"answer": {"type": "string"}},
                "required": ["answer"],
                "additionalProperties": False,
            },
        )

        self.assertEqual(result["response_format_used"], "json_object")
        self.assertEqual(result["parsed"], {"answer": "ok"})
        self.assertEqual(
            [call.kwargs["json"]["response_format"]["type"] for call in mock_post.call_args_list],
            ["json_object"],
        )

    @patch("llm.requests.post")
    def test_chat_structured_prefers_json_object_for_generic_compatible_base(self, mock_post):
        mock_post.return_value = self._mock_success_response({"content": '{"answer":"ok"}'})
        client = LLMClient(
            api_key="test-key",
            model="GLM-4.7",
            base_url="https://open.bigmodel.cn/api/coding/paas/v4",
        )

        result = client.chat_structured(
            messages=[{"role": "user", "content": "hello"}],
            schema_name="answer_payload",
            schema={
                "type": "object",
                "properties": {"answer": {"type": "string"}},
                "required": ["answer"],
                "additionalProperties": False,
            },
        )

        self.assertEqual(result["response_format_used"], "json_object")
        self.assertEqual(result["parsed"], {"answer": "ok"})
        self.assertEqual(
            mock_post.call_args.kwargs["json"]["response_format"]["type"],
            "json_object",
        )

    @patch("llm.requests.post")
    def test_chat_structured_prefers_json_schema_for_kimi(self, mock_post):
        mock_post.return_value = self._mock_success_response({"content": '{"answer":"ok"}'})
        client = LLMClient(
            api_key="test-key",
            model="kimi-k2.5",
            base_url="https://api.moonshot.ai/v1",
        )

        result = client.chat_structured(
            messages=[{"role": "user", "content": "return JSON"}],
            schema_name="answer_payload",
            schema={
                "type": "object",
                "properties": {"answer": {"type": "string"}},
                "required": ["answer"],
                "additionalProperties": False,
            },
        )

        self.assertEqual(result["response_format_used"], "json_schema")
        self.assertEqual(
            mock_post.call_args.kwargs["json"]["response_format"]["type"],
            "json_schema",
        )

    @patch("llm.requests.post")
    def test_chat_structured_uses_prompt_only_for_minimax(self, mock_post):
        mock_post.return_value = self._mock_success_response({"content": '{"answer":"ok"}'})
        client = LLMClient(
            api_key="test-key",
            model="MiniMax-M2.5",
            base_url="https://api.minimaxi.com/v1",
        )

        result = client.chat_structured(
            messages=[{"role": "user", "content": "hello"}],
            schema_name="answer_payload",
            schema={
                "type": "object",
                "properties": {"answer": {"type": "string"}},
                "required": ["answer"],
                "additionalProperties": False,
            },
        )

        self.assertEqual(result["response_format_used"], "prompt_only")
        self.assertNotIn("response_format", mock_post.call_args.kwargs["json"])
        self.assertIn("JSON", mock_post.call_args.kwargs["json"]["messages"][0]["content"])

    @patch("llm.requests.post")
    def test_chat_structured_falls_back_to_prompt_only_when_json_object_unsupported(self, mock_post):
        mock_post.side_effect = [
            self._mock_http_error_response(
                '{"error":{"message":"response_format json_object is not supported"}}'
            ),
            self._mock_success_response({"content": '{"answer":"ok"}'}),
        ]
        client = LLMClient(
            api_key="test-key",
            model="GLM-4.7",
            base_url="https://open.bigmodel.cn/api/coding/paas/v4",
        )

        result = client.chat_structured(
            messages=[{"role": "user", "content": "hello"}],
            schema_name="answer_payload",
            schema={
                "type": "object",
                "properties": {"answer": {"type": "string"}},
                "required": ["answer"],
                "additionalProperties": False,
            },
        )

        self.assertEqual(result["response_format_used"], "prompt_only")
        self.assertEqual(
            [call.kwargs["json"].get("response_format", {}).get("type") for call in mock_post.call_args_list],
            ["json_object", None],
        )

    @patch("llm.requests.post")
    def test_chat_structured_validates_schema_locally_and_falls_back(self, mock_post):
        mock_post.side_effect = [
            self._mock_success_response({"content": '{"answer":"ok","extra":1}'}),
            self._mock_success_response({"content": '{"answer":"ok"}'}),
        ]
        client = LLMClient(
            api_key="test-key",
            model="GLM-4.7",
            base_url="https://open.bigmodel.cn/api/coding/paas/v4",
        )

        result = client.chat_structured(
            messages=[{"role": "user", "content": "return JSON"}],
            schema_name="answer_payload",
            schema={
                "type": "object",
                "properties": {"answer": {"type": "string"}},
                "required": ["answer"],
                "additionalProperties": False,
            },
        )

        self.assertEqual(result["response_format_used"], "prompt_only")
        self.assertEqual(result["parsed"], {"answer": "ok"})

    @patch("llm.requests.post")
    def test_chat_structured_returns_refusal(self, mock_post):
        mock_post.return_value = self._mock_success_response(
            {"refusal": "I'm sorry, I cannot assist with that request."}
        )
        client = LLMClient(
            api_key="test-key",
            model="gpt-4.1-mini",
            base_url="https://api.openai.com/v1",
        )

        result = client.chat_structured(
            messages=[{"role": "user", "content": "hello"}],
            schema_name="answer_payload",
            schema={
                "type": "object",
                "properties": {"answer": {"type": "string"}},
                "required": ["answer"],
                "additionalProperties": False,
            },
        )

        self.assertEqual(
            result["refusal"],
            "I'm sorry, I cannot assist with that request.",
        )
        self.assertIsNone(result["parsed"])
        self.assertIsNone(result["parse_error"])


if __name__ == "__main__":
    unittest.main()
