from pydantic import BaseModel
from typing import Literal, Optional

class FinancialProfile(BaseModel):
    # Personal Details
    age: int
    retirement_age: int = 60

    # Income
    monthly_income: float
    annual_income_growth_rate: float = 5.0

    # Expenses
    monthly_expenses: float
    annual_expense_growth_rate: float = 6.0

    # Assets
    savings: float
    investments: float = 0.0

    # Liabilities
    existing_loan_outstanding: float = 0.0
    monthly_emi: float = 0.0

    # Investments
    monthly_sip: float = 0.0

    risk_appetite:  Literal[
        "Low",
        "Moderate",
        "High"
    ]

    employment_type: Literal[
        "Salaried",
        "Self-Employed",
        "Business"
    ]

    dependents: int = 0

    owns_home: bool = False

    primary_goal: Literal[
        "Home Purchase",
        "Retirement",
        "Education",
        "Wealth Creation",
        "Emergency Fund",
        "Other"
    ] = "Home Purchase"

    goal_years: Optional[int] = None