import React, { useState } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./Topbar";

import OverviewSection from "./OverviewSection";
import QuickActions from "./QuickActions";
import QueueSection from "./QueueSection";
import ReportsSection from "./ReportsSection";
import SettingsSection from "./SettingsSection";

import { DashboardProvider, useDashboard } from "../../context/dashboardContext";


const DashboardContent = () => {

  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [isOpen, setIsOpen] = useState(false);

  const { loading, error } = useDashboard();


  const renderContent = () => {

    if (loading) {
      return (
        <div className="
          flex
          justify-center
          items-center
          h-64
          text-gray-500
          font-medium
        ">
          Loading dashboard...
        </div>
      );
    }


    if (error) {
      return (
        <div className="
          bg-red-50
          border
          border-red-200
          rounded-2xl
          p-6
          text-center
        ">

          <p className="text-red-700 font-medium">
            Error loading dashboard: {error}
          </p>

          <button
            onClick={() => window.location.reload()}
            className="
              mt-4
              px-6
              py-2
              bg-red-600
              text-white
              rounded-lg
            "
          >
            Retry
          </button>

        </div>
      );
    }


    switch(activeMenu){

      case "dashboard":
        return (
          <>
            <OverviewSection />
            <QuickActions />
            <QueueSection />
          </>
        );


      case "queue":
        return <QueueSection />;


      case "reports":
        return <ReportsSection />;


      case "billing":
        return (
          <div className="
            bg-white
            rounded-2xl
            shadow-sm
            p-8
            text-center
          ">
            <h2 className="
              text-2xl
              font-bold
              text-[#2F2A76]
            ">
              Billing
            </h2>

            <p className="text-gray-500 mt-3">
              Manage your FastQueue subscription here.
            </p>

          </div>
        );


      case "settings":
        return <SettingsSection />;


      default:
        return (
          <>
            <OverviewSection />
            <QuickActions />
            <QueueSection />
          </>
        );

    }

  };



  return (

    <div className="min-h-screen bg-gray-100">


      <Sidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />



      <main
        className="
          lg:ml-72
          min-h-screen
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
            py-6
          "
        >

          <TopBar
            setIsOpen={setIsOpen}
          />


          <div className="mt-6 space-y-6">

            {renderContent()}

          </div>


        </div>


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