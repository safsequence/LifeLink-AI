import { Users, Eye, Target, Cog, TrendingUp, Users2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutUsSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black via-gray-900/30 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Connecting Humanity — When the World Goes Silent
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            No internet? No problem — phones become the network
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="bg-gray-900/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300" data-testid="card-who-we-are">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Who We Are</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                LifeLink AI was created to solve one of the world's toughest challenges — staying connected when networks fail. During disasters or blackouts, our system transforms nearby devices into a mesh-based emergency network that relays SOS messages locally until one device reconnects to cloud.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300" data-testid="card-our-vision">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We believe no one should be left unheard in an emergency. LifeLink AI ensures that every phone becomes a lifeline — capable of sending SOS signals without internet access using peer-to-peer clustering.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300" data-testid="card-how-it-works">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Cog className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">How It Works</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Using simulated WebRTC + Bluetooth connectivity, LifeLink AI allows SOS messages to "hop" between browsers. When any one device goes online, it uploads all stored messages to a global Rescue Dashboard that visualizes incidents, clusters them by type, and triggers voice alerts.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300" data-testid="card-our-impact">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Impact</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                By turning browsers into emergency tools, LifeLink AI makes rescue coordination faster and smarter. Our system combines AI analysis + time real-time mapping, and community-driven connectivity to make sure help reaches those who need it most.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 md:col-span-2" data-testid="card-our-team">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Users2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Team</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We are a team of passionate innovators driven to make technology a force for humanity. Our mission is to create hope in moments of chaos — proving that the power to save lives can lie within every device and every connection we make.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
