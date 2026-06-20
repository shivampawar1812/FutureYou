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
        width={130}
        height={90}
        priority
      />

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
    </nav>
  );
}