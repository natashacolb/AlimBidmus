import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Clock, CalendarDays, FileText } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface InvoiceShift {
  date: string;
  hours: number;
  rate: number;
  total: number;
}

interface Invoice {
  id: string;
  period: string;
  dueDate: string;
  worker: {
    name: string;
    avatar: string;
  };
  totalHours: number;
  amount: string;
  status: "paid" | "pending" | "overdue";
  timesheets: number;
  shifts: InvoiceShift[];
}

const defaultInvoices: Invoice[] = [
  {
    id: "INV-2024-001",
    period: "March 2024",
    dueDate: "31 Mar 2024",
    worker: {
      name: "Sarah Wilson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    totalHours: 450,
    amount: "£8,325.00",
    status: "pending",
    timesheets: 25,
    shifts: [
      {
        date: "2024-03-15",
        hours: 12,
        rate: 18.5,
        total: 222.0,
      },
      {
        date: "2024-03-16",
        hours: 8,
        rate: 19.0,
        total: 152.0,
      },
    ],
  },
  {
    id: "INV-2024-002",
    period: "February 2024",
    dueDate: "29 Feb 2024",
    worker: {
      name: "John Smith",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    },
    totalHours: 380,
    amount: "£7,030.00",
    status: "paid",
    timesheets: 20,
    shifts: [
      {
        date: "2024-02-28",
        hours: 8,
        rate: 18.5,
        total: 148.0,
      },
      {
        date: "2024-02-29",
        hours: 12,
        rate: 19.0,
        total: 228.0,
      },
    ],
  },
];

const Invoice = () => {
  return (
    <div className="space-y-6 p-6 bg-slate-50/50">
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Total Paid</h3>
              <FileText className="w-4 h-4 text-green-500" />
            </div>
            <div>
              <div className="text-2xl font-bold">£23,125.00</div>
              <p className="text-sm text-slate-500">Last 3 months</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-yellow-50 to-amber-50">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Pending</h3>
              <Clock className="w-4 h-4 text-yellow-500" />
            </div>
            <div>
              <div className="text-2xl font-bold">£8,325.00</div>
              <p className="text-sm text-slate-500">Current month</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-red-50 to-rose-50">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Overdue</h3>
              <FileText className="w-4 h-4 text-red-500" />
            </div>
            <div>
              <div className="text-2xl font-bold">£7,770.00</div>
              <p className="text-sm text-slate-500">Past due</p>
            </div>
          </div>
        </Card>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="paid">Paid</TabsTrigger>
          <TabsTrigger value="overdue">Overdue</TabsTrigger>
        </TabsList>

        <Card className="p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Worker Payments</h3>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export All
              </Button>
            </div>

            <div className="divide-y">
              {defaultInvoices.map((invoice) => (
                <div key={invoice.id} className="py-4 first:pt-0 last:pb-0">
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage
                                src={invoice.worker.avatar}
                                alt={invoice.worker.name}
                              />
                              <AvatarFallback>
                                {invoice.worker.name[0]}
                              </AvatarFallback>
                            </Avatar>
                            <h4 className="font-medium">
                              {invoice.worker.name}
                            </h4>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {invoice.id}
                          </Badge>
                          <Badge
                            variant={
                              invoice.status === "paid"
                                ? "default"
                                : invoice.status === "pending"
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {invoice.status.charAt(0).toUpperCase() +
                              invoice.status.slice(1)}
                          </Badge>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {invoice.totalHours} hours
                          </div>
                          <div className="flex items-center">
                            <CalendarDays className="w-4 h-4 mr-1" />
                            Due: {invoice.dueDate}
                          </div>
                          <div className="flex items-center">
                            <FileText className="w-4 h-4 mr-1" />
                            {invoice.timesheets} timesheets
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <div className="text-sm text-slate-500">
                            Total Pay
                          </div>
                          <div className="font-medium">{invoice.amount}</div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="border rounded-lg overflow-hidden">
                      <table className="w-full">
                        <thead className="bg-slate-50">
                          <tr>
                            <th className="px-4 py-2 text-left text-sm font-medium text-slate-500">
                              Date
                            </th>
                            <th className="px-4 py-2 text-right text-sm font-medium text-slate-500">
                              Hours
                            </th>
                            <th className="px-4 py-2 text-right text-sm font-medium text-slate-500">
                              Rate
                            </th>
                            <th className="px-4 py-2 text-right text-sm font-medium text-slate-500">
                              Total
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          {invoice.shifts.map((shift, index) => (
                            <tr key={index} className="hover:bg-slate-50">
                              <td className="px-4 py-2 text-sm">
                                {shift.date}
                              </td>
                              <td className="px-4 py-2 text-sm text-right">
                                {shift.hours}
                              </td>
                              <td className="px-4 py-2 text-sm text-right">
                                £{shift.rate.toFixed(2)}
                              </td>
                              <td className="px-4 py-2 text-sm font-medium text-right">
                                £{shift.total.toFixed(2)}
                              </td>
                            </tr>
                          ))}
                          <tr className="bg-slate-50 font-medium">
                            <td colSpan={2} className="px-4 py-2 text-sm">
                              Total
                            </td>
                            <td className="px-4 py-2 text-sm text-right">-</td>
                            <td className="px-4 py-2 text-sm text-right">
                              {invoice.amount}
                            </td>
                          </tr>
                        </tbody>
                      </table>
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

export default Invoice;
