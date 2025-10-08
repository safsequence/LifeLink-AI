import { MessageSquare, AlertCircle, MapPinned } from "lucide-react";
import videoSrc from "@assets/0-02-03-026d838d5a6eaa2e4817c6f9fb6813360beb6caaf024be7f6623883234b65a1e_1f807fda82b4a1a0_1759941642359.mp4";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Describe Your Symptoms",
      description: "Chat with our Gemini-powered AI doctor. Describe your symptoms in your own words, and get instant medical triage and guidance.",
    },
    {
      number: "02",
      icon: AlertCircle,
      title: "Activate Emergency SOS",
      description: "If needed, trigger one-tap SOS alert. Your location and medical info are instantly shared with emergency services.",
    },
    {
      number: "03",
      icon: MapPinned,
      title: "Get Routed to Help",
      description: "Our system routes your emergency to the nearest hospital or responder. Live map tracking ensures fast, coordinated response.",
    },
  ];

  return (
    <div className="py-24 bg-black">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From symptoms to emergency response in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-[calc(100%-1rem)] w-8 h-0.5 -translate-y-1/2 z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-50 blur-sm" />
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-purple-500 animate-ping" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-pink-500 animate-ping" style={{ animationDelay: '0.5s' }} />
                </div>
              )}
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 flex flex-col h-full w-full">
                <div className="mb-6">
                  <span className="text-5xl font-bold text-purple-400 opacity-30">
                    {step.number}
                  </span>
                </div>
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 mb-6 w-fit">
                  <step.icon className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed flex-grow">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-3">
              See It In Action
            </h3>
            <p className="text-gray-400 text-lg">
              Watch how LifeLink AI saves lives with intelligent emergency response
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 bg-gradient-to-br from-gray-900 to-black p-2">
            <video
              className="w-full h-auto rounded-xl"
              controls
              data-testid="video-demo"
              preload="metadata"
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
