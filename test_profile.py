from app.schemas.profile import FinancialProfile

profile = FinancialProfile(
    age=28,
    monthly_income=90000,
    monthly_expenses=55000,
    savings=800000,
    risk_appetite="High",
    employment_type="Salaried"
)

print(profile)