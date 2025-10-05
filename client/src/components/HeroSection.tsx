import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Activity, Brain, MapPin, Heart } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(135deg, hsl(266, 100%, 50%) 0%, hsl(280, 61%, 65%) 100%)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
      </div>

      <div className="container relative z-10 px-4 py-24 text-center text-white">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="flex justify-center">
            <Activity className="h-20 w-20 text-white/90" />
          </div>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl" data-testid="text-hero-title">
            Save Lives with AI-Powered Emergency Care
          </h1>

          <p className="text-xl text-white/90 sm:text-2xl" data-testid="text-hero-subtitle">
            Real-time triage, instant SOS alerts, and intelligent health monitoring.
            Get medical guidance when every second counts.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/signup" data-testid="button-get-started">
              <Button
                size="lg"
                className="gap-2 text-lg h-14 px-8 bg-white text-primary hover:bg-white/90 border border-white/20"
              >
                <Heart className="h-5 w-5" />
                Get Started Free
              </Button>
            </Link>
            <Link href="/login" data-testid="button-sign-in">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 text-lg h-14 px-8 bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
              >
                Sign In
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 pt-8 sm:grid-cols-3">
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm border border-white/20">
              <Brain className="mx-auto h-10 w-10 text-white mb-3" />
              <h3 className="font-semibold text-lg mb-2">AI Doctor</h3>
              <p className="text-sm text-white/80">Instant symptom analysis and medical guidance</p>
            </div>
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm border border-white/20">
              <MapPin className="mx-auto h-10 w-10 text-white mb-3" />
              <h3 className="font-semibold text-lg mb-2">GPS SOS</h3>
              <p className="text-sm text-white/80">One-tap emergency alerts with location</p>
            </div>
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm border border-white/20">
              <Activity className="mx-auto h-10 w-10 text-white mb-3" />
              <h3 className="font-semibold text-lg mb-2">Health Monitoring</h3>
              <p className="text-sm text-white/80">Track vitals and get AI predictions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
