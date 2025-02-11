import { Suspense } from "react";
import { useRoutes, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          {/* Root redirect */}
          <Route
            path="/"
            element={<Navigate to="/careworkerdashboard" replace />}
          />

          {/* Care Worker Routes */}
          <Route
            path="/careworkerdashboard/*"
            element={<Home initialUserType="care-worker" />}
          />

          {/* Care Agency Routes */}
          <Route
            path="/careagencydashboard/*"
            element={<Home initialUserType="care-agency" />}
          />

          {/* Care Hub Routes */}
          <Route
            path="/carehubdashboard/*"
            element={<Home initialUserType="care-hub" />}
          />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
