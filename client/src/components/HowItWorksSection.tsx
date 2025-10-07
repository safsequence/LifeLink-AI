import { MessageSquare, AlertCircle, MapPinned } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Describe Your Symptoms",
      description: "Chat with our Gemini-powered AI doctor. Describe your symptoms in your own words, and get instant medical triage and guidance.",
      color: "text-purple-400",
      borderColor: "border-purple-500/30",
    },
    {
      number: "02",
      icon: AlertCircle,
      title: "Activate Emergency SOS",
      description: "If needed, trigger one-tap SOS alert. Your location and medical info are instantly shared with emergency services.",
      color: "text-red-400",
      borderColor: "border-red-500/30",
    },
    {
      number: "03",
      icon: MapPinned,
      title: "Get Routed to Help",
      description: "Our system routes your emergency to the nearest hospital or responder. Live map tracking ensures fast, coordinated response.",
      color: "text-green-400",
      borderColor: "border-green-500/30",
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
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-gray-700 to-transparent" />
              )}
              <div className={`relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border ${step.borderColor} hover:border-opacity-60 transition-all duration-300`}>
                <div className="mb-6">
                  <span className={`text-5xl font-bold ${step.color} opacity-30`}>
                    {step.number}
                  </span>
                </div>
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 border ${step.borderColor} mb-6`}>
                  <step.icon className={`h-8 w-8 ${step.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
