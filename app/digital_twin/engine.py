from app.schemas.profile import FinancialProfile
from app.schemas.twin import FinancialTwin



def calculate_monthly_surplus(
    income: float,
    expenses: float,
    emi: float,
    sip: float
) -> float:
    return income - expenses - emi - sip


def calculate_savings_rate(
    monthly_surplus: float,
    monthly_income: float
) -> float:

    if monthly_income <= 0:
        return 0.0

    return monthly_surplus / monthly_income


def calculate_dti(
    monthly_emi: float,
    monthly_income: float
) -> float:

    if monthly_income <= 0:
        return 1.0

    return monthly_emi / monthly_income


def calculate_emergency_fund_months(
    savings: float,
    monthly_expenses: float
) -> float:

    if monthly_expenses <= 0:
        return 999.0

    return savings / monthly_expenses

def calculate_retirement_years_remaining(
    age: int,
    retirement_age: int
) -> int:

    return max(0, retirement_age - age)

def calculate_affordability_score(
    dti: float,
    emergency_fund_months: float,
    savings_rate: float,
    dependents: int,
    employment_type: str
) -> float:

    score = 100

    if dti > 0.40:
        score -= 30

    if emergency_fund_months < 6:
        score -= 20

    if savings_rate < 0.20:
        score -= 20

    if dependents >= 2:
        score -= 10

    if employment_type == "Self-Employed":
        score -= 10

    return max(0, min(score, 100))


def calculate_financial_health_score(
    savings_rate: float,
    emergency_fund_months: float,
    dti: float
) -> float:

    savings_component = min(savings_rate / 0.30, 1.0) * 40

    emergency_component = min(emergency_fund_months / 6, 1.0) * 40

    debt_component = max(0, (1 - dti)) * 20

    score = (
        savings_component
        + emergency_component
        + debt_component
    )

    return round(min(score, 100), 2)



def calculate_general_home_purchase_readiness(
    affordability_score: float,
    financial_health_score: float,
    emergency_fund_months: float
) -> float:

    emergency_score = min(
        emergency_fund_months / 6,
        1.0
    ) * 100

    readiness = (
        affordability_score * 0.5
        + financial_health_score * 0.3
        + emergency_score * 0.2
    )

    return round(readiness, 2)


def generate_financial_twin(
    profile: FinancialProfile
) -> FinancialTwin:
    monthly_surplus = calculate_monthly_surplus(
        profile.monthly_income,
        profile.monthly_expenses,
        profile.monthly_emi,
        profile.monthly_sip
    )
    savings_rate = calculate_savings_rate(
        monthly_surplus,
        profile.monthly_income
    )

    dti = calculate_dti(
        profile.monthly_emi,
        profile.monthly_income
    )

    emergency_fund_months = (
        calculate_emergency_fund_months(
            profile.savings,
            profile.monthly_expenses
        )
    )

    retirement_years_remaining = (
        calculate_retirement_years_remaining(
            profile.age,
            profile.retirement_age
        )
    )

    affordability_score = (
        calculate_affordability_score(
            dti,
            emergency_fund_months,
            savings_rate,
            profile.dependents,
            profile.employment_type
        )
    )

    financial_health_score = (
        calculate_financial_health_score(
            savings_rate,
            emergency_fund_months,
            dti
        )
    )
        
    general_home_purchase_readiness = (
        calculate_general_home_purchase_readiness(
            affordability_score,
            financial_health_score,
            emergency_fund_months
        )
    )

    return FinancialTwin(
        monthly_surplus=monthly_surplus,
        savings_rate=round(savings_rate, 2),
        debt_to_income_ratio=round(dti, 2),
        emergency_fund_months=round(
            emergency_fund_months,
            2
        ),
        retirement_years_remaining=
            retirement_years_remaining,
        affordability_score=
            affordability_score,
        financial_health_score=
            financial_health_score,
        risk_profile=profile.risk_appetite,
        general_home_purchase_readinesss=
            general_home_purchase_readiness
    )