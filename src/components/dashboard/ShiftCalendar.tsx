import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { addDays } from "date-fns";

interface Shift {
  id: string;
  date: Date;
  startTime: string;
  endTime: string;
  facility: string;
  status: "upcoming" | "completed" | "cancelled";
}

interface ShiftCalendarProps {
  shifts?: Shift[];
  selectedDate?: Date;
  onDateSelect?: (date: Date | undefined) => void;
}

const defaultShifts: Shift[] = [
  {
    id: "1",
    date: new Date(),
    startTime: "09:00",
    endTime: "17:00",
    facility: "Care Home A",
    status: "upcoming",
  },
  {
    id: "2",
    date: addDays(new Date(), 2),
    startTime: "10:00",
    endTime: "18:00",
    facility: "Care Home B",
    status: "upcoming",
  },
  {
    id: "3",
    date: addDays(new Date(), -1),
    startTime: "08:00",
    endTime: "16:00",
    facility: "Care Home C",
    status: "completed",
  },
];

const ShiftCalendar: React.FC<ShiftCalendarProps> = ({
  shifts = defaultShifts,
  selectedDate = new Date(),
  onDateSelect = () => {},
}) => {
  const getDayContent = (day: Date) => {
    const dayShifts = shifts.filter(
      (shift) => shift.date.toDateString() === day.toDateString(),
    );

    if (dayShifts.length === 0) return null;

    return (
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Badge
                variant="secondary"
                className="h-1.5 w-1.5 rounded-full p-0"
              />
            </TooltipTrigger>
            <TooltipContent>
              <div className="space-y-1">
                {dayShifts.map((shift) => (
                  <div key={shift.id} className="text-sm">
                    <p className="font-semibold">{shift.facility}</p>
                    <p className="text-xs text-muted-foreground">
                      {shift.startTime} - {shift.endTime}
                    </p>
                  </div>
                ))}
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    );
  };

  return (
    <Card className="p-4 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Shift Calendar</h3>
          <div className="flex space-x-2">
            <Badge variant="outline" className="bg-blue-50">
              {shifts.filter((s) => s.status === "upcoming").length} Upcoming
            </Badge>
            <Badge variant="outline" className="bg-green-50">
              {shifts.filter((s) => s.status === "completed").length} Completed
            </Badge>
          </div>
        </div>
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={onDateSelect}
          className="rounded-md border"
          components={{
            DayContent: ({ date }) => getDayContent(date),
          }}
        />
      </div>
    </Card>
  );
};

export default ShiftCalendar;
