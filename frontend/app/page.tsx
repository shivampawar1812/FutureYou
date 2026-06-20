import BackgroundGlow from "@/components/BackgroundGlow";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-[80vh]">
      <BackgroundGlow />

      <Navbar />

      <Hero />
    </main>
  );
}