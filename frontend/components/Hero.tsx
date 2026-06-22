"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Info, PlayCircle, Rocket } from "lucide-react";

export default function Hero() {
    const [hideFloatingCards, setHideFloatingCards] = useState(false);
    useEffect(() => {
    const section = document.getElementById("how-it-works");

    if (!section) return;

    const observer = new IntersectionObserver(
        ([entry]) => {
        setHideFloatingCards(entry.isIntersecting);
        },
        {
        threshold: 0.2,
        }
    );

    observer.observe(section);

    return () => observer.disconnect();
    }, []);


    return (
        <section
            className="
                relative
                z-10
                flex
                mt-10
                min-h-[10vh]
                flex-col
                items-center
                justify-center
                text-center
                px-5
            "
            >
            <div id="FutureYou">
                <br></br>
                <br></br>
                <br></br>

            </div>

            <div className="relative">
                <div 
                    className="
                    absolute
                    inset-0
                    rounded-full
                    bg-[#00559a]/500
                    blur-[180px]
                    items-left
                    "
                />

                <Image
                    src="/futureyou-logo.png"
                    alt="FutureYou"
                    width={700}
                    height={500}
                    className="relative z-10"
                />
                </div>

            

            <h1
                className="
                mt-3
                text-3xl
                md:text-2xl
                font-extrabold
                tracking-tight
                z-800
            "
            >
                A Digital Twin for Your Financial Future
            </h1>

            <p
            className="
                mt-4
                max-w-3xl
                text-lg
                md:text-1.2xl
                text-zinc-400
            "
            >
            Predict, simulate and optimize
            your financial future before making
            life-changing decisions.
            </p>

            {!hideFloatingCards && (
            <div
                className="
                fixed
                left-5
                top-1/2
                -translate-y-1/2
                z-50
                hidden
                lg:flex
                flex-col
                gap-5
                "
            >
                <button
                onClick={() =>
                    document.getElementById("Features")?.scrollIntoView({
                    behavior: "smooth",
                    })
                }
                className="
                    w-24
                    h-24
                    rounded-3xl
                    bg-zinc-900/80
                    backdrop-blur-xl
                    border
                    border-cyan-500/20
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-2
                    transition-all
                    hover:border-cyan-400
                    hover:scale-105
                "
                >
                <Rocket size={24} className="text-cyan-400" />
                <span className="text-xs text-white">
                    Get Started
                </span>
                </button>

                <button
                onClick={() =>
                    document.getElementById("how-it-works")?.scrollIntoView({
                    behavior: "smooth",
                    })
                }
                className="
                    w-24
                    h-24
                    rounded-3xl
                    bg-zinc-900/80
                    backdrop-blur-xl
                    border
                    border-cyan-500/20
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-2
                    transition-all
                    hover:border-cyan-400
                    hover:scale-105
                "
                >
                <Info size={24} className="text-cyan-400" />
                <span className="text-xs text-white">
                    About
                </span>
                </button>
                
                <button
                className="
                    w-24
                    h-24
                    rounded-3xl
                    bg-zinc-900/80
                    backdrop-blur-xl
                    border
                    border-cyan-500/20
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-2
                    transition-all
                    hover:border-cyan-400
                    hover:scale-105
                "
                >
                <PlayCircle size={24} className="text-cyan-400" />
                <span className="text-xs text-white">
                    Demo
                </span>
                </button>
            </div>
            )}
        </section>
    );
}