import unittest

from src.model_loader import RemoteSentenceTransformer


class RemoteEmbeddingInputTest(unittest.TestCase):
    def test_prepare_texts_normalizes_and_limits_remote_payload(self):
        model = RemoteSentenceTransformer(
            model_name="BAAI/bge-small-en-v1.5",
            endpoint="https://zwwen.online/embed",
            max_text_chars=8000,
        )
        prepared = model.prepare_texts(["  passage: Title: Example\n\nAbstract: " + "x" * 9000])
        self.assertEqual(len(prepared), 1)
        self.assertEqual(len(prepared[0]), 8000)
        self.assertTrue(prepared[0].startswith("passage: Title: Example Abstract:"))

    def test_prepare_texts_rejects_empty_content(self):
        model = RemoteSentenceTransformer(
            model_name="BAAI/bge-small-en-v1.5",
            endpoint="https://zwwen.online/embed",
            max_text_chars=8000,
        )
        with self.assertRaisesRegex(ValueError, "不能为空"):
            model.prepare_texts([" \n\t "])


if __name__ == "__main__":
    unittest.main()
