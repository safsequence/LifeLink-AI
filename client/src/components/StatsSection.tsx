import { Card } from "@/components/ui/card";
import { Users, Clock, MapPin, TrendingUp } from "lucide-react";

export default function StatsSection() {
  const stats = [
    { icon: Users, label: "Lives Saved", value: "10,000+", color: "text-chart-5" },
    { icon: Clock, label: "Avg Response Time", value: "< 3 min", color: "text-chart-4" },
    { icon: MapPin, label: "Active Hospitals", value: "500+", color: "text-chart-1" },
    { icon: TrendingUp, label: "Accuracy Rate", value: "98.5%", color: "text-chart-2" },
  ];

  return (
    <div className="py-16 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted by Thousands</h2>
          <p className="text-muted-foreground text-lg">
            Real-time emergency response that makes a difference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-6 text-center hover-elevate" data-testid={`card-stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
              <stat.icon className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
              <div className="text-4xl font-bold mb-2" data-testid={`text-stat-value-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
