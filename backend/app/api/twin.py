from fastapi import APIRouter

from app.schemas.profile import (
    FinancialProfile
)

from app.digital_twin.engine import (
    generate_financial_twin
)

router = APIRouter()

@router.post("/twin")
def create_twin(
    profile: FinancialProfile
):
    return generate_financial_twin(profile)
