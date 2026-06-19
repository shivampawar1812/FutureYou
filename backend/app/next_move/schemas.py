from pydantic import BaseModel
from typing import Literal


class NextMove(BaseModel):
    title: str

    reason: str

    action: str

    priority: Literal[
        "Low",
        "Medium",
        "High"
    ]

    impact_score: float