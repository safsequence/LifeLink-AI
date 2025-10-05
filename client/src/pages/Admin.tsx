import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import Navbar from "@/components/Navbar";
import AlertMap from "@/components/AlertMap";
import AlertList from "@/components/AlertList";

interface Alert {
  id: string;
  location: { lat: number; lng: number };
  status: "active" | "pending" | "resolved";
  user: string;
  urgency: number;
  timestamp: Date;
  description?: string;
}

export default function Admin() {
  const [, setLocation] = useLocation();
  const [user, setUser] = useState<{ name: string; role: string } | null>(null);
  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: "1",
      location: { lat: 23.8103, lng: 90.4125 },
      status: "active",
      user: "John Doe",
      urgency: 9,
      timestamp: new Date(),
      description: "Severe chest pain, difficulty breathing",
    },
    {
      id: "2",
      location: { lat: 23.7805, lng: 90.4200 },
      status: "pending",
      user: "Jane Smith",
      urgency: 6,
      timestamp: new Date(Date.now() - 300000),
      description: "High fever and persistent headache",
    },
    {
      id: "3",
      location: { lat: 23.8200, lng: 90.3950 },
      status: "active",
      user: "Bob Johnson",
      urgency: 7,
      timestamp: new Date(Date.now() - 180000),
      description: "Severe bleeding from leg injury",
    },
  ]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      if (userData.role !== "admin") {
        setLocation("/dashboard");
        return;
      }
      setUser(userData);
    } else {
      setLocation("/login");
    }
  }, [setLocation]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setLocation("/");
  };

  const handleAccept = (alertId: string) => {
    setAlerts((prev) =>
      prev.map((alert) =>
        alert.id === alertId ? { ...alert, status: "active" as Alert["status"] } : alert
      )
    );
    console.log("Alert accepted:", alertId);
  };

  const handleResolve = (alertId: string) => {
    setAlerts((prev) =>
      prev.map((alert) =>
        alert.id === alertId ? { ...alert, status: "resolved" as Alert["status"] } : alert
      )
    );
    console.log("Alert resolved:", alertId);
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar user={user} onLogout={handleLogout} />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Emergency Control Center</h1>
          <p className="text-muted-foreground">Real-time monitoring of emergency alerts</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-220px)]">
          <div className="lg:col-span-2 h-full">
            <AlertMap
              alerts={alerts}
              onAlertClick={(alert) => console.log("Alert clicked:", alert)}
            />
          </div>

          <div className="lg:col-span-1 h-full">
            <AlertList
              alerts={alerts}
              onAlertClick={(alert) => console.log("Alert clicked:", alert)}
              onAccept={handleAccept}
              onResolve={handleResolve}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
