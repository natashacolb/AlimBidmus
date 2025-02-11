import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Clock, Calendar, Filter } from "lucide-react";
import { useShiftStore } from "@/lib/store";

const ManageShifts = () => {
  const shifts = useShiftStore((state) => state.shifts);
  const approveShift = useShiftStore((state) => state.approveShift);
  const rejectShift = useShiftStore((state) => state.rejectShift);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [activeTab, setActiveTab] = React.useState("pending");

  const filteredShifts = shifts.filter((shift) => {
    const matchesSearch =
      shift.facility.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shift.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTab = activeTab === "all" || shift.status === activeTab;

    return matchesSearch && matchesTab;
  });

  return (
    <div className="space-y-6 p-6 bg-slate-50/50">
      <Card className="p-4">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <Input
              placeholder="Search shifts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filters
          </Button>
        </div>
      </Card>

      <Tabs defaultValue="pending" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
            All
            <Badge variant="secondary" className="ml-2">
              {shifts.length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="pending" onClick={() => setActiveTab("pending")}>
            Pending
            <Badge variant="secondary" className="ml-2">
              {shifts.filter((s) => s.status === "pending").length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger
            value="approved"
            onClick={() => setActiveTab("approved")}
          >
            Approved
            <Badge variant="secondary" className="ml-2">
              {shifts.filter((s) => s.status === "approved").length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger
            value="rejected"
            onClick={() => setActiveTab("rejected")}
          >
            Rejected
            <Badge variant="secondary" className="ml-2">
              {shifts.filter((s) => s.status === "rejected").length}
            </Badge>
          </TabsTrigger>
        </TabsList>

        <div className="grid gap-4">
          {filteredShifts.map((shift) => (
            <Card key={shift.id} className="p-6">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold">
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
                      <Calendar className="w-4 h-4 mr-1 text-slate-500" />
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

                <div className="flex flex-col gap-3 justify-between items-end">
                  {shift.status === "pending" && (
                    <div className="flex gap-2">
                      <Button
                        onClick={() => approveShift(shift.id)}
                        className="bg-green-500 hover:bg-green-600"
                      >
                        Approve
                      </Button>
                      <Button
                        onClick={() => rejectShift(shift.id)}
                        variant="destructive"
                      >
                        Reject
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default ManageShifts;
