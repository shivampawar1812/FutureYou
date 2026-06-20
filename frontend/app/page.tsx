import BackgroundGlow from "@/components/BackgroundGlow";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="relative min-h-[80vh]">
      <BackgroundGlow />

      <Navbar />

      <Hero />

      <div className="relative mx-auto max-w-10xl px-6 py-8">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#00559a]/220 to-transparent" />
      </div>

      <HowItWorks />

      <div className="relative mx-auto max-w-10xl px-6 py-4">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#02B6EF]/50 to-transparent" />
      </div>

      <Footer/>

    </main>
  );
}