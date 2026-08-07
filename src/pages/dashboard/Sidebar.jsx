import React from "react";
import {
  LayoutDashboard,
  Ticket,
  Users,
  BarChart3,
  CreditCard,
  Settings,
  LogOut,
  X,
} from "lucide-react";
import fastqueueImage from "../../assets/img/fastqueueImage.png";
import { useDashboard } from "../../context/dashboardContext";
import { useNavigate } from "react-router-dom";

const Sidebar = ({
  activeMenu,
  setActiveMenu,
  isOpen,
  setIsOpen,
}) => {
  const { orgData } = useDashboard();
const navigate = useNavigate();

const handleLogout = () => {
  // remove login information
  localStorage.removeItem("token");
  localStorage.removeItem("userData");

  // redirect to home page
  navigate("/");
};
  const menuItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { id: "queue", icon: Ticket, label: "Queue management" },
    { id: "customers", icon: Users, label: "Customers" },
    { id: "reports", icon: BarChart3, label: "Reports" },
    { id: "billing", icon: CreditCard, label: "Billing" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-72 bg-[#2F2A76] text-white flex flex-col transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={fastqueueImage}
                alt="FastQueue"
                className="w-10 h-10 rounded-lg"
              />

              <div>
                <h1 className="text-xl font-bold">FastQueue</h1>
                <p className="text-sm text-white/70">
                  Queue management
                </p>
              </div>
            </div>

            {/* Mobile close button */}
            <button
              className="lg:hidden"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-white/10">
            <p className="text-sm text-white/70">Organization</p>
            <p className="font-semibold mt-1">
              {orgData?.orgName || "Access Bank Ikeja"}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-3 overflow-y-auto">
          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveMenu(item.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    activeMenu === item.id
                      ? "bg-[#F4400D] text-white shadow-lg"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-white/10">
         <button
  onClick={handleLogout}
  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/80 hover:bg-red-500/20 hover:text-white transition-all duration-200"
>
  <LogOut size={20} />
  <span className="font-medium">
    Logout
  </span>
</button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;