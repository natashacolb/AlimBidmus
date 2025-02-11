import React from "react";
import { useLocation } from "react-router-dom";
import MetricsGrid from "./MetricsGrid";
import UpcomingShifts from "./UpcomingShifts";
import ActivityFeed from "./ActivityFeed";
import AvailableShifts from "./AvailableShifts";
import MyBookings from "./MyBookings";
import Availability from "./Availability";
import Timesheet from "./Timesheet";
import Payslips from "./Payslips";
import Report from "./Report";

// Care Hub Components
import PostShifts from "./hub/PostShifts";
import ManageShifts from "./hub/ManageShifts";
import Workers from "./hub/Workers";
import IncidentLog from "./hub/IncidentLog";
import Reports from "./hub/Reports";
import Invoice from "./hub/Invoice";
import Overview from "./hub/Overview";
import HubSettings from "./hub/Settings";

// Care Agency Components
import AgencyOverview from "./agency/Overview";
import TimesheetApprovals from "./agency/TimesheetApprovals";

// Care Worker Components
import WorkerSettings from "./worker/Settings";

interface MainContentProps {
  userType?: "care-worker" | "care-hub" | "care-agency";
}

const MainContent = ({ userType = "care-worker" }: MainContentProps) => {
  const location = useLocation();

  // Care Worker Routes
  if (userType === "care-worker") {
    switch (location.pathname) {
      case "/careworkerdashboard/shifts":
        return <AvailableShifts />;
      case "/careworkerdashboard/bookings":
        return <MyBookings />;
      case "/careworkerdashboard/availability":
        return <Availability />;
      case "/careworkerdashboard/timesheet":
        return <Timesheet />;
      case "/careworkerdashboard/payslips":
        return <Payslips />;
      case "/careworkerdashboard/report":
        return <Report />;
      case "/careworkerdashboard/settings":
        return <WorkerSettings />;
      default:
        return (
          <div className="bg-slate-50/50 p-6 flex-1 backdrop-blur supports-[backdrop-filter]:bg-white/50">
            <div className="space-y-6">
              <div>
                <p className="text-muted-foreground">
                  View your shifts, timesheets, and earnings
                </p>
              </div>
              <MetricsGrid userType={userType} />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <UpcomingShifts />
                </div>
                <div className="lg:col-span-1">
                  <ActivityFeed />
                </div>
              </div>
            </div>
          </div>
        );
    }
  }

  // Care Agency Routes
  if (userType === "care-agency") {
    switch (location.pathname) {
      case "/careagencydashboard":
      case "/careagencydashboard/":
        return <AgencyOverview />;
      case "/careagencydashboard/workers":
        return <Workers />;
      case "/careagencydashboard/shifts":
        return <ManageShifts />;
      case "/careagencydashboard/incidents":
        return <IncidentLog />;
      case "/careagencydashboard/timesheets":
        return <TimesheetApprovals />;
      case "/careagencydashboard/finance":
        return <Invoice />;
      case "/careagencydashboard/reports":
        return <Reports />;
      case "/careagencydashboard/settings":
        return <HubSettings />;
      default:
        return <AgencyOverview />;
    }
  }

  // Care Hub Routes
  if (userType === "care-hub") {
    switch (location.pathname) {
      case "/carehubdashboard":
      case "/carehubdashboard/":
        return <Overview />;
      case "/carehubdashboard/post-shifts":
        return <PostShifts />;
      case "/carehubdashboard/manage-shifts":
        return <ManageShifts />;
      case "/carehubdashboard/timesheet":
        return <Timesheet />;
      case "/carehubdashboard/workers":
        return <Workers />;
      case "/carehubdashboard/incidents":
        return <IncidentLog />;
      case "/carehubdashboard/reports":
        return <Reports />;
      case "/carehubdashboard/invoice":
        return <Invoice />;
      case "/carehubdashboard/settings":
        return <HubSettings />;
      default:
        return <Overview />;
    }
  }

  return null;
};

export default MainContent;
