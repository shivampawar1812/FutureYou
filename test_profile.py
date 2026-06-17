from app.schemas.profile import FinancialProfile

profile = FinancialProfile(
    age=28,
    monthly_income=90000,
    monthly_expenses=55000,
    savings=800000,
    sip=10000,
    risk_appetite="Moderate",
    employment_type="Salaried"
)

print(profile)