import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import Navbar from "@/components/Navbar";
import HealthMetricCard from "@/components/HealthMetricCard";
import AIChat from "@/components/AIChat";
import { Heart, Activity, Thermometer, Droplets } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const [user, setUser] = useState<{ name: string; role: string } | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setLocation("/login");
    }
  }, [setLocation]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setLocation("/");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar user={user} onLogout={handleLogout} />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}</h1>
          <p className="text-muted-foreground">Monitor your health and chat with AI Doctor</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Your Vitals</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <HealthMetricCard
                  title="Heart Rate"
                  value="72"
                  unit="bpm"
                  icon={Heart}
                  status="normal"
                  trend="↑ 2% from yesterday"
                />
                <HealthMetricCard
                  title="Blood Pressure"
                  value="120/80"
                  unit="mmHg"
                  icon={Activity}
                  status="normal"
                  trend="Normal range"
                />
                <HealthMetricCard
                  title="Temperature"
                  value="98.6"
                  unit="°F"
                  icon={Thermometer}
                  status="normal"
                  trend="Normal range"
                />
                <HealthMetricCard
                  title="Oxygen Level"
                  value="98"
                  unit="%"
                  icon={Droplets}
                  status="normal"
                  trend="Excellent"
                />
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Health Log</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="text-muted-foreground">Today, 9:00 AM</span>
                      <span>Morning vitals recorded</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="text-muted-foreground">Yesterday, 8:30 PM</span>
                      <span>AI consultation completed</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Yesterday, 2:15 PM</span>
                      <span>Medication reminder sent</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h2 className="text-xl font-semibold mb-4">AI Doctor</h2>
            <AIChat />
          </div>
        </div>
      </div>
    </div>
  );
}
