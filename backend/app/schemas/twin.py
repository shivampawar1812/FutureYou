from pydantic import BaseModel


class FinancialTwin(BaseModel):
    monthly_surplus: float

    savings_rate: float

    debt_to_income_ratio: float

    emergency_fund_months: float

    retirement_years_remaining: int

    general_affordability_score: float 

    financial_health_score: float

    risk_profile: str
