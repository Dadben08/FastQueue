import React from "react";
import { Bell } from "lucide-react";
import { useDashboard } from "../../context/dashboardContext";

const Topbar = () => {
  const { orgData } = useDashboard();

  const getCurrentDate = () => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date().toLocaleDateString("en-US", options);
  };

  const getOrgInitials = (name) => {
    if (!name) return "OR";
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="flex items-center justify-between px-8 py-5">
        <div>
          <h1 className="text-3xl font-bold text-[#2f2a76]">
            Welcome, {orgData?.orgName || "Organization"}
          </h1>
          <p className="text-sm text-gray-600 mt-1">{getCurrentDate()}</p>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative p-3 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors">
            <Bell size={20} className="text-gray-700" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
              3
            </span>
          </button>

          <div className="flex items-center gap-3 px-4 py-2 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
            <div className="w-9 h-9 rounded-full bg-[#2f2a76] flex items-center justify-center text-white font-bold">
              {getOrgInitials(orgData?.orgName)}
            </div>
            <span className="text-sm font-semibold text-gray-700">
              {orgData?.orgName || "Organization"}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
