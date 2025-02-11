import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Banknote, CalendarDays } from "lucide-react";

interface BookShiftModalProps {
  isOpen: boolean;
  onClose: () => void;
  shift: {
    id: string;
    facility: string;
    location: string;
    date: string;
    time: string;
    payRate: string;
    role: string;
    requiredSkills: string[];
  };
  onConfirm: () => void;
}

const BookShiftModal = ({
  isOpen,
  onClose,
  shift,
  onConfirm,
}: BookShiftModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Book Shift</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold">{shift.facility}</h3>
              <Badge variant="outline" className="text-xs">
                {shift.id}
              </Badge>
            </div>
            <Badge variant="secondary">{shift.role}</Badge>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <CalendarDays className="w-4 h-4 text-slate-500" />
              <span>{shift.date}</span>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="w-4 h-4 text-slate-500" />
              <span>{shift.time}</span>
            </div>
            <div className="flex items-center gap-4">
              <Banknote className="w-4 h-4 text-slate-500" />
              <span>{shift.payRate}</span>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-4 h-4 text-slate-500 mt-1" />
              <span>{shift.location}</span>
            </div>
          </div>

          <div className="h-[200px] bg-slate-100 rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(
                shift.location,
              )}`}
              allowFullScreen
            />
          </div>

          <div>
            <h4 className="font-medium mb-2">Required Skills</h4>
            <div className="flex flex-wrap gap-2">
              {shift.requiredSkills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <DialogFooter className="flex gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onConfirm}>Confirm Booking</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BookShiftModal;
