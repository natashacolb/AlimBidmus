import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  FileCheck,
  Filter,
  Building2,
  Clock,
  FileText,
  Receipt,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TimesheetEntry {
  id: string;
  careHub: {
    name: string;
    avatar: string;
  };
  period: string;
  totalHours: number;
  totalAmount: string;
  status: "pending" | "approved" | "invoiced";
  submittedDate: string;
  workers: number;
}

const defaultEntries: TimesheetEntry[] = [
  {
    id: "TS-2024-001",
    careHub: {
      name: "Sunrise Care Home",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=SCH",
    },
    period: "March 1-15, 2024",
    totalHours: 450,
    totalAmount: "£8,325.00",
    status: "pending",
    submittedDate: "March 16, 2024",
    workers: 12,
  },
  {
    id: "TS-2024-002",
    careHub: {
      name: "St. Mary's Care",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=SMC",
    },
    period: "March 1-15, 2024",
    totalHours: 380,
    totalAmount: "£7,030.00",
    status: "approved",
    submittedDate: "March 15, 2024",
    workers: 8,
  },
  {
    id: "TS-2024-003",
    careHub: {
      name: "Green Meadows",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=GM",
    },
    period: "March 1-15, 2024",
    totalHours: 520,
    totalAmount: "£9,620.00",
    status: "invoiced",
    submittedDate: "March 14, 2024",
    workers: 15,
  },
];

const TimesheetApprovals = () => {
  return (
    <div className="space-y-6 p-6 bg-slate-50/50">
      <Card className="p-4">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <Input placeholder="Search timesheets..." />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filters
          </Button>
        </div>
      </Card>

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
          <TabsTrigger value="invoiced" className="flex gap-2">
            Invoiced
            <Badge variant="secondary" className="ml-1">
              {defaultEntries.filter((e) => e.status === "invoiced").length}
            </Badge>
          </TabsTrigger>
        </TabsList>

        <Card className="p-6">
          <div className="space-y-6">
            <div className="divide-y">
              {defaultEntries.map((entry) => (
                <div key={entry.id} className="py-4 first:pt-0 last:pb-0">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              src={entry.careHub.avatar}
                              alt={entry.careHub.name}
                            />
                            <AvatarFallback>
                              {entry.careHub.name[0]}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-medium">
                              {entry.careHub.name}
                            </h4>
                            <div className="text-sm text-muted-foreground">
                              {entry.id}
                            </div>
                          </div>
                        </div>
                        <Badge
                          variant={
                            entry.status === "invoiced"
                              ? "default"
                              : entry.status === "approved"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {entry.status.charAt(0).toUpperCase() +
                            entry.status.slice(1)}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {entry.totalHours} hours
                        </div>
                        <div className="flex items-center">
                          <Building2 className="w-4 h-4 mr-1" />
                          {entry.workers} workers
                        </div>
                        <div className="flex items-center">
                          <FileText className="w-4 h-4 mr-1" />
                          Submitted: {entry.submittedDate}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-sm text-slate-500">
                          Total Amount
                        </div>
                        <div className="font-medium">{entry.totalAmount}</div>
                      </div>

                      <div className="flex gap-2">
                        {entry.status === "pending" && (
                          <Button
                            size="sm"
                            className="bg-green-500 hover:bg-green-600"
                          >
                            <FileCheck className="w-4 h-4 mr-2" />
                            Approve
                          </Button>
                        )}
                        {entry.status === "approved" && (
                          <Button size="sm">
                            <Receipt className="w-4 h-4 mr-2" />
                            Generate Invoice
                          </Button>
                        )}
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </Tabs>
    </div>
  );
};

export default TimesheetApprovals;
