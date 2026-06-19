from pydantic import BaseModel


class HomePurchaseResult(BaseModel):

    loan_amount: float

    monthly_emi: float

    debt_to_income_after_purchase: float

    emergency_fund_after_down_payment: float

    emergency_fund_months_after_purchase: float

    monthly_surplus_after_purchase: float

    affordability_score_after_purchase: float

    recommendation: str