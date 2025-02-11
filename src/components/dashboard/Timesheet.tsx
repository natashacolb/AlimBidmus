import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, Clock, FileCheck, Building2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TimesheetEntry {
  id: string;
  worker: {
    name: string;
    avatar: string;
  };
  date: string;
  hours: string;
  status: "pending" | "approved" | "rejected";
  totalPay: string;
}

const defaultEntries: TimesheetEntry[] = [
  {
    id: "TIME-2024-001",
    worker: {
      name: "Sarah Wilson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    date: "Today",
    hours: "8 hours",
    status: "pending",
    totalPay: "£144.00",
  },
  {
    id: "TIME-2024-002",
    worker: {
      name: "John Smith",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    },
    date: "Yesterday",
    hours: "12 hours",
    status: "approved",
    totalPay: "£216.00",
  },
  {
    id: "TIME-2024-003",
    worker: {
      name: "Emma Brown",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    },
    date: "2 days ago",
    hours: "6 hours",
    status: "rejected",
    totalPay: "£108.00",
  },
];

const TimesheetEntry = ({ entry }: { entry: TimesheetEntry }) => (
  <div key={entry.id} className="py-4 first:pt-0 last:pb-0">
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage
                  src={entry.worker.avatar}
                  alt={entry.worker.name}
                />
                <AvatarFallback>{entry.worker.name[0]}</AvatarFallback>
              </Avatar>
              <h4 className="font-medium">{entry.worker.name}</h4>
            </div>
            <Badge variant="outline" className="text-xs">
              TS-{entry.id}
            </Badge>
          </div>
          <Badge
            variant={
              entry.status === "approved"
                ? "default"
                : entry.status === "pending"
                  ? "secondary"
                  : "destructive"
            }
          >
            {entry.status.charAt(0).toUpperCase() + entry.status.slice(1)}
          </Badge>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
          <div className="flex items-center">
            <CalendarDays className="w-4 h-4 mr-1" />
            {entry.date}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {entry.hours}
          </div>
          <div className="flex items-center">
            <Building2 className="w-4 h-4 mr-1" />
            {entry.totalPay}
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <Button variant="outline" size="sm">
          View Details
        </Button>
        {entry.status === "pending" && <Button size="sm">Sign & Submit</Button>}
      </div>
    </div>
  </div>
);

const Timesheet = () => {
  return (
    <div className="space-y-6 p-6 bg-slate-50/50">
      <div className="flex justify-end">
        <Button>
          <FileCheck className="w-4 h-4 mr-2" />
          Submit New
        </Button>
      </div>

      <Tabs defaultValue="pending" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="pending" className="flex gap-2">
            Pending
            <Badge variant="secondary" className="ml-1">
              {defaultEntries.filter((e) => e.status === "pending").length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="approved" className="flex gap-2">
            Approved
            <Badge variant="secondary" className="ml-1">
              {defaultEntries.filter((e) => e.status === "approved").length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="rejected" className="flex gap-2">
            Rejected
            <Badge variant="secondary" className="ml-1">
              {defaultEntries.filter((e) => e.status === "rejected").length}
            </Badge>
          </TabsTrigger>
        </TabsList>

        <Card className="p-6">
          <TabsContent value="pending" className="space-y-4 mt-0">
            <div className="divide-y">
              {defaultEntries
                .filter((entry) => entry.status === "pending")
                .map((entry) => (
                  <TimesheetEntry key={entry.id} entry={entry} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="approved" className="space-y-4 mt-0">
            <div className="divide-y">
              {defaultEntries
                .filter((entry) => entry.status === "approved")
                .map((entry) => (
                  <TimesheetEntry key={entry.id} entry={entry} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="rejected" className="space-y-4 mt-0">
            <div className="divide-y">
              {defaultEntries
                .filter((entry) => entry.status === "rejected")
                .map((entry) => (
                  <TimesheetEntry key={entry.id} entry={entry} />
                ))}
            </div>
          </TabsContent>
        </Card>
      </Tabs>
    </div>
  );
};

export default Timesheet;
