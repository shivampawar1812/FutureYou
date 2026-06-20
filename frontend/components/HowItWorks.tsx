import { ChevronRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Build Fin-Twin",
      description:
        "Tell us about yourself and we build your AI Financial Twin in seconds.",
    },
    {
      number: "02",
      title: "Simulate Decisions",
      description:
        "Run real-life scenarios and see the future impact of your decisions.",
    },
    {
      number: "03",
      title: "Recieve Next Move",
      description:
        "Our NextMove Agent analyzes your profile and recommends the best action.",
    },
    {
      number: "04",
      title: "Get AI Guidance",
      description:
        "Get personalized insights and explanations from your AI Copilot.",
    },
  ];

  return (
    <section className="relative z-10 mx-auto max-w-8xl px-6">
      <div className="mb-2 text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          How Future
          <span className="text-[#02B6EF]">You </span>
          Works
        </h2>

        <p className="mt-2 text-0.8g text-zinc-400">
          Four intelligent steps to a better financial future.
        </p>
      </div>

      <div className="flex mt-5 flex-wrap items-center justify-center gap-1">
        {steps.map((step, index) => (
        <div
            key={step.number}
            className="flex items-center"
        >
            <div
            className="
                group
                w-[295px]
                h-[220px]
                rounded-3xl
                border
                border-[#02B6EF]/10
                bg-white/[0.02]
                p-6
                transition-all
                duration-300
                hover:border-[#02B6EF]/40
                hover:bg-white/[0.04]
                hover:-translate-y-2
                cursor-pointer
            "
            >
            <div className="mb-2">
                <span
                className="
                    text-4xl
                    font-bold
                    text-[#02B6EF]
                "
                >
                {step.number}
                </span>
            </div>

            <h3
                className="
                mb-2
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
                bg-[#02B6EF]/5
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
    </section>
  );
}