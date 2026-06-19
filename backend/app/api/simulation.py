from fastapi import APIRouter

from app.schemas.profile import FinancialProfile
from app.schemas.home_purchase import HomePurchaseScenario

from app.simulator.home_purchase import (
    simulate_home_purchase
)

from pydantic import BaseModel

class HomePurchaseRequest(BaseModel):
    profile: FinancialProfile
    scenario: HomePurchaseScenario


router = APIRouter()

@router.post("/simulate/home-purchase")
def simulate_purchase(
    request: HomePurchaseRequest
):
    return simulate_home_purchase(
        profile=request.profile,
        scenario=request.scenario
    )