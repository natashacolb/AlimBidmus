import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MapPin, Clock, Banknote, Filter } from "lucide-react";
import BookShiftModal from "./BookShiftModal";
import { useShiftStore } from "@/lib/store";
import type { Shift } from "@/lib/store";

const AvailableShifts = () => {
  const [selectedShift, setSelectedShift] = React.useState<Shift | null>(null);
  const shifts = useShiftStore((state) => state.getAvailableShifts());
  const bookShift = useShiftStore((state) => state.bookShift);

  const handleBookShift = (shift: Shift) => {
    setSelectedShift(shift);
  };

  const handleConfirmBooking = () => {
    if (selectedShift) {
      bookShift(selectedShift.id, "John Doe");
      setSelectedShift(null);
      alert("Shift booked successfully! Please wait for approval.");
    }
  };

  return (
    <div className="space-y-6 p-6 bg-slate-50/50">
      <Card className="p-4">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <Input placeholder="Search by facility or location" />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filters
          </Button>
        </div>
      </Card>

      <div className="grid gap-4">
        {shifts.map((shift) => (
          <Card
            key={shift.id}
            className="p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-3">
                <div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-slate-900">
                        {shift.facility}
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        ID: {shift.id}
                      </Badge>
                    </div>
                    <Badge variant="secondary">{shift.role}</Badge>
                  </div>
                  <div className="flex items-center text-sm text-slate-500 mt-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    {shift.location}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-1 text-slate-500" />
                    <span>{shift.time}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Banknote className="w-4 h-4 mr-1 text-slate-500" />
                    <span>{shift.payRate}</span>
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
                <Button
                  className="w-full md:w-auto"
                  onClick={() => handleBookShift(shift)}
                >
                  Book Shift
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
      {selectedShift && (
        <BookShiftModal
          isOpen={true}
          onClose={() => setSelectedShift(null)}
          shift={selectedShift}
          onConfirm={handleConfirmBooking}
        />
      )}
    </div>
  );
};

export default AvailableShifts;
