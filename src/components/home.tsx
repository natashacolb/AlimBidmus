import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "./dashboard/DashboardHeader";
import Sidebar from "./dashboard/Sidebar";
import MainContent from "./dashboard/MainContent";

interface HomeProps {
  initialUserType?: "care-worker" | "care-hub" | "care-agency";
}

const Home = ({ initialUserType = "care-worker" }: HomeProps) => {
  const [userType, setUserType] = useState(initialUserType);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <DashboardHeader
        onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        onNavigate={handleNavigate}
        userType={userType}
        userName={userType === "care-hub" ? "St. Mary's Care Home" : "John Doe"}
      />

      <div className="flex flex-1">
        {/* Sidebar - fixed on desktop */}
        <div
          className={`
            fixed top-16 bottom-0 left-0 z-50 w-72 transform bg-white transition-transform duration-300 ease-in-out
            ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          `}
        >
          <Sidebar userType={userType} onNavigate={handleNavigate} />
        </div>

        {/* Overlay for mobile menu */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Main content - with left margin on desktop */}
        <div className="flex-1 md:ml-72 overflow-auto">
          <MainContent userType={userType} />
        </div>
      </div>
    </div>
  );
};

export default Home;
