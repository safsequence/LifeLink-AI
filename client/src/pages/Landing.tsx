import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import StatsSection from "@/components/StatsSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import SecuritySection from "@/components/SecuritySection";
import CTASection from "@/components/CTASection";

export default function Landing() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <StatsSection />
      <IntegrationsSection />
      <SecuritySection />
      <CTASection />

      <footer className="border-t border-gray-800 py-12 bg-black">
        <div className="container px-4 mx-auto">
          <div className="text-center">
            <p className="text-gray-400 mb-2">&copy; 2025 LifeLink AI. Saving lives through technology.</p>
            <p className="text-sm text-gray-500">For medical emergencies, call your local emergency number immediately.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
