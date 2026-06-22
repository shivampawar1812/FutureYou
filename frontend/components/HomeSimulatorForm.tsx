"use client";

import { useEffect, useState } from "react";
import { simulateHomePurchase } from "@/services/simulator";


export default function HomePurchaseForm() {
  const [profile, setProfile] = useState<any>(null);

  const [formData, setFormData] = useState({
    house_price: "",
    down_payment: "",
    tenure_years: "",
    interest_rate: "",
  });

  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("financialProfile");

    if (stored) {
      setProfile(JSON.parse(stored));
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      if (!profile) {
        alert(
          "Please create your Financial Twin first."
        );
        return;
      }

      const payload = {
        profile,

        scenario: {
          house_price: Number(
            formData.house_price
          ),

          down_payment: Number(
            formData.down_payment
          ),

          tenure_years: Number(
            formData.tenure_years
          ),

          interest_rate: Number(
            formData.interest_rate
          ),
        },
      };

      console.log(payload);

      const response =
        await simulateHomePurchase(payload);

      setResult(response);
    } catch (error: any) {
      console.log("FULL ERROR:", error);

      console.log(
        "BACKEND RESPONSE:",
        error?.response?.data
      );

      alert(
        JSON.stringify(
          error?.response?.data,
          null,
          2
        )
      );
    }finally {
      setLoading(false);
    }
  };

  return (
    <div>

      {/* Financial Twin Summary */}

      {profile && (
        <div
          className="
            mb-8
            rounded-3xl
            border
            border-[#02B6EF]/80
            bg-white/[0.02]
            p-6
            mx-auto
            max-w-7xl
          "
        > 
          <div className="text-center">
          <h3 className="mb-6 text-2xl font-bold">
            Current Financial Twin
          </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-4 text-center">
            <div>
              <p className="text-zinc-500">
                Monthly Income
              </p>
              <p className="text-xl font-semibold">
                ₹
                {profile.monthly_income?.toLocaleString()}
              </p>
            </div>

            <div>
              <p className="text-zinc-500">
                Monthly Expenses
              </p>
              <p className="text-xl font-semibold">
                ₹
                {profile.monthly_expenses?.toLocaleString()}
              </p>
            </div>

            <div>
              <p className="text-zinc-500">
                Savings
              </p>
              <p className="text-xl font-semibold">
                ₹
                {profile.savings?.toLocaleString()}
              </p>
            </div>

            <div>
              <p className="text-zinc-500">
                Risk Profile
              </p>
              <p className="text-xl font-semibold text-[#02B6EF]">
                {profile.risk_appetite}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Simulator Form */}

      <form
        onSubmit={handleSubmit}
        className="
          rounded-3xl
          border
          border-[#02B6EF]/80
          bg-white/[0.02]
          p-8
          mx-auto
          max-w-7xl
        "
      >
        <div className="mb-3 text-center">
          <h2 className="text-4xl font-bold">
            House Purchase Simulator
          </h2>

          <p className="mt-3 text-zinc-400">
            Test whether your dream home fits
            your financial future.
          </p>
        </div>

        <div className="grid mx-8 gap-4 md:grid-cols-2">

          <div>
            <label className="mb-2 block">
              House Price (₹)
            </label>

            <input
              type="number"
              name="house_price"
              value={formData.house_price}
              onChange={handleChange}
              placeholder=""
              className="
                w-full
                rounded-xl
                border
                border-[#02B6EF]/40
                bg-black
                px-4
                py-3
                outline-none
                focus:border-[#02B6EF]
              "
            />
          </div>

          <div>
            <label className="mb-2 block">
              Down Payment (₹)
            </label>

            <input
              type="number"
              name="down_payment"
              value={formData.down_payment}
              onChange={handleChange}
              placeholder=""
              className="
                w-full
                rounded-xl
                border
                border-[#02B6EF]/40
                bg-black
                px-4
                py-3
                outline-none
                focus:border-[#02B6EF]
              "
            />
          </div>

          <div>
            <label className="mb-2 block">
              Loan Tenure (Years)
            </label>

            <input
              type="number"
              name="tenure_years"
              value={formData.tenure_years}
              onChange={handleChange}
              className="
                w-full
                rounded-xl
                border
                border-[#02B6EF]/40
                bg-black
                px-4
                py-3
                outline-none
                focus:border-[#02B6EF]
              "
            />
          </div>

          <div>
            <label className="mb-2 block">
              Interest Rate (%)
            </label>

            <input
              type="number"
              step="0.1"
              name="interest_rate"
              value={formData.interest_rate}
              onChange={handleChange}
              className="
                w-full
                rounded-xl
                border
                border-[#02B6EF]/40
                bg-black
                px-4
                py-3
                outline-none
                focus:border-[#02B6EF]
              "
            />
          </div>

        </div>

        <button
          type="submit"
          disabled={loading}
          className="
            mt-4
            w-full
            rounded-2xl
            bg-[#02B6EF]
            py-3
            text-lg
            font-semibold
            text-black
            transition
            hover:scale-[1.01]
          "
        >
          {loading
            ? "Running Simulation..."
            : "Run Simulation"}
        </button>
      </form>

      {/* Results */}

      {result && (
        <div
          className="
            mt-10
            rounded-3xl
            border
            border-[#02B6EF]/40
            bg-white/[0.06]
            p-8
            mx-auto
            max-w-3xl
          "
        >
          <h2 className="text-3xl text-center font-bold">
            Simulation Results
          </h2>

          <div className="mt-8 text-center grid gap-6 md:grid-cols-2">

            <div>
              <p className="text-zinc-400">
                Monthly EMI
              </p>

              <h3 className="text-3xl font-bold">
                ₹
                {result.monthly_emi?.toLocaleString()}
              </h3>
            </div>

            <div>
              <p className="text-zinc-400">
                Debt-To-Income Ratio
              </p>

              <h3 className="text-3xl font-bold">
                {(
                  result.debt_to_income_after_purchase *
                  100
                ).toFixed(0)}
                %
              </h3>
            </div>
          </div>

          <div className="mt-8 text-center grid gap-6">
            <div>
              <p className="text-zinc-400">
                Emergency Fund
              </p>

              <h3 className="text-2xl font-bold">
                {result.emergency_fund_months_after_purchase?.toFixed(
                  1
                )}{" "}
                Months
              </h3>
            </div>
          </div>

          <div
            className="
              mt-8
              rounded-2xl
              border
              border-[#02B6EF]/100
              p-6
              mx-auto
              max-w-xl
              bg-white/[0.1]
            "
          >
            <h3 className="text-xl text-center font-bold">
              Recommendation
            </h3>

            <p className="mt-3 text-center text-xl text-[#02B6EF] font-semibold">
              {result.recommendation}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}