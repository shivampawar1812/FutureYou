"use client";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

export default function HowItWorks() {
  const [selected, setSelected] = useState(0);
  const steps = [
    {
      number: "01",
      title: "Create Fin-Twin",
      description:
        "Tell us about yourself and we build your AI Financial Twin in seconds.",
      details: [
        "Financial Health Analysis",
        "Emergency Fund Assessment",
        "Risk Profile Detection",
        "Goal Identification",
      ],
    },
    {
      number: "02",
      title: "What-If Simulator",
      description:
        "Test major financial decisions before making them and understand the long-term impact.",
      details: [
        "Home Purchase Simulation",
        "Loan Affordability Analysis",
        "Investment Scenarios",
        "Goal Impact Forecasting",
      ],
    },
    {
      number: "03",
      title: "Timeline Agent",
      description:
        "Visualize your financial journey and future milestones through an AI-generated roadmap.",
      details: [
        "Future Wealth Projections",
        "Goal Achievement Timeline",
        "Retirement Readiness Tracking",
        "Financial Milestone Mapping",
      ],
    },
    {
      number: "04",
      title: "Life Event Agent",
      description:
        "Receive proactive guidance for upcoming life events before they become financial challenges.",
      details: [
        "Home Purchase Planning",
        "Marriage Readiness Insights",
        "Child Education Forecasting",
        "Retirement Preparation Alerts",
      ],
    },
  ];

  return (
    <section id="how-it-works" className="relative z-10 mx-auto max-w-8xl px-6">
      <div className="mb-2 text-center">
        <h2 className="text-4xl font-bold tracking-tight">
          How Future
          <span className="text-[#02B6EF]">You </span>
          Works
        </h2>

        <p className="mt-4 text-0.8g text-zinc-400">
          Four intelligent steps to a better financial future.
        </p>
      </div>

      <div className="flex mt-8 flex-wrap items-center justify-center gap-1">
        {steps.map((step, index) => (
        <div
            key={step.number}
            className="flex items-center"
        >
            <div
            onClick={() => setSelected(index)}
            className={`             
                group
                w-[295px]
                h-[220px]
                rounded-3xl
                border
                p-6
                transition-all
                duration-300                
                ${
                  selected === index
                    ? "border-[#02B6EF]/200 bg-[#02B6EF]/5 shadow-[0_0_40px_rgba(2,182,239,0.15)]"
                    : "border-[#02B6EF]/30 bg-white/[0.02] hover:border-[#02B6EF]/80 hover:bg-white/[0.04]"
                }
            `}
            >
            <div className="mb-3">
                <span
                className="
                    text-3xl
                    font-bold
                    text-[#02B6EF]
                "
                >
                {step.number}
                </span>
            </div>

            <h3
                className="
                mb-3
                text-2xl
                font-semibold
                text-white
                "
            >
                {step.title}
            </h3>
            
            <div>
            <h4 className="leading-7 text-zinc-400">
                {step.description}
            </h4>
            </div>
            </div>

            {index < steps.length - 1 && (
            <div
                className="
                mx-4
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
                border-[#02B6EF]/30
                bg-[#00559a]/5
                "
            >
                <ChevronRight
                size={32}
                className="text-[#02B6EF]"
                />
            </div>
            )}
        </div>
        ))}
      </div>
      {/* Detail Panel */}

        <div
            className="
            mt-10
            rounded-3xl
            border
            border-[#02B6EF]/20
            bg-white/[0.02]
            p-7
            backdrop-blur-md
            "
        >
            <div className="flex mt-1 items-center gap-4">
            <div
                className="
                flex
                h-16
                w-14
                items-center
                justify-center
                rounded-full
                bg-[#02B6EF]/10
                text-3xl
                font-bold
                text-[#02B6EF]
                "
            >
                {steps[selected].number}
            </div>

            <h3 className="text-3xl font-bold text-white">
                {steps[selected].title}
            </h3>
            </div>

            <p className="mt-2 max-w-3xl text-lg text-zinc-400">
            {steps[selected].description}
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
            {steps[selected].details.map((item) => (
                <div
                key={item}
                className="
                    rounded-2xl
                    border
                    border-[#02B6EF]/10
                    bg-[#00559a]/10
                    p-4
                    text-zinc-300
                "
                >
                ✓ {item}
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}
    