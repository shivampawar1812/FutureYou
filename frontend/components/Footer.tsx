export default function Footer() {
  return (
    <footer className="py-4">
      <p
        className="
          text-center
          text-sm
          tracking-wide
          text-zinc-500
        "
      >
        © {new Date().getFullYear()} FutureYou.
        Banking that thinks ahead.
      </p>
    </footer>
  );
}