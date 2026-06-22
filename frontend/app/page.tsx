import BackgroundGlow from "@/components/BackgroundGlow";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer"


export default function Home() {
  return (
    <main className="relative min-h-[80vh]">
      <BackgroundGlow />

      <Navbar />

      <Hero />

      <div id="Features" className="relative mx-auto max-w-8xl px-6 py-8">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#00559a]/60 to-transparent" />
      </div>

      <Features />

      <div className="relative mx-auto max-w-10xl px-6 py-24">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#00559a]/60 to-transparent" />
      </div>

      <HowItWorks />

      <div className="relative mx-auto max-w-10xl px-6 py-3">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#02B6EF]/60 to-transparent" />
      </div>

      <Footer/>

    </main>
  );
}