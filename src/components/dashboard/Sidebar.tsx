import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  Home,
  Users,
  FileText,
  CreditCard,
  AlertCircle,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";
import { useLocation } from "react-router-dom";

interface SidebarProps {
  userType?: "care-worker" | "care-hub" | "care-agency";
  onNavigate?: (path: string) => void;
}

interface NavItem {
  label: string;
  icon: React.ReactNode;
  path: string;
  bgColor?: string;
}

const careWorkerNavItems: NavItem[] = [
  {
    label: "Overview",
    icon: <Home className="w-5 h-5 text-blue-500" />,
    path: "/careworkerdashboard",
    bgColor: "bg-blue-50",
  },
  {
    label: "Available Shifts",
    icon: <Calendar className="w-5 h-5 text-purple-500" />,
    path: "/careworkerdashboard/shifts",
    bgColor: "bg-purple-50",
  },
  {
    label: "My Bookings",
    icon: <Clock className="w-5 h-5 text-indigo-500" />,
    path: "/careworkerdashboard/bookings",
    bgColor: "bg-indigo-50",
  },
  {
    label: "My Availability",
    icon: <Calendar className="w-5 h-5 text-green-500" />,
    path: "/careworkerdashboard/availability",
    bgColor: "bg-green-50",
  },
  {
    label: "Timesheet",
    icon: <FileText className="w-5 h-5 text-yellow-500" />,
    path: "/careworkerdashboard/timesheet",
    bgColor: "bg-yellow-50",
  },
  {
    label: "Payslips",
    icon: <CreditCard className="w-5 h-5 text-pink-500" />,
    path: "/careworkerdashboard/payslips",
    bgColor: "bg-pink-50",
  },
  {
    label: "Report",
    icon: <AlertCircle className="w-5 h-5 text-red-500" />,
    path: "/careworkerdashboard/report",
    bgColor: "bg-red-50",
  },
];

const careAgencyNavItems: NavItem[] = [
  {
    label: "Overview",
    icon: <Home className="w-5 h-5 text-blue-500" />,
    path: "/careagencydashboard",
    bgColor: "bg-blue-50",
  },
  {
    label: "Worker Management",
    icon: <Users className="w-5 h-5 text-purple-500" />,
    path: "/careagencydashboard/workers",
    bgColor: "bg-purple-50",
  },
  {
    label: "Shift Monitoring",
    icon: <Clock className="w-5 h-5 text-indigo-500" />,
    path: "/careagencydashboard/shifts",
    bgColor: "bg-indigo-50",
  },
  {
    label: "Incident Resolution",
    icon: <AlertCircle className="w-5 h-5 text-red-500" />,
    path: "/careagencydashboard/incidents",
    bgColor: "bg-red-50",
  },
  {
    label: "Timesheet Approvals",
    icon: <FileText className="w-5 h-5 text-yellow-500" />,
    path: "/careagencydashboard/timesheets",
    bgColor: "bg-yellow-50",
  },
  {
    label: "Financial Dashboard",
    icon: <CreditCard className="w-5 h-5 text-green-500" />,
    path: "/careagencydashboard/finance",
    bgColor: "bg-green-50",
  },
  {
    label: "Reports & Compliance",
    icon: <BarChart3 className="w-5 h-5 text-orange-500" />,
    path: "/careagencydashboard/reports",
    bgColor: "bg-orange-50",
  },
];

const careHubNavItems: NavItem[] = [
  {
    label: "Overview",
    icon: <Home className="w-5 h-5 text-blue-500" />,
    path: "/carehubdashboard",
    bgColor: "bg-blue-50",
  },
  {
    label: "Post Shifts",
    icon: <Calendar className="w-5 h-5 text-purple-500" />,
    path: "/carehubdashboard/post-shifts",
    bgColor: "bg-purple-50",
  },
  {
    label: "Manage Shifts",
    icon: <Clock className="w-5 h-5 text-indigo-500" />,
    path: "/carehubdashboard/manage-shifts",
    bgColor: "bg-indigo-50",
  },
  {
    label: "Timesheet",
    icon: <FileText className="w-5 h-5 text-yellow-500" />,
    path: "/carehubdashboard/timesheet",
    bgColor: "bg-yellow-50",
  },
  {
    label: "Workers",
    icon: <Users className="w-5 h-5 text-green-500" />,
    path: "/carehubdashboard/workers",
    bgColor: "bg-green-50",
  },
  {
    label: "Incident Log",
    icon: <AlertCircle className="w-5 h-5 text-red-500" />,
    path: "/carehubdashboard/incidents",
    bgColor: "bg-red-50",
  },
  {
    label: "Reports",
    icon: <BarChart3 className="w-5 h-5 text-orange-500" />,
    path: "/carehubdashboard/reports",
    bgColor: "bg-orange-50",
  },
  {
    label: "Invoice",
    icon: <CreditCard className="w-5 h-5 text-pink-500" />,
    path: "/carehubdashboard/invoice",
    bgColor: "bg-pink-50",
  },
];

const Sidebar = ({
  userType = "care-worker",
  onNavigate = () => {},
}: SidebarProps) => {
  const location = useLocation();
  const navItems =
    userType === "care-worker"
      ? careWorkerNavItems
      : userType === "care-hub"
        ? careHubNavItems
        : careAgencyNavItems;

  const settingsPath =
    userType === "care-worker"
      ? "/careworkerdashboard/settings"
      : userType === "care-hub"
        ? "/carehubdashboard/settings"
        : "/careagencydashboard/settings";

  return (
    <div className="w-72 h-full bg-gradient-to-b from-slate-50 to-white border-r border-gray-200 flex flex-col backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-lg">
      <div className="p-4 border-b border-slate-200/60">
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <Users className="w-4 h-4 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">
              {userType === "care-worker" ? "Care Worker" : "Care Hub"}
            </h3>
            <p className="text-xs text-slate-500">Dashboard</p>
          </div>
        </div>
      </div>
      <div className="flex-1 py-6 flex flex-col">
        <nav className="space-y-1 px-3">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Button
                key={item.path}
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3 mb-4 transition-all duration-200 text-base font-medium rounded-lg py-6",
                  isActive
                    ? `${item.bgColor} text-slate-900 shadow-sm`
                    : "hover:bg-slate-50 text-slate-600 hover:text-slate-900 hover:shadow-sm",
                )}
                onClick={() => onNavigate(item.path)}
              >
                {item.icon}
                {item.label}
              </Button>
            );
          })}
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start gap-3 mb-4 transition-all duration-200 text-base font-medium rounded-lg py-6 hover:bg-slate-50 text-slate-600 hover:text-slate-900 hover:shadow-sm",
              location.pathname === settingsPath &&
                "bg-slate-100 text-slate-900 shadow-sm",
            )}
            onClick={() => onNavigate(settingsPath)}
          >
            <Settings className="w-5 h-5 text-slate-600" />
            Settings
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 mb-4 transition-all duration-200 text-base font-medium rounded-lg py-6 text-red-600 hover:text-red-700 hover:bg-red-50"
            onClick={() => onNavigate("/logout")}
          >
            <LogOut className="w-5 h-5 text-red-500" />
            Logout
          </Button>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
