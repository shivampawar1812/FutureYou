"use client";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav
      className="
        relative
        z-20
        flex
        items-center
        justify-between
        px-8
        py-6
      "
    >
      <Image
        src="/futureyou-logo.png"
        alt="FutureYou"
        width={150}
        height={100}
        priority
      />

      <div className="flex items-center gap-8">
      <button
        onClick={() => {
          document
            .getElementById("how-it-works")
            ?.scrollIntoView({
              behavior: "smooth",
            });
        }}
        className="
          text-zinc-400
          transition
          hover:text-[#02B6EF]
        "
      >
        How It Works
      </button>

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