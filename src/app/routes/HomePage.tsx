import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CTASection from "@/components/sections/CTASection";
import DefensesSection from "@/components/sections/DefensesSection";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ProblemSection from "@/components/sections/ProblemSection";
import ResultsSection from "@/components/sections/ResultsSection";
import SolutionSection from "@/components/sections/SolutionSection";
import UseCasesSection from "@/components/sections/UseCasesSection";

export default function HomePage() {
  return (
    <div
      id="page-scroll"
      className="h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth overscroll-y-contain"
    >
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <DefensesSection />
        <ResultsSection />
        <UseCasesSection />
        <CTASection />
      </main>
      <section className="snap-start">
        <Footer />
      </section>
    </div>
  );
}
