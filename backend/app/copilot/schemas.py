from pydantic import BaseModel


class CopilotResponse(BaseModel):
    explanation: str

    financial_summary: str

    key_risks: list[str]

    recommendations: list[str]

    confidence_score: float