import Image from "next/image";

export default function Hero() {
    return (
        <section
            className="
                relative
                z-10
                flex
                min-h-[10vh]
                flex-col
                items-center
                justify-center
                text-center
                px-5
            "
            >


            <div className="relative">
                <div
                    className="
                    absolute
                    inset-0
                    rounded-full
                    bg-[#00559a]/150
                    blur-[220px]
                    items-left
                    "
                />

                <Image
                    src="/futureyou-logo.png"
                    alt="FutureYou"
                    width={600}
                    height={400}
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

            {/* <p
            className="
                mt-0
                max-w-3xl
                text-lg
                md:text-1.2xl
                text-zinc-400
            "
            >
            future before making
            life-changing decisions.
            </p> */}

            <div className="mt-6 flex gap-4">
                <button
                    className="
            rounded-2xl
            bg-[#02B6EF]
            px-9
            py-3
            font-semibold
            text-black
            transition
            hover:scale-105
          "
                >
                    Create My Twin
                </button>

                <button
                    className="
            rounded-2xl
            border
            border-zinc-800
            px-9
            py-3
            text-white
          "
                >
                    Watch Demo
                </button>
            </div>
        </section>
    );
}