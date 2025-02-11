import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Download, Star, Building2, Clock } from "lucide-react";

interface PerformanceMetric {
  facility: string;
  rating: number;
  shiftsCompleted: number;
  totalHours: number;
  period: string;
}

const defaultMetrics: PerformanceMetric[] = [
  {
    facility: "St. Mary's Care Home",
    rating: 4.8,
    shiftsCompleted: 24,
    totalHours: 192,
    period: "Last 3 months",
  },
  {
    facility: "Sunrise Senior Living",
    rating: 4.5,
    shiftsCompleted: 18,
    totalHours: 144,
    period: "Last 3 months",
  },
  {
    facility: "Green Meadows Care",
    rating: 4.9,
    shiftsCompleted: 12,
    totalHours: 96,
    period: "Last 3 months",
  },
];

const Report = () => {
  return (
    <div className="space-y-6 p-6 bg-slate-50/50">
      <div className="flex justify-end">
        <Button variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Export Report
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Average Rating</h3>
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
            </div>
            <div>
              <div className="text-2xl font-bold">4.7</div>
              <p className="text-sm text-slate-500">Last 3 months</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Total Shifts</h3>
              <Building2 className="w-4 h-4 text-purple-500" />
            </div>
            <div>
              <div className="text-2xl font-bold">54</div>
              <p className="text-sm text-slate-500">Last 3 months</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Total Hours</h3>
              <Clock className="w-4 h-4 text-green-500" />
            </div>
            <div>
              <div className="text-2xl font-bold">432</div>
              <p className="text-sm text-slate-500">Last 3 months</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Facility Performance</h3>
            <Button variant="outline" size="sm">
              <BarChart3 className="w-4 h-4 mr-2" />
              View Details
            </Button>
          </div>

          <div className="divide-y">
            {defaultMetrics.map((metric, index) => (
              <div key={index} className="py-4 first:pt-0 last:pb-0">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h4 className="font-medium">{metric.facility}</h4>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-medium">{metric.rating}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Badge variant="secondary">
                      {metric.shiftsCompleted} shifts
                    </Badge>
                    <Badge variant="secondary">{metric.totalHours} hours</Badge>
                    <Badge variant="outline">{metric.period}</Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Report;
