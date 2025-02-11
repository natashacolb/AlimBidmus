import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, Download, TrendingUp, Users, Clock } from "lucide-react";

const Reports = () => {
  return (
    <div className="space-y-6 p-6 bg-slate-50/50">
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Fill Rate</h3>
              <TrendingUp className="w-4 h-4 text-blue-500" />
            </div>
            <div>
              <div className="text-2xl font-bold">92%</div>
              <p className="text-sm text-slate-500">Last 30 days</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Active Workers</h3>
              <Users className="w-4 h-4 text-green-500" />
            </div>
            <div>
              <div className="text-2xl font-bold">45</div>
              <p className="text-sm text-slate-500">This month</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Total Hours</h3>
              <Clock className="w-4 h-4 text-purple-500" />
            </div>
            <div>
              <div className="text-2xl font-bold">1,248</div>
              <p className="text-sm text-slate-500">This month</p>
            </div>
          </div>
        </Card>
      </div>

      <Tabs defaultValue="shifts" className="w-full">
        <TabsList className="w-full justify-start mb-6">
          <TabsTrigger value="shifts">Shift Reports</TabsTrigger>
          <TabsTrigger value="workers">Worker Performance</TabsTrigger>
          <TabsTrigger value="financial">Financial Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="shifts" className="mt-0">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Shift Analytics</h3>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>

            <div className="space-y-6">
              <div className="grid gap-4">
                {[
                  {
                    label: "Total Shifts Posted",
                    value: "156",
                    change: "+12%",
                  },
                  { label: "Shifts Filled", value: "143", change: "+8%" },
                  { label: "Average Fill Time", value: "6h", change: "-25%" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="space-y-1">
                      <p className="text-sm text-slate-500">{stat.label}</p>
                      <p className="text-2xl font-semibold">{stat.value}</p>
                    </div>
                    <Badge
                      variant={
                        stat.change.startsWith("+") ? "default" : "destructive"
                      }
                    >
                      {stat.change}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="workers" className="mt-0">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Worker Performance</h3>
              <Button variant="outline">
                <BarChart3 className="w-4 h-4 mr-2" />
                View Details
              </Button>
            </div>

            <div className="space-y-4">
              {[
                {
                  name: "Sarah Wilson",
                  role: "Registered Nurse",
                  shifts: 24,
                  rating: 4.8,
                  attendance: "98%",
                },
                {
                  name: "John Smith",
                  role: "Healthcare Assistant",
                  shifts: 18,
                  rating: 4.5,
                  attendance: "95%",
                },
              ].map((worker, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg flex flex-col md:flex-row justify-between gap-4"
                >
                  <div>
                    <h4 className="font-medium">{worker.name}</h4>
                    <p className="text-sm text-slate-500">{worker.role}</p>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Badge variant="secondary">{worker.shifts} shifts</Badge>
                    <Badge variant="outline">{worker.rating} ★</Badge>
                    <Badge
                      variant={
                        parseInt(worker.attendance) >= 95
                          ? "default"
                          : "destructive"
                      }
                    >
                      {worker.attendance} attendance
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="financial" className="mt-0">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Financial Overview</h3>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>

            <div className="space-y-6">
              <div className="grid gap-4">
                {[
                  { label: "Total Spend", value: "£15,780", change: "+8%" },
                  {
                    label: "Average Hourly Rate",
                    value: "£18.50",
                    change: "+2%",
                  },
                  {
                    label: "Pending Payments",
                    value: "£2,340",
                    change: "-15%",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="space-y-1">
                      <p className="text-sm text-slate-500">{stat.label}</p>
                      <p className="text-2xl font-semibold">{stat.value}</p>
                    </div>
                    <Badge
                      variant={
                        stat.change.startsWith("+") ? "default" : "destructive"
                      }
                    >
                      {stat.change}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Reports;
