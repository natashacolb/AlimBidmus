import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, TrendingUp, Clock, CalendarDays } from "lucide-react";

interface Payslip {
  id: string;
  period: string;
  date: string;
  hours: string;
  grossPay: string;
  netPay: string;
  status: "paid" | "processing";
}

const defaultPayslips: Payslip[] = [
  {
    id: "PAY-2024-001",
    period: "March 2024",
    date: "25 Mar 2024",
    hours: "160 hours",
    grossPay: "£2,880.00",
    netPay: "£2,304.00",
    status: "paid",
  },
  {
    id: "PAY-2024-002",
    period: "February 2024",
    date: "25 Feb 2024",
    hours: "144 hours",
    grossPay: "£2,592.00",
    netPay: "£2,073.60",
    status: "paid",
  },
  {
    id: "PAY-2024-003",
    period: "January 2024",
    date: "25 Jan 2024",
    hours: "152 hours",
    grossPay: "£2,736.00",
    netPay: "£2,188.80",
    status: "paid",
  },
];

const Payslips = () => {
  return (
    <div className="space-y-6 p-6 bg-slate-50/50">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Total Earnings</h3>
              <TrendingUp className="w-4 h-4 text-green-500" />
            </div>
            <div>
              <div className="text-2xl font-bold">£7,208.40</div>
              <p className="text-sm text-slate-500">Last 3 months</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Recent Payslips</h3>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Download All
            </Button>
          </div>

          <div className="divide-y">
            {defaultPayslips.map((payslip) => (
              <div key={payslip.id} className="py-4 first:pt-0 last:pb-0">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{payslip.period}</h4>
                        <Badge variant="outline" className="text-xs">
                          PS-{payslip.id}
                        </Badge>
                      </div>
                      <Badge
                        variant={
                          payslip.status === "paid" ? "default" : "secondary"
                        }
                      >
                        {payslip.status.charAt(0).toUpperCase() +
                          payslip.status.slice(1)}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                      <div className="flex items-center">
                        <CalendarDays className="w-4 h-4 mr-1" />
                        {payslip.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {payslip.hours}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className="text-sm text-slate-500">Gross Pay</div>
                      <div className="font-medium">{payslip.grossPay}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-500">Net Pay</div>
                      <div className="font-medium">{payslip.netPay}</div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Payslips;
