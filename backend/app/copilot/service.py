from app.copilot.schemas import CopilotResponse

from app.schemas.profile import FinancialProfile

from app.schemas.simulation import (
    HomePurchaseResult
)

class FutureYouCopilot:

    def explain_home_purchase(
        self,
        profile: FinancialProfile,
        result: HomePurchaseResult
    ) -> CopilotResponse:
        financial_summary = (
            f"Purchasing this property would "
            f"result in a monthly EMI of "
            f"₹{result.monthly_emi:,.0f}. "
            f"Your debt-to-income ratio "
            f"would become "
            f"{result.debt_to_income_after_purchase * 100:.1f}%."
        )
        
        key_risks = []


        if result.debt_to_income_after_purchase >= 0.40:

            key_risks.append(
                "A large portion of your income "
                "would be committed to loan repayments."
            )

        if (
            result.emergency_fund_months_after_purchase
            < 6
        ):
            key_risks.append(
                "Emergency savings fall below "
                "the recommended 6-month threshold."
            )

        if (
            result.affordability_score_after_purchase
            < 50
        ):
            key_risks.append(
                "The purchase significantly "
                "reduces financial flexibility."
            )

        if (
            result.monthly_surplus_after_purchase
            < 0
        ):
            key_risks.append(
                "Your monthly cash flow becomes negative after the purchase."
            )

        recommendations = []

        if (
            result.emergency_fund_months_after_purchase
            < 6
        ):
            recommendations.append(
                "Build a stronger emergency fund "
                "before purchasing."
            )


        if (
            result.debt_to_income_after_purchase
            >= 0.40
        ):
            recommendations.append(
                "Consider increasing the "
                "down payment to reduce EMI."
            )

        if (
            result.affordability_score_after_purchase
            < 60
        ):
            recommendations.append(
                "Consider a lower-priced property "
                "or delay the purchase."
            )

        recommendations.append(
            "Increase income, reduce expenses, or choose a lower EMI before proceeding."
        )

        confidence_score = 95.0

        return CopilotResponse(
            explanation=result.recommendation,

            financial_summary=
                financial_summary,

            key_risks=key_risks,

            recommendations=
                recommendations,

            confidence_score=
                confidence_score
        )
