from math import pow
from app.schemas.profile import FinancialProfile
from app.schemas.home_purchase import HomePurchaseScenario
from app.schemas.simulation import HomePurchaseResult

from app.digital_twin.engine import (
    calculate_affordability_score
)


def calculate_emi(
    loan_amount: float,
    annual_interest_rate: float,
    tenure_years: int
) -> float:

    monthly_rate = annual_interest_rate / 100 / 12

    total_payments = tenure_years * 12

    emi = (
        loan_amount
        * monthly_rate
        * pow(1 + monthly_rate, total_payments)
    ) / (
        pow(1 + monthly_rate, total_payments) - 1
    )

    return round(emi, 2)


def simulate_home_purchase(
    profile: FinancialProfile,
    scenario: HomePurchaseScenario
) -> HomePurchaseResult:
    if scenario.down_payment > profile.savings:
        raise ValueError(
            "Down payment exceeds available savings."
        )
    loan_amount = (
        scenario.house_price
        - scenario.down_payment
    )

    monthly_emi = calculate_emi(
        loan_amount=loan_amount,
        annual_interest_rate=scenario.interest_rate,
        tenure_years=scenario.tenure_years
    )

    total_emi_after_purchase = (
        profile.monthly_emi
        + monthly_emi
    )

    if profile.monthly_income <= 0:
        debt_to_income_after_purchase = 1.0
    else:
        debt_to_income_after_purchase = (
            total_emi_after_purchase
            / profile.monthly_income
        )

    remaining_savings = (
        profile.savings
        - scenario.down_payment
    )
        
    emergency_fund_months_after_purchase = (
        remaining_savings
        / profile.monthly_expenses
    )

    monthly_surplus_after_purchase = (
        profile.monthly_income
        - profile.monthly_expenses
        - total_emi_after_purchase
        - profile.monthly_sip
    )

    if profile.monthly_income <= 0:
        savings_rate_after_purchase = 0.0
    else:
        savings_rate_after_purchase = (
            monthly_surplus_after_purchase
            / profile.monthly_income
        )

    affordability_score_after_purchase = (
        calculate_affordability_score(
            dti=debt_to_income_after_purchase,
            emergency_fund_months=
                emergency_fund_months_after_purchase,
            savings_rate=savings_rate_after_purchase,
            dependents=profile.dependents,
            employment_type=profile.employment_type
        )
    )

    
    if monthly_surplus_after_purchase < 0:
        recommendation = (
            "Delay purchase. Monthly cash flow becomes negative."
        )
    

    elif emergency_fund_months_after_purchase < 6:

        recommendation = (
            "Delay purchase and strengthen emergency savings."
        )

    elif affordability_score_after_purchase >= 80:

        recommendation = "Proceed"

    elif affordability_score_after_purchase >= 60:

        recommendation = "Proceed with caution"

    else:

        recommendation = "Delay purchase"

    
    return HomePurchaseResult(
        loan_amount=round(
            loan_amount,
            2
        ),

        monthly_emi=round(
            monthly_emi,
            2
        ),

        debt_to_income_after_purchase=round(
            debt_to_income_after_purchase,
            2
        ),

        emergency_fund_after_down_payment=round(
            remaining_savings,
            2
        ),

        emergency_fund_months_after_purchase=round(
            emergency_fund_months_after_purchase,
            2
        ),

        affordability_score_after_purchase=round(
            affordability_score_after_purchase,
            2
        ),

        recommendation=recommendation
    )