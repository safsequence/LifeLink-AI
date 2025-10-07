import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Activity, ArrowLeft, CheckCircle, Heart, Shield, Zap, Phone, MessageSquare, MapPin } from "lucide-react";

export default function Documentation() {
  return (
    <div className="relative min-h-screen bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-grid-white/[0.02]" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
        }} />
      </div>

      <div className="relative z-10">
        <nav className="border-b border-white/10 backdrop-blur-xl bg-black/50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/">
                <div className="flex items-center gap-2 text-xl font-bold text-white cursor-pointer hover:opacity-80 transition-opacity">
                  <Activity className="h-6 w-6 text-purple-400" />
                  <span>LifeLink AI</span>
                </div>
              </Link>
              <Link href="/">
                <Button variant="ghost" className="gap-2 text-gray-300 hover:text-white">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <div className="space-y-16">
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-bold text-white">
                LifeLink AI
                <span className="block text-3xl mt-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Documentation
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Your comprehensive guide to AI-powered healthcare at your fingertips
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">What is LifeLink AI?</h2>
                <p className="text-gray-400 leading-relaxed">
                  LifeLink AI is an advanced healthcare platform that combines Google Gemini AI with real-time emergency services. 
                  Get instant medical triage, connect with emergency responders, and monitor your health—all from one unified platform.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">How It Works</h2>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Sign up and complete your health profile</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Chat with AI doctor for instant medical guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Use SOS button to connect with emergency services</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white text-center">Core Features</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 space-y-3">
                  <MessageSquare className="h-8 w-8 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">AI Doctor Chat</h3>
                  <p className="text-gray-400 text-sm">
                    Powered by Google Gemini AI, get instant medical triage and health advice 24/7. 
                    Describe your symptoms and receive intelligent guidance.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 space-y-3">
                  <Phone className="h-8 w-8 text-red-400" />
                  <h3 className="text-xl font-semibold text-white">Emergency SOS</h3>
                  <p className="text-gray-400 text-sm">
                    Offline-capable SOS network that connects you directly to hospitals and emergency services. 
                    Works even without internet connection.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 space-y-3">
                  <MapPin className="h-8 w-8 text-green-400" />
                  <h3 className="text-xl font-semibold text-white">Live Routing</h3>
                  <p className="text-gray-400 text-sm">
                    Real-time health monitoring with live routing to nearest responders. 
                    Get connected to the closest available help instantly.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-xl p-8 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Security & Privacy</h2>
              <p className="text-gray-400 leading-relaxed">
                Your health data is encrypted and secure. We follow HIPAA compliance standards and never share your 
                personal information without explicit consent. All AI interactions are processed with privacy-first principles.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white text-center">Getting Started</h2>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Create Your Account</h3>
                      <p className="text-gray-400">Sign up with your email and create a secure password</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Set Up Your Profile</h3>
                      <p className="text-gray-400">Add your health information and emergency contacts</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Start Using LifeLink</h3>
                      <p className="text-gray-400">Chat with AI doctor, monitor health, and access emergency services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-white">Ready to Get Started?</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/signup">
                  <Button
                    size="lg"
                    className="gap-2 text-lg h-14 px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-0 shadow-lg shadow-purple-500/50"
                  >
                    <Activity className="h-5 w-5" />
                    Start Free Trial
                  </Button>
                </Link>
                <Link href="/login">
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 text-lg h-14 px-8 bg-white/5 text-white border-white/20 hover:bg-white/10 backdrop-blur-sm"
                  >
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
