import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home initialUserType="care-worker" />} />

          {/* Care Worker Routes */}
          <Route
            path="/careworkerdashboard"
            element={<Home initialUserType="care-worker" />}
          />
          <Route
            path="/careworkerdashboard/shifts"
            element={<Home initialUserType="care-worker" />}
          />
          <Route
            path="/careworkerdashboard/bookings"
            element={<Home initialUserType="care-worker" />}
          />
          <Route
            path="/careworkerdashboard/availability"
            element={<Home initialUserType="care-worker" />}
          />
          <Route
            path="/careworkerdashboard/timesheet"
            element={<Home initialUserType="care-worker" />}
          />
          <Route
            path="/careworkerdashboard/payslips"
            element={<Home initialUserType="care-worker" />}
          />
          <Route
            path="/careworkerdashboard/report"
            element={<Home initialUserType="care-worker" />}
          />
          <Route
            path="/careworkerdashboard/settings"
            element={<Home initialUserType="care-worker" />}
          />

          {/* Care Agency Routes */}
          <Route
            path="/careagencydashboard"
            element={<Home initialUserType="care-agency" />}
          />
          <Route
            path="/careagencydashboard/workers"
            element={<Home initialUserType="care-agency" />}
          />
          <Route
            path="/careagencydashboard/shifts"
            element={<Home initialUserType="care-agency" />}
          />
          <Route
            path="/careagencydashboard/incidents"
            element={<Home initialUserType="care-agency" />}
          />
          <Route
            path="/careagencydashboard/timesheets"
            element={<Home initialUserType="care-agency" />}
          />
          <Route
            path="/careagencydashboard/finance"
            element={<Home initialUserType="care-agency" />}
          />
          <Route
            path="/careagencydashboard/reports"
            element={<Home initialUserType="care-agency" />}
          />
          <Route
            path="/careagencydashboard/settings"
            element={<Home initialUserType="care-agency" />}
          />

          {/* Care Hub Routes */}
          <Route
            path="/carehubdashboard"
            element={<Home initialUserType="care-hub" />}
          />
          <Route
            path="/carehubdashboard/post-shifts"
            element={<Home initialUserType="care-hub" />}
          />
          <Route
            path="/carehubdashboard/manage-shifts"
            element={<Home initialUserType="care-hub" />}
          />
          <Route
            path="/carehubdashboard/timesheet"
            element={<Home initialUserType="care-hub" />}
          />
          <Route
            path="/carehubdashboard/workers"
            element={<Home initialUserType="care-hub" />}
          />
          <Route
            path="/carehubdashboard/incidents"
            element={<Home initialUserType="care-hub" />}
          />
          <Route
            path="/carehubdashboard/reports"
            element={<Home initialUserType="care-hub" />}
          />
          <Route
            path="/carehubdashboard/invoice"
            element={<Home initialUserType="care-hub" />}
          />
          <Route
            path="/carehubdashboard/settings"
            element={<Home initialUserType="care-hub" />}
          />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
