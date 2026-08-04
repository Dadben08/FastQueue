import React from "react";
import { Calendar, CheckCircle, Clock, XCircle } from "lucide-react";
import { useDashboard } from "../../context/dashboardContext";

const OverviewSection = () => {
  const { stats } = useDashboard();

  const statsConfig = [
    {
      id: 1,
      icon: Calendar,
      label: "Today's Appointments",
      value: stats.todayTotal || 0,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      id: 2,
      icon: CheckCircle,
      label: "Completed",
      value: stats.completed || 0,
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      id: 3,
      icon: Clock,
      label: "In Progress",
      value: stats.inProgress || 0,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      id: 4,
      icon: XCircle,
      label: "No-Shows",
      value: stats.noShows || 0,
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {statsConfig.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.id}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center`}
              >
                <Icon className={`${stat.iconColor}`} size={24} />
              </div>
            </div>
            <div className="text-4xl font-bold text-[#2f2a76] mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-gray-600 font-medium">
              {stat.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OverviewSection;
