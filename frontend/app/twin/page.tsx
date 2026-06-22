import BackgroundGlow from "@/components/BackgroundGlow"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinancialTwinForm from "@/components/FinancialTwinForm";


export default function TwinPage() {
  return (
    <main className="relative min-h-[80vh]">
      <BackgroundGlow />

      <Navbar />

      <div className="mx-auto max-w-7xl px-28 mt-16">

        <div className="mb-1 mt-10">
        <div className="flex justify-center">
            <div 
                    className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-full
                    blur-[500px]
                    items-left
                    "
                />
          <h1 className="text-5xl font-bold font-white z-1000">
            Create Your Financial Twin
          </h1>
        </div>
        <div className="flex justify-center">
          <p className="mt-4 mb-8 text-zinc-400">
            Tell us about your finances and
            FutureYou will build a digital twin
            of your financial future.
          </p>
        </div>
        </div>
      </div>

      <FinancialTwinForm/>

      <div className="relative mx-auto max-w-10xl px-6 pt-3">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#02B6EF]/60 to-transparent" />
      </div>

      <Footer/>

    </main>
  );
}