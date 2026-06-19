from fastapi import APIRouter

from app.schemas.profile import FinancialProfile

from app.digital_twin.engine import (
    generate_financial_twin
)

from app.next_move.engine import (
    generate_next_move
)

from app.engagement.service import (
    EngagementService
)

router = APIRouter()

@router.post("/engagement")
def generate_engagement(
    profile: FinancialProfile
):
    twin = generate_financial_twin(
        profile
    )

    next_move = generate_next_move(
        profile,
        twin
    )

    service = EngagementService()

    message = (
        service.generate_engagement_message(
            next_move
        )
    )

    return {
        "next_move": next_move,
        "message": message
    }