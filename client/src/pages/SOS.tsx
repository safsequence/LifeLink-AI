import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import Navbar from "@/components/Navbar";
import SOSButton from "@/components/SOSButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Activity } from "lucide-react";

export default function SOS() {
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

  const handleSOSActivate = (location: { lat: number; lng: number }) => {
    console.log("SOS activated at:", location);
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar user={user} onLogout={handleLogout} />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 text-destructive">Emergency SOS</h1>
            <p className="text-muted-foreground">
              Press the button below to send an emergency alert with your location
            </p>
          </div>

          <SOSButton size="large" onActivate={handleSOSActivate} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Phone className="h-5 w-5 text-primary" />
                  Emergency Hotline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold font-mono">999</p>
                <p className="text-sm text-muted-foreground mt-1">Call for immediate assistance</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <MapPin className="h-5 w-5 text-primary" />
                  Your Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-mono text-muted-foreground">
                  Location will be shared automatically when SOS is activated
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Activity className="h-5 w-5 text-primary" />
                  Response Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">~3 min</p>
                <p className="text-sm text-muted-foreground mt-1">Average emergency response</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 border-amber-500/50">
            <CardHeader>
              <CardTitle className="text-amber-600 dark:text-amber-500">Important Safety Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>• Stay calm and remain where you are if safe</p>
              <p>• Keep your phone charged and accessible</p>
              <p>• Share your medical history with first responders</p>
              <p>• Follow instructions from emergency services</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
