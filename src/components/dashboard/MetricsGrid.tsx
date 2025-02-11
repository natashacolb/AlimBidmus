import React from "react";
import { Card, CardContent } from "../ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import {
  ArrowUpRight,
  ArrowDownRight,
  Users,
  Calendar,
  Clock,
  CreditCard,
} from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change?: number;
  icon?: React.ReactNode;
  tooltip?: string;
}

const MetricCard = ({
  title = "Metric",
  value = "0",
  change = 0,
  icon,
  tooltip = "Metric information",
}: MetricCardProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-none">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-slate-600">{title}</p>
                  <h3 className="text-2xl font-bold mt-2 text-slate-900">
                    {value}
                  </h3>
                  {change !== undefined && (
                    <p
                      className={`text-sm mt-2 flex items-center ${change >= 0 ? "text-green-600" : "text-red-600"}`}
                    >
                      {change >= 0 ? (
                        <ArrowUpRight className="w-4 h-4 mr-1" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4 mr-1" />
                      )}
                      {Math.abs(change)}%
                    </p>
                  )}
                </div>
                {icon && <div className="text-muted-foreground">{icon}</div>}
              </div>
            </CardContent>
          </Card>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

interface MetricsGridProps {
  userType?: "care-worker" | "care-hub";
  metrics?: MetricCardProps[];
}

const defaultCareWorkerMetrics: MetricCardProps[] = [
  {
    title: "Total Shifts",
    value: "24",
    change: 12,
    icon: <Calendar className="w-6 h-6" />,
    tooltip: "Total shifts completed this month",
  },
  {
    title: "Hours Worked",
    value: "156",
    change: 8,
    icon: <Clock className="w-6 h-6" />,
    tooltip: "Total hours worked this month",
  },
  {
    title: "Earnings",
    value: "£3,240",
    change: 15,
    icon: <CreditCard className="w-6 h-6" />,
    tooltip: "Total earnings this month",
  },
  {
    title: "Facilities Worked",
    value: "5",
    icon: <Users className="w-6 h-6" />,
    tooltip: "Number of different facilities worked at",
  },
];

const defaultCareHubMetrics: MetricCardProps[] = [
  {
    title: "Open Shifts",
    value: "12",
    change: -5,
    icon: <Calendar className="w-6 h-6" />,
    tooltip: "Current number of unfilled shifts",
  },
  {
    title: "Active Workers",
    value: "45",
    change: 10,
    icon: <Users className="w-6 h-6" />,
    tooltip: "Number of care workers currently engaged",
  },
  {
    title: "Fill Rate",
    value: "92%",
    change: 3,
    icon: <Clock className="w-6 h-6" />,
    tooltip: "Percentage of shifts successfully filled",
  },
  {
    title: "Monthly Spend",
    value: "£15,780",
    change: 8,
    icon: <CreditCard className="w-6 h-6" />,
    tooltip: "Total spending on temporary staff this month",
  },
];

const MetricsGrid = ({
  userType = "care-worker",
  metrics = userType === "care-worker"
    ? defaultCareWorkerMetrics
    : defaultCareHubMetrics,
}: MetricsGridProps) => {
  return (
    <div className="bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 p-6 rounded-xl shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/60 border-none">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
    </div>
  );
};

export default MetricsGrid;
