"use client";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav 
      className="
        fixed
        w-[1500px]
        h-[100px]
        z-20
        flex
        items-center
        justify-between
        px-12
        py-6
      "
    >
      <button onClick={() => {
          document
            .getElementById("FutureYou")
            ?.scrollIntoView({
              behavior: "smooth",
            });
        }}>
      <Image
        src="/futureyou-logo.png"
        alt="FutureYou"
        width={170}
        height={120}
        priority
      />
      </button>

      <div className="flex items-center gap-8">

      <button
        className="
          rounded-xl
          border
          border-[#02B6EF]/20
          bg-white/[0.03]
          px-5
          py-2
          text-[#02B6EF]
          transition
          hover:bg-white/[0.06]
          text-zinc-300
          border-zinc-600
        "
      >
        Login
      </button>
      </div>
    </nav>
  );
}