import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, CalendarDays, ChevronRight } from "lucide-react";

interface Shift {
  id: string;
  facility: string;
  location: string;
  date: string;
  time: string;
  status: "upcoming" | "in-progress" | "completed";
  payRate: string;
}

interface UpcomingShiftsProps {
  shifts?: Shift[];
}

const defaultShifts: Shift[] = [
  {
    id: "1",
    facility: "St. Mary's Care Home",
    location: "Manchester City Centre",
    date: "Today",
    time: "9:00 AM - 5:00 PM",
    status: "upcoming",
    payRate: "£18.50/hr",
  },
  {
    id: "2",
    facility: "Sunrise Senior Living",
    location: "Liverpool",
    date: "Tomorrow",
    time: "2:00 PM - 10:00 PM",
    status: "upcoming",
    payRate: "£19.00/hr",
  },
  {
    id: "3",
    facility: "Green Meadows Care",
    location: "Leeds",
    date: "In 2 days",
    time: "7:00 AM - 3:00 PM",
    status: "upcoming",
    payRate: "£20.00/hr",
  },
];

const UpcomingShifts = ({ shifts = defaultShifts }: UpcomingShiftsProps) => {
  return (
    <Card className="p-4 bg-gradient-to-br from-indigo-50/50 via-purple-50/50 to-pink-50/50 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-none shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Upcoming Shifts</h3>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>

      <div className="space-y-4">
        {shifts.map((shift) => (
          <div
            key={shift.id}
            className="p-4 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors group"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-slate-900 group-hover:text-primary transition-colors">
                    {shift.facility}
                  </h4>
                  <div className="flex items-center text-sm text-slate-500 mt-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    {shift.location}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center text-sm">
                    <CalendarDays className="w-4 h-4 mr-1 text-slate-500" />
                    <span>{shift.date}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-1 text-slate-500" />
                    <span>{shift.time}</span>
                  </div>
                  <Badge variant="secondary" className="font-medium">
                    {shift.payRate}
                  </Badge>
                </div>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="text-slate-400 hover:text-primary"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default UpcomingShifts;
