"use client";

import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

export default function Features() {
  const router = useRouter();

  const features = [
    {
      title: "Financial Twin",
      description:
        "Analyze your current financial health, risk profile and next best action with AI....",
      route: "/twin",
    },
    {
      title: "What-If Simulator",
      description:
        "Test major financial decisions before making them.",
      route: "/simulator",
    },
    {
      title: "Timeline Agent",
      description:
        "Coming Soon !! Visualize your financial future as an evolving timeline.",
      route: "/timeline",
    },
    {
      title: "Life Event Agent",
      description:
        "Coming Soon !! AI proactively predicts upcoming financial milestones.",
      route: "/life-event",
    },
  ];

  return (
    <section id="Features"
        className="mx-auto max-w-7xl px-6">
      <div className="mb-6 text-center">
        <h2 className="text-4xl font-bold z-500">
          Explore Future<span className="text-[#02B6EF]">You </span>
        </h2>

        <p className="mt-4 text-zinc-400">
          Powerful tools to help you make
          smarter financial decisions.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            onClick={() =>
              router.push(feature.route)
            }
            className="
              group
              cursor-pointer
              rounded-3xl
              border
              border-[#02B6EF]/30
              bg-white/[0.02]
              p-6
              transition-all
              duration-300
              hover:border-[#02B6EF]/100
              hover:bg-white/[0.04]
              hover:-translate-y-2
            "
          >
            <div className="flex items-start justify-between">
              <h3 className="text-2xl font-semibold">
                {feature.title}
              </h3>

              <ArrowUpRight
                className="
                  text-[#02B6EF]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </div>

            <p className="mt-4 text-#9CA3AF">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}