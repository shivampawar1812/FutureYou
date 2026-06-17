from pydantic import BaseModel


class HomePurchaseScenario(BaseModel):
    house_price: float

    down_payment: float

    interest_rate: float

    tenure_years: int