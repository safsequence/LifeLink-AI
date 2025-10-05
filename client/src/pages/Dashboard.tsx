import { useEffect } from "react";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { useUser } from "@/contexts/UserContext";
import Navbar from "@/components/Navbar";
import HealthMetricCard from "@/components/HealthMetricCard";
import AIChat from "@/components/AIChat";
import { Heart, Activity, Thermometer, Droplets } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { HealthLog } from "@shared/schema";

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const { user, logout } = useUser();

  useEffect(() => {
    if (!user) {
      setLocation("/login");
    }
  }, [user, setLocation]);

  const { data: healthLogs, isLoading } = useQuery<HealthLog[]>({
    queryKey: ["/api/health-logs", user?.id],
    enabled: !!user,
  });

  const handleLogout = () => {
    logout();
    setLocation("/");
  };

  if (!user) return null;

  const latestLog = healthLogs?.[0];

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
                {isLoading ? (
                  <>
                    <Skeleton className="h-32" />
                    <Skeleton className="h-32" />
                    <Skeleton className="h-32" />
                    <Skeleton className="h-32" />
                  </>
                ) : (
                  <>
                    <HealthMetricCard
                      title="Heart Rate"
                      value={latestLog?.heartRate?.toString() || "--"}
                      unit="bpm"
                      icon={Heart}
                      status="normal"
                      trend={latestLog ? "Latest reading" : "No data"}
                    />
                    <HealthMetricCard
                      title="Blood Pressure"
                      value={
                        latestLog?.bloodPressureSystolic && latestLog?.bloodPressureDiastolic
                          ? `${latestLog.bloodPressureSystolic}/${latestLog.bloodPressureDiastolic}`
                          : "--"
                      }
                      unit="mmHg"
                      icon={Activity}
                      status="normal"
                      trend={latestLog ? "Latest reading" : "No data"}
                    />
                    <HealthMetricCard
                      title="Temperature"
                      value={latestLog?.temperature?.toString() || "--"}
                      unit="°F"
                      icon={Thermometer}
                      status="normal"
                      trend={latestLog ? "Latest reading" : "No data"}
                    />
                    <HealthMetricCard
                      title="Oxygen Level"
                      value={latestLog?.oxygenLevel?.toString() || "--"}
                      unit="%"
                      icon={Droplets}
                      status="normal"
                      trend={latestLog ? "Latest reading" : "No data"}
                    />
                  </>
                )}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Health Log</CardTitle>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <div className="space-y-3">
                      <Skeleton className="h-8" />
                      <Skeleton className="h-8" />
                      <Skeleton className="h-8" />
                    </div>
                  ) : healthLogs && healthLogs.length > 0 ? (
                    <div className="space-y-3 text-sm">
                      {healthLogs.slice(0, 3).map((log) => (
                        <div key={log.id} className="flex justify-between items-center pb-2 border-b last:border-0">
                          <span className="text-muted-foreground">
                            {new Date(log.timestamp).toLocaleString()}
                          </span>
                          <span>{log.symptoms || "Vitals recorded"}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">No health logs yet</p>
                  )}
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
