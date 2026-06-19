from app.schemas.profile import FinancialProfile
from app.schemas.twin import FinancialTwin

from app.next_move.schemas import (
    NextMove
)

def generate_next_move(
    profile: FinancialProfile,
    twin: FinancialTwin
) -> NextMove:
    
    if twin.emergency_fund_months < 6:

        return NextMove(
            title="Build Emergency Fund",

            reason=(
                "Emergency savings cover "
                "less than 6 months of expenses."
            ),

            action=(
                "Allocate additional monthly "
                "savings until emergency reserves "
                "reach 6 months of expenses."
            ),

            priority="High",

            impact_score=95
        )

    if twin.debt_to_income_ratio > 0.40:

        return NextMove(
            title="Reduce Debt Burden",

            reason=(
                "A significant portion of income "
                "is committed to debt repayment."
            ),

            action=(
                "Avoid additional borrowing and "
                "focus on reducing existing debt."
            ),

            priority="High",

            impact_score=90
        )

    if profile.monthly_sip == 0:
        return NextMove(
            title="Start Investing",

            reason=(
                "Your financial foundation appears healthy."
            ),

            action=(
                "Begin a SIP aligned with your "
                "risk appetite and goals."
            ),

            priority="Medium",

            impact_score=75
        )
    
    profile.primary_goal == "Home Purchase"
    twin.home_purchase_readiness < 80
    return NextMove(
        title="Improve Home Readiness",

        reason=(
            "Current financial readiness is "
            "below the target level."
        ),

        action=(
            "Increase savings and improve "
            "affordability before purchasing."
        ),

        priority="High",

        impact_score=85
    )

    return NextMove(
        title="Maintain Momentum",

        reason=(
            "Current financial indicators "
            "appear healthy."
        ),

        action=(
            "Continue current habits and "
            "review goals quarterly."
        ),

        priority="Low",

        impact_score=50
    )