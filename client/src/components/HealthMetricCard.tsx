import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface HealthMetricCardProps {
  title: string;
  value: string;
  unit: string;
  icon: LucideIcon;
  status: "normal" | "warning" | "critical";
  trend?: string;
}

export default function HealthMetricCard({
  title,
  value,
  unit,
  icon: Icon,
  status,
  trend,
}: HealthMetricCardProps) {
  const statusColors = {
    normal: "bg-chart-5 text-white",
    warning: "bg-chart-4 text-white",
    critical: "bg-chart-3 text-white",
  };

  const borderColors = {
    normal: "border-chart-5",
    warning: "border-chart-4",
    critical: "border-chart-3",
  };

  return (
    <Card className={`border-l-4 ${borderColors[status]} hover-elevate`} data-testid={`card-metric-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-4xl font-bold" data-testid={`text-metric-value-${title.toLowerCase().replace(/\s+/g, '-')}`}>
              {value}
            </div>
            <div className="text-sm text-muted-foreground">{unit}</div>
          </div>
          <Badge className={statusColors[status]} data-testid={`badge-status-${status}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
        {trend && (
          <div className="mt-3 text-xs text-muted-foreground" data-testid="text-trend">
            {trend}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
