import React, { useState } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./Topbar";
import OverviewSection from "./OverviewSection";
import QuickActions from "./QuickActions";
import AppointmentsSection from "./AppointmentsSection";
import CalendarSection from "./CalendarSection";
import ReportsSection from "./ReportsSection";
import SettingsSection from "./SettingsSection";
import { DashboardProvider, useDashboard } from "../../context/dashboardContext";


const DashboardContent = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const { loading, error } = useDashboard();

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2f2a76] mx-auto mb-4"></div>
            <p className="text-gray-600">Loading dashboard...</p>
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
          <p className="text-red-700">Error loading dashboard: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      );
    }

    switch (activeMenu) {
      case "dashboard":
        return (
          <>
            <OverviewSection />
            <QuickActions />
            <AppointmentsSection />
          </>
        );
      case "calendar":
        return <CalendarSection />;
      case "reports":
        return <ReportsSection />;
      case "settings":
        return <SettingsSection />;
      default:
        return (
          <>
            <OverviewSection />
            <QuickActions />
            <AppointmentsSection />
          </>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-[#fef0da] font-raleway">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <main className="ml-64 flex-1">
        <TopBar />
        <div className="p-8 space-y-8">{renderContent()}</div>
      </main>
    </div>
  );
};

const DashboardPage = () => {
  return (
    <DashboardProvider>
      <DashboardContent />
    </DashboardProvider>
  );
};

export default DashboardPage;
