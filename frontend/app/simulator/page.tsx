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
      <div className="relative mx-auto max-w-10xl px-6 mt-6">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#02B6EF]/20 to-transparent" />
      </div>

    <div className="flex justify-center mb-">
      <img src="/fintwinimage.png" alt="FinTwin" height={80} width={400} />
    </div>

    <div className="relative mx-auto max-w-10xl px-6 py-3">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#02B6EF]/60 to-transparent" />
      </div>

      <Footer/>

    </main>
  );
}