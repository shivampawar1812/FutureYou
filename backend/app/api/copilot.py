from pydantic import BaseModel

from app.schemas.profile import FinancialProfile
from app.schemas.home_purchase import HomePurchaseScenario


from fastapi import APIRouter

from app.simulator.home_purchase import (
    simulate_home_purchase
)

from app.copilot.service import (
    FutureYouCopilot
)


class CopilotRequest(BaseModel):
    profile: FinancialProfile
    scenario: HomePurchaseScenario


router = APIRouter()



@router.post("/copilot/explain")

def explain_home_purchase(
    request: CopilotRequest
):
    simulation_result = (
        simulate_home_purchase(
            profile=request.profile,
            scenario=request.scenario
        )
    )
        
    copilot = FutureYouCopilot()

    response = (
        copilot.explain_home_purchase(
                profile=request.profile,
                result=simulation_result
            )
        )

    return response