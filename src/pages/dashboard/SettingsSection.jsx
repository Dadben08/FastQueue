import React from "react";
import { Clock, MapPin, Video } from "lucide-react";
import { useDashboard } from "../../context/dashboardContext";

const SettingsSection = () => {
  const { orgData } = useDashboard();

  return (
    <div className="space-y-6">
      {/* Organization Info */}
      <div className="p-6 bg-white rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-4 text-[#2f2a76]">
          Organization Information
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Name</p>
            <p className="font-semibold">{orgData?.orgName || "N/A"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Email</p>
            <p className="font-semibold">{orgData?.orgEmail || "N/A"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Address</p>
            <p className="font-semibold">{orgData?.orgAddress || "N/A"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Category</p>
            <p className="font-semibold">{orgData?.category || "N/A"}</p>
          </div>
        </div>
      </div>

      {/* Business Days */}
      <div className="p-6 bg-white rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-4 text-[#2f2a76]">
          Business Hours
        </h2>
        <div className="space-y-3">
          {orgData?.businessDays?.map((day) => (
            <div
              key={day._id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <Clock size={20} className="text-[#2f2a76]" />
                <span className="font-semibold">{day.day}</span>
              </div>
              <div className="text-sm">
                {day.isOpen ? (
                  <span className="text-green-600 font-medium">
                    {day.openTime} - {day.closeTime}
                  </span>
                ) : (
                  <span className="text-red-600 font-medium">Closed</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="p-6 bg-white rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-4 text-[#2f2a76]">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {orgData?.services?.map((service) => (
            <div
              key={service._id}
              className="p-4 border-2 border-gray-200 rounded-xl hover:border-blue-300 transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-lg">{service.name}</h3>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    service.type === "virtual"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {service.type === "virtual" ? (
                    <Video size={12} className="inline mr-1" />
                  ) : (
                    <MapPin size={12} className="inline mr-1" />
                  )}
                  {service.type}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Duration: {service.duration} minutes
              </p>
              {service.description && (
                <p className="text-sm text-gray-500">{service.description}</p>
              )}
              {service.type === "virtual" && service.link && (
                <p className="text-xs text-blue-600 break-all mt-2">
                  {service.link}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingsSection;
