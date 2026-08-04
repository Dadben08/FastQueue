import React from "react";
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  BarChart3,
  Settings,
} from "lucide-react";
import fastqueueImage from "../../assets/img/fastqueueImage.png";
import { useDashboard } from "../../context/dashboardContext";

const Sidebar = ({ activeMenu, setActiveMenu }) => {
  const { orgData } = useDashboard();

  const menuItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
    // { id: "queue", icon: Users, label: "Today's Queue" },
    { id: "calendar", icon: CalendarDays, label: "Calendar" },
    { id: "reports", icon: BarChart3, label: "Reports" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-[#2f2a76] to-[#1e1a4f] text-white shadow-2xl z-50">
      <div className="p-6 border-b border-white/10">
        <img
          src={fastqueueImage}
          alt="FastQueue Logo"
          className="w-10 h-10 object-contain mb-2"
        />
        <h2 className="text-2xl font-bold mb-1">FastQueue</h2>
        <p className="text-sm text-white/70">
          {orgData?.orgName || "Organization"}
        </p>
      </div>

      <nav className="py-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveMenu(item.id)}
              className={`w-full flex items-center gap-4 px-6 py-4 transition-all duration-200 border-l-4 ${
                activeMenu === item.id
                  ? "bg-white/15 text-white border-blue-400"
                  : "border-transparent text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
