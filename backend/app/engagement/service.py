from app.llm.groq_service import GroqService

from app.next_move.schemas import (NextMove)

class EngagementService:

    def __init__(self):
        self.llm = GroqService()

    def generate_engagement_message(
        self,
        next_move: NextMove
    ) -> str:
        prompt = f"""
        Next Financial Move:
        {next_move.title}

        Reason:
        {next_move.reason}

        Recommended Action:
        {next_move.action}

        Create a proactive financial coaching
        message.

        Requirements:
        - Friendly
        - Professional
        - Under 120 words
        - Encourage action
        - Do not change the recommendation
        """
        return self.llm.generate(
            system_prompt=
                "You are FutureYou, an AI financial coach.",

            user_prompt=prompt
        )
    