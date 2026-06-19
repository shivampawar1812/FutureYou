from fastapi import APIRouter

from app.schemas.profile import (
    FinancialProfile
)

from app.digital_twin.engine import (
    generate_financial_twin
)

from app.next_move.engine import (
    generate_next_move
)

router = APIRouter()

@router.post("/next-move")
def next_move(
    profile: FinancialProfile
):

    twin = generate_financial_twin(
        profile
    )

    return generate_next_move(
        profile,
        twin
    )