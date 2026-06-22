"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {generateEngagement} from "@/services/engagement";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [twin, setTwin] = useState<any>(null);

  const [nextMove, setNextMove] =
    useState<any>(null);

  const [loadingMove, setLoadingMove] =
    useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(
      "financialTwin"
    );

    if (stored) {
      setTwin(JSON.parse(stored));
    }
  }, []);
  if (!twin) {
    return (
      <div
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-black
          text-white
        "
      >
        Loading Financial Twin...
      </div>
    );
  }

  const handleNextMove =
    async () => {

      try {

        setLoadingMove(true);

        const stored =
          localStorage.getItem(
            "financialProfile"
          );

        if (!stored) return;

        const profile =
          JSON.parse(stored);

        const response =
          await generateEngagement(
            profile
          );

        setNextMove(response);

      } catch (error) {

        console.error(error);

      } finally {

        setLoadingMove(false);

      }
  };

return (
  <main className="min-h-screen bg-black text-white">

    <Navbar />

    <div className=" mx-auto max-w-7xl px-6 pt-18 pb-10">
      <div className="flex justify-center">
        <h1
        className="
        text-5xl
        font-bold
        tracking-tight
        "
        >
        Your Financial Twin
        </h1>
      </div>
      
      <div
        className="
          mt-12
          grid
          gap-10
          lg:grid-cols-2
        "
      >
        <div className="pr-5">
        <div
          className="
            flex
            mt-2
            items-center
            justify-center
            min-h-[450px]
          "
        >
          <img
            src="/financial-twin.png"
            alt="Financial Twin"
            className="
              w-full
              max-w-40xl
              object-contain
            "
          />
        </div>
          
        </div>

        <div
          className="
            rounded-3xl
            border
            border-[#02B6EF]/40
            bg-white/[0.02]
            p-5
            px-10
          "
        >
        <p className="text-zinc-400">
          Financial Health Score
        </p>

        <h2
          className="
            mt-2
            text-6xl
            font-bold
            text-[#02B6EF]
          "
        >
          {twin.financial_health_score}
        </h2>

        <div className="my-6 h-px bg-[#02B6EF]/40" />
          <div className="space-y-6">
            <div className="flex justify-between">
              <span className="text-zinc-400">
                Monthly Surplus
              </span>

              <span className="font-semibold">
                ₹{twin.monthly_surplus.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">
                Savings Rate
              </span>

              <span className="font-semibold">
                {(twin.savings_rate * 100).toFixed(0)}%
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">
                Emergency Fund
              </span>

              <span className="font-semibold">
                {twin.emergency_fund_months.toFixed(1)}
                {" "}Months
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">
                Debt to Income Ratio
              </span>

              <span className="font-semibold">
                {twin.debt_to_income_ratio}
              </span>
            </div>
            {/* <div className="flex justify-between">
              <span className="text-zinc-400">
                General Affordability Score
              </span>

              <span className="font-semibold">
                {twin.general_affordability_score}
              </span>
            </div> */}
            <div className="flex justify-between">
              <span className="text-zinc-400">
                Risk Profile
              </span>

              <span className="font-semibold text-[#02B6EF]">
                {twin.risk_profile}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">
                Retirement Horizon
              </span>

              <span className="font-semibold">
                {twin.retirement_years_remaining}
                {" "}Years
              </span>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleNextMove}
        disabled={loadingMove}
        className="
          mt-5
          w-full
          rounded-2xl
          bg-[#02B6EF]
          px-6
          py-4
          font-semibold
          text-black
        "
      >
            {loadingMove
              ? "Analyzing..."
              : "Generate Next Move"}
          </button>
          {
          nextMove && (
            <div
              className="
                mt-8
                rounded-3xl
                border
                border-[#02B6EF]/20
                bg-white/[0.02]
                p-6
                pl-10
              "
            >
              <h3
                className="
                  text-2xl
                  font-bold
                "
              >
                🎯 Your Next Move
              </h3>
              <p
                className="
                  mt-6
                  text-lg
                  text-zinc-300
                "
              >
                {
                  nextMove.next_move.title
                }
              </p>

              <p
                className="
                  mt-4
                  leading-8
                  text-zinc-400
                "
              >
                {
                  nextMove.message
                }
              </p>

                  </div>
                )
              }
    </div>

      <div className="relative mx-auto max-w-8xl px-6 py-1">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#00559a]/60 to-transparent" />
      </div>

    <Footer />
</main>
);
}