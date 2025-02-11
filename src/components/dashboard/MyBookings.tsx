import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Clock, CalendarDays } from "lucide-react";
import { useShiftStore, type Shift } from "@/lib/store";

const MyBookings = () => {
  const getBookedShifts = useShiftStore((state) => state.getBookedShifts);
  const [shifts, setShifts] = React.useState<Shift[]>([]);

  // Poll for shifts every 5 seconds
  React.useEffect(() => {
    const updateShifts = () => {
      const bookedShifts = getBookedShifts();
      setShifts(bookedShifts);
    };

    // Initial load
    updateShifts();

    // Set up polling
    const interval = setInterval(updateShifts, 5000);

    return () => clearInterval(interval);
  }, [getBookedShifts]);

  const pendingShifts = shifts.filter((shift) => shift.status === "pending");
  const approvedShifts = shifts.filter((shift) => shift.status === "approved");
  const rejectedShifts = shifts.filter((shift) => shift.status === "rejected");

  const renderShift = (shift: Shift) => (
    <Card key={shift.id} className="p-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="space-y-3">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-slate-900">
                {shift.facility}
              </h3>
              <Badge variant="outline" className="text-xs">
                {shift.id}
              </Badge>
              <Badge
                variant={
                  shift.status === "approved"
                    ? "default"
                    : shift.status === "rejected"
                      ? "destructive"
                      : "secondary"
                }
              >
                {shift.status.toUpperCase()}
              </Badge>
            </div>
            <div className="flex items-center text-sm text-slate-500 mt-1">
              <MapPin className="w-4 h-4 mr-1" />
              {shift.location}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center text-sm">
              <CalendarDays className="w-4 h-4 mr-1 text-slate-500" />
              <span>{shift.date}</span>
            </div>
            <div className="flex items-center text-sm">
              <Clock className="w-4 h-4 mr-1 text-slate-500" />
              <span>{shift.time}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {shift.requiredSkills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="w-full md:w-auto">
            View Details
          </Button>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="space-y-6 p-6 bg-slate-50/50">
      <Tabs defaultValue="pending" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="pending" className="flex gap-2">
            Pending
            <Badge variant="secondary" className="ml-1">
              {pendingShifts.length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="approved" className="flex gap-2">
            Approved
            <Badge variant="secondary" className="ml-1">
              {approvedShifts.length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="rejected" className="flex gap-2">
            Rejected
            <Badge variant="secondary" className="ml-1">
              {rejectedShifts.length}
            </Badge>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4">
          {pendingShifts.map(renderShift)}
        </TabsContent>

        <TabsContent value="approved" className="space-y-4">
          {approvedShifts.map(renderShift)}
        </TabsContent>

        <TabsContent value="rejected" className="space-y-4">
          {rejectedShifts.map(renderShift)}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MyBookings;
