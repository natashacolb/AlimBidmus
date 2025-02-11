import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import MetricsGrid from "../MetricsGrid";
import { Building2, Clock, Calendar, ChevronRight } from "lucide-react";

const defaultMetrics = [
  {
    title: "Total Shifts",
    value: "1,248",
    change: 12,
    icon: <Calendar className="w-6 h-6" />,
    tooltip: "Total shifts across all care hubs",
  },
  {
    title: "Active Workers",
    value: "156",
    change: 8,
    icon: <Clock className="w-6 h-6" />,
    tooltip: "Currently active care workers",
  },
  {
    title: "Care Hubs",
    value: "24",
    change: 15,
    icon: <Building2 className="w-6 h-6" />,
    tooltip: "Connected care facilities",
  },
  {
    title: "Fill Rate",
    value: "92%",
    icon: <Clock className="w-6 h-6" />,
    tooltip: "Average shift fill rate",
  },
];

const Overview = () => {
  return (
    <div className="space-y-6 p-6 bg-slate-50/50">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Agency Dashboard</h2>
        <p className="text-muted-foreground">
          Monitor and manage care worker placements across all facilities
        </p>
      </div>

      <MetricsGrid metrics={defaultMetrics} />

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Recent Onboarding</h3>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
          {/* Add onboarding content */}
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Pending Approvals</h3>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
          {/* Add pending approvals content */}
        </Card>
      </div>
    </div>
  );
};

export default Overview;
