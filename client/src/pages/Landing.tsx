import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";

export default function Landing() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />

      <footer className="border-t py-8 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2025 LifeLink AI. Saving lives through technology.</p>
            <p className="mt-2">For medical emergencies, call your local emergency number immediately.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
