"use client";

import { useState } from "react";

export default function FinancialTwinForm() {
  const [formData, setFormData] = useState({
    age: "",
    monthly_income: "",
    monthly_expenses: "",
    savings: "",
    monthly_sip: "",
    dependents: "",
    risk_appetite: "Moderate",
    employment_type: "Salaried",
    primary_goal: "Wealth Creation",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    console.log(formData);

    // TODO:
    // Send data to backend
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      {/* Personal Details */}
      <div
        className="
          rounded-3xl
          border
          border-[#00559a]/30
          bg-white/[0.02]
          p-8
          max-w-7xl
          mx-auto
        "
      >
        <h2 className="mb-4 text-center text-3xl font-bold z-100">
          Personal Details
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <label className="mb-1 block text-zinc-100">
              Age
            </label>

            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="
                w-full
                rounded-xl
                border
                border-zinc-800
                bg-black
                px-4
                py-3
                outline-none
                focus:border-[#02B6EF]
              "
            />
          </div>

          <div>
            <label className="mb-1 block text-zinc-100">
              Dependents
            </label>

            <input
              type="number"
              name="dependents"
              value={formData.dependents}
              onChange={handleChange}
              className="
                w-full
                rounded-xl
                border
                border-zinc-800
                bg-black
                px-4
                py-3
                outline-none
                focus:border-[#02B6EF]
              "
            />
          </div>

          <div>
            <label className="mb-1 block text-zinc-100">
              Employment Type
            </label>

            <select
              name="employment_type"
              value={formData.employment_type}
              onChange={handleChange}
              className="
                w-full
                rounded-xl
                border
                border-zinc-800
                bg-black
                px-4
                py-3
              "
            >
              <option>Salaried</option>
              <option>Self Employed</option>
              <option>Business Owner</option>
            </select>
          </div>
        </div>
      </div>

      {/* Financial Information */}
      <div
        className="
          rounded-3xl
          border
          border-[#02B6EF]/10
          bg-white/[0.02]
          p-8
          max-w-7xl
          mx-auto
        "
      >
        <h2 className="mb-4 text-center text-3xl font-bold z-100">
          Financial Information
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <label className="mb-2 block text-zinc-100">
              Monthly Income
            </label>

            <input
              type="number"
              name="monthly_income"
              value={formData.monthly_income}
              onChange={handleChange}
              className="
                w-full
                rounded-xl
                border
                border-zinc-800
                bg-black
                px-4
                py-3
                outline-none
                focus:border-[#02B6EF]
              "
            />
          </div>

          <div>
            <label className="mb-2 block text-zinc-100">
              Monthly Expenses
            </label>

            <input
              type="number"
              name="monthly_expenses"
              value={formData.monthly_expenses}
              onChange={handleChange}
              className="
                w-full
                rounded-xl
                border
                border-zinc-800
                bg-black
                px-4
                py-3
                outline-none
                focus:border-[#02B6EF]
              "
            />
          </div>

          <div>
            <label className="mb-2 block text-zinc-100">
              Savings
            </label>

            <input
              type="number"
              name="savings"
              value={formData.savings}
              onChange={handleChange}
              className="
                w-full
                rounded-xl
                border
                border-zinc-800
                bg-black
                px-4
                py-3
                outline-none
                focus:border-[#02B6EF]
              "
            />
          </div>

          <div>
            <label className="mb-2 block text-zinc-100">
              Monthly SIP
            </label>

            <input
              type="number"
              name="monthly_sip"
              value={formData.monthly_sip}
              onChange={handleChange}
              className="
                w-full
                rounded-xl
                border
                border-zinc-800
                bg-black
                px-4
                py-3
                outline-none
                focus:border-[#02B6EF]
              "
            />
          </div>

          <div>
            <label className="mb-2 block text-zinc-100">
              Risk Appetite
            </label>

            <select
              name="risk_appetite"
              value={formData.risk_appetite}
              onChange={handleChange}
              className="
                w-full
                rounded-xl
                border
                border-zinc-800
                bg-black
                px-4
                py-3
              "
            >
              <option>Low</option>
              <option>Moderate</option>
              <option>High</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-zinc-100">
              Primary Goal
            </label>

            <select
              name="primary_goal"
              value={formData.primary_goal}
              onChange={handleChange}
              className="
                w-full
                rounded-xl
                border
                border-zinc-800
                bg-black
                px-4
                py-3
              "
            >
              <option>Home Purchase</option>
              <option>Wealth Creation</option>
              <option>Retirement</option>
              <option>Emergency Planning</option>
            </select>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="
            rounded-2xl
            bg-[#02B6EF]
            px-10
            py-4
            font-semibold
            text-black
            transition
            hover:scale-105
          "
        >
          Generate Financial Twin
        </button>
      </div>
    </form>
  );
}