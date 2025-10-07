import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <div className="py-24 bg-gradient-to-b from-black to-gray-950">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-90" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),rgba(255,255,255,0))]" />
            
            <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm text-white backdrop-blur-sm mb-6">
                <Sparkles className="h-4 w-4" />
                <span>Start Saving Lives Today</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Ready to Transform
                <br />
                Emergency Healthcare?
              </h2>
              
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of healthcare providers using LifeLink AI to deliver faster, smarter emergency care.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/signup">
                  <Button
                    size="lg"
                    className="gap-2 text-lg h-14 px-8 bg-white text-purple-600 hover:bg-gray-100 border-0"
                  >
                    Start Free Trial
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/login">
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 text-lg h-14 px-8 bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
                  >
                    Contact Sales
                  </Button>
                </Link>
              </div>
              
              <p className="mt-8 text-sm text-white/70">
                No credit card required • Free 14-day trial • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
