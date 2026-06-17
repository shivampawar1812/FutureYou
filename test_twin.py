from app.digital_twin.engine import generate_financial_twin
from test_profile import profile

twin = generate_financial_twin(profile)

print(twin)