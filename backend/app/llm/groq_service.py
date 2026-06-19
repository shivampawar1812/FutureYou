import os

from groq import Groq

from dotenv import load_dotenv

load_dotenv()

class GroqService:

    def __init__(self):

        self.client = Groq(
            api_key=os.getenv(
                "GROQ_API_KEY"
            )
        )

        self.model = (
            "llama-3.3-70b-versatile"
        )

    def generate(
        self,
        system_prompt: str,
        user_prompt: str
    ) -> str:
        response = self.client.chat.completions.create(
            model=self.model,

            messages=[
                {
                    "role": "system",
                    "content": system_prompt
                },
                {
                    "role": "user",
                    "content": user_prompt
                }
            ]
        )

        return response.choices[0].message.content
