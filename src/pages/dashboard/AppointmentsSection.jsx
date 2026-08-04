import React, { useState } from "react";
import { Phone, Clock } from "lucide-react";
import { useDashboard } from "../../context/dashboardContext";

const AppointmentsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const { appointments } = useDashboard()

  const filteredAppointments =
    activeFilter === "all"
      ? appointments
      : appointments.filter((apt) => apt.status === activeFilter);

  const getStatusBadge = (status) => {
    const statusConfig = {
      waiting: {
        bg: "bg-yellow-100",
        text: "text-yellow-800",
        label: "Waiting",
      },
      here: {
        bg: "bg-blue-100",
        text: "text-blue-800",
        label: "Customer Here",
      },
      serving: {
        bg: "bg-orange-100",
        text: "text-orange-800",
        label: "Serving",
      },
      done: { bg: "bg-green-100", text: "text-green-800", label: "Done" },
    };
    const config = statusConfig[status] || statusConfig.waiting;
    return (
      <span
        className={`px-3 py-1 rounded-full text-xs font-semibold ${config.bg} ${config.text}`}
      >
        {config.label}
      </span>
    );
  };

  const formatTime = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-[#2f2a76]">
          Upcoming Appointments (Next 2 Hours)
        </h3>

        {/* Filter Tabs */}
        <div className="flex gap-2">
          {["all", "waiting", "here", "serving"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeFilter === filter
                  ? "bg-[#2f2a76] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Appointments List */}
      <div className="space-y-4">
        {filteredAppointments.length > 0 ? (
          filteredAppointments.map((apt) => (
            <div
              key={apt._id || apt.id}
              className="border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-blue-300 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-2xl font-bold text-[#2f2a76]">
                  {formatTime(apt.appointmentTime || apt.time)}
                </div>
                {getStatusBadge(apt.status)}
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  {apt.customerName || "N/A"}
                </h4>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                      🎫 {apt.bookingCode || apt.code || "N/A"}
                    </span>
                  </div>
                  {apt.phone && (
                    <div className="flex items-center gap-2">
                      <Phone size={16} />
                      <span>{apt.phone}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>
                      {apt.serviceName || apt.service} ({apt.duration} min)
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {apt.status === "waiting" && (
                  <>
                    <button className="px-5 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
                      Customer Arrived
                    </button>
                    <button className="px-5 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                      Contact
                    </button>
                  </>
                )}
                {apt.status === "here" && (
                  <>
                    <button className="px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Start Service
                    </button>
                    <button className="px-5 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                      Contact
                    </button>
                  </>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📅</div>
            <p className="text-xl text-gray-500">
              {activeFilter === "all"
                ? "No upcoming appointments"
                : `No ${activeFilter} appointments`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentsSection;
