import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertCircle,
  Filter,
  Clock,
  Building2,
  ArrowUpRight,
} from "lucide-react";

interface Incident {
  id: string;
  title: string;
  facility: string;
  date: string;
  severity: "low" | "medium" | "high";
  status: "open" | "in-review" | "resolved";
  description: string;
  worker?: string;
}

const defaultIncidents: Incident[] = [
  {
    id: "INC-2024-001",
    title: "Medication Administration Error",
    facility: "St. Mary's Care Home",
    date: "Today",
    severity: "high",
    status: "open",
    description: "Incorrect medication dosage administered",
    worker: "Sarah Wilson",
  },
  {
    id: "INC-2024-002",
    title: "Fall Incident",
    facility: "Sunrise Senior Living",
    date: "Yesterday",
    severity: "medium",
    status: "in-review",
    description: "Resident fall during transfer",
    worker: "John Smith",
  },
  {
    id: "INC-2024-003",
    title: "Documentation Issue",
    facility: "Green Meadows Care",
    date: "2 days ago",
    severity: "low",
    status: "resolved",
    description: "Missing care plan documentation",
    worker: "Emma Brown",
  },
];

const IncidentLog = () => {
  return (
    <div className="space-y-6 p-6 bg-slate-50/50">
      <Card className="p-4">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <Input placeholder="Search incidents..." />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filters
          </Button>
        </div>
      </Card>

      <Tabs defaultValue="open" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="open" className="flex gap-2">
            Open
            <Badge variant="secondary" className="ml-1">
              {defaultIncidents.filter((i) => i.status === "open").length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="in-review" className="flex gap-2">
            In Review
            <Badge variant="secondary" className="ml-1">
              {defaultIncidents.filter((i) => i.status === "in-review").length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="resolved" className="flex gap-2">
            Resolved
            <Badge variant="secondary" className="ml-1">
              {defaultIncidents.filter((i) => i.status === "resolved").length}
            </Badge>
          </TabsTrigger>
        </TabsList>

        <div className="grid gap-4">
          {defaultIncidents.map((incident) => (
            <Card key={incident.id} className="p-6">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold">
                        {incident.title}
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        {incident.id}
                      </Badge>
                      <Badge
                        variant={
                          incident.severity === "high"
                            ? "destructive"
                            : incident.severity === "medium"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {incident.severity.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-slate-500 mt-1">
                      <Building2 className="w-4 h-4 mr-1" />
                      {incident.facility}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 mr-1 text-slate-500" />
                      <span>{incident.date}</span>
                    </div>
                    {incident.worker && (
                      <Badge variant="secondary">{incident.worker}</Badge>
                    )}
                  </div>

                  <p className="text-sm text-slate-600">
                    {incident.description}
                  </p>
                </div>

                <div className="flex flex-col gap-3 justify-between items-end">
                  <Badge
                    variant={
                      incident.status === "resolved"
                        ? "default"
                        : incident.status === "in-review"
                          ? "secondary"
                          : "destructive"
                    }
                  >
                    {incident.status.split("-").join(" ").toUpperCase()}
                  </Badge>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    {incident.status !== "resolved" && (
                      <Button size="sm">
                        <ArrowUpRight className="w-4 h-4 mr-2" />
                        Escalate
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default IncidentLog;
