import React from "react";
import { Clock, Building2, Bell, Ticket } from "lucide-react";
import { useDashboard } from "../../context/dashboardContext";

const SettingsSection = () => {
  const { orgData } = useDashboard();

  return (
    <div className="space-y-6">
      {/* Organization Information */}
      <div className="p-6 bg-white rounded-2xl shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <Building2 className="text-[#F4400D]" size={24} />
          <h2 className="text-2xl font-semibold text-[#2F2A76]">
            Organization information
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-500 mb-1">Organization name</p>
            <p className="font-semibold text-gray-800">
              {orgData?.orgName || "Access Bank Ikeja"}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-1">Email address</p>
            <p className="font-semibold text-gray-800">
              {orgData?.orgEmail || "info@organization.com"}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-1">Branch address</p>
            <p className="font-semibold text-gray-800">
              {orgData?.orgAddress || "Ikeja, Lagos"}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-1">Industry</p>
            <p className="font-semibold text-gray-800">
              {orgData?.category || "Banking"}
            </p>
          </div>
        </div>
      </div>

      {/* Queue Settings */}
      <div className="p-6 bg-white rounded-2xl shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <Ticket className="text-[#F4400D]" size={24} />
          <h2 className="text-2xl font-semibold text-[#2F2A76]">
            Queue settings
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-gray-500 mb-2">
              Ticket prefix
            </label>
            <input
              type="text"
              defaultValue="A"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F4400D]"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-2">
              Maximum daily tickets
            </label>
            <input
              type="number"
              defaultValue={500}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F4400D]"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-2">
              Average service time (minutes)
            </label>
            <input
              type="number"
              defaultValue={10}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F4400D]"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-2">
              Queue reset time
            </label>
            <input
              type="time"
              defaultValue="08:00"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F4400D]"
            />
          </div>
        </div>
      </div>

      {/* Business Hours */}
      <div className="p-6 bg-white rounded-2xl shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <Clock className="text-[#F4400D]" size={24} />
          <h2 className="text-2xl font-semibold text-[#2F2A76]">
            Operating hours
          </h2>
        </div>

        <div className="space-y-3">
          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map(
            (day) => (
              <div
                key={day}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
              >
                <span className="font-medium text-gray-800">{day}</span>
                <span className="text-green-600 font-medium">
                  8:00 AM - 5:00 PM
                </span>
              </div>
            )
          )}
        </div>
      </div>

      {/* Notification Settings */}
      <div className="p-6 bg-white rounded-2xl shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <Bell className="text-[#F4400D]" size={24} />
          <h2 className="text-2xl font-semibold text-[#2F2A76]">
            Notification preferences
          </h2>
        </div>

        <div className="space-y-4">
          <label className="flex items-center justify-between p-4 border border-gray-200 rounded-xl cursor-pointer">
            <span className="font-medium text-gray-800">
              Email notifications
            </span>
            <input type="checkbox" defaultChecked className="w-5 h-5" />
          </label>

          <label className="flex items-center justify-between p-4 border border-gray-200 rounded-xl cursor-pointer">
            <span className="font-medium text-gray-800">
              SMS notifications
            </span>
            <input type="checkbox" className="w-5 h-5" />
          </label>

          <label className="flex items-center justify-between p-4 border border-gray-200 rounded-xl cursor-pointer">
            <span className="font-medium text-gray-800">
              WhatsApp notifications
            </span>
            <input type="checkbox" defaultChecked className="w-5 h-5" />
          </label>
        </div>

        <button className="mt-6 px-6 py-3 bg-[#F4400D] text-white rounded-xl font-semibold hover:bg-[#d93608] transition-colors">
          Save settings
        </button>
      </div>
    </div>
  );
};

export default SettingsSection;