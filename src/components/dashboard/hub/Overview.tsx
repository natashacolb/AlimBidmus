import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import MetricsGrid from "../MetricsGrid";
import { Building2, Clock, Calendar, ChevronRight } from "lucide-react";

interface Activity {
  id: string;
  type: string;
  description: string;
  time: string;
}

const defaultActivities: Activity[] = [
  {
    id: "1",
    type: "Shift Confirmation",
    description: "Sarah Wilson accepted Morning Shift",
    time: "10 mins ago",
  },
  {
    id: "2",
    type: "Timesheet Submission",
    description: "New timesheet from John Smith",
    time: "1 hour ago",
  },
  {
    id: "3",
    type: "Incident Report",
    description: "New incident report filed",
    time: "2 hours ago",
  },
];

interface Shift {
  id: string;
  title: string;
  worker?: string;
  facility: string;
  time: string;
  status: "booked" | "open" | "in-progress";
}

const defaultShifts: Shift[] = [
  {
    id: "1",
    title: "Morning Shift - RGN",
    worker: "Sarah Wilson",
    facility: "St. Mary's Care Home",
    time: "07:00 - 15:00",
    status: "booked",
  },
  {
    id: "2",
    title: "Night Shift - HCA",
    facility: "Sunrise Senior Living",
    time: "20:00 - 08:00",
    status: "open",
  },
];

const Overview = () => {
  return (
    <div className="space-y-6 p-6 bg-slate-50/50">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Welcome back!</h2>
        <p className="text-muted-foreground">
          Here's what's happening at your facility
        </p>
      </div>

      <MetricsGrid userType="care-hub" />

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Today's Shifts</h3>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>

          <div className="space-y-4">
            {defaultShifts.map((shift) => (
              <div
                key={shift.id}
                className="flex items-center justify-between p-4 rounded-lg border group hover:border-primary transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium">{shift.title}</h4>
                    <Badge
                      variant={
                        shift.status === "booked"
                          ? "default"
                          : shift.status === "in-progress"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {shift.status}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                    <div className="flex items-center">
                      <Building2 className="w-4 h-4 mr-1" />
                      {shift.facility}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {shift.time}
                    </div>
                  </div>
                  {shift.worker && (
                    <Badge variant="secondary">{shift.worker}</Badge>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Recent Activity</h3>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>

          <div className="space-y-4">
            {defaultActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start justify-between p-4 rounded-lg border group hover:border-primary transition-colors"
              >
                <div className="space-y-1">
                  <h4 className="font-medium">{activity.type}</h4>
                  <p className="text-sm text-slate-500">
                    {activity.description}
                  </p>
                </div>
                <div className="text-sm text-slate-500">{activity.time}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Overview;
