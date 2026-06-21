import BackgroundGlow from "@/components/BackgroundGlow"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SimulatorPage() {
  return (
    <main className="relative min-h-[80vh]">
      <BackgroundGlow />

      <Navbar />

      <div className="relative mx-auto max-w-10xl px-6 py-3">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#02B6EF]/60 to-transparent" />
      </div>

      <Footer/>

    </main>
  );
}