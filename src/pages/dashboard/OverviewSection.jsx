import React from "react";
import { Ticket, Users, CheckCircle, Clock } from "lucide-react";
import { useDashboard } from "../../context/dashboardContext";

const OverviewSection = () => {
  const { stats } = useDashboard();

  const statsConfig = [
    {
      id: 1,
      icon: Ticket,
      label: "Current queue",
      value: stats.currentQueue || "A001",
      bgColor: "bg-orange-50",
      iconColor: "text-[#F4400D]",
    },
    {
      id: 2,
      icon: Users,
      label: "Waiting customers",
      value: stats.waitingCustomers || 0,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      id: 3,
      icon: CheckCircle,
      label: "Served today",
      value: stats.servedToday || 0,
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      id: 4,
      icon: Clock,
      label: "Average wait time",
      value: `${stats.averageWaitTime || 0} mins`,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      {statsConfig.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.id}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center`}
              >
                <Icon className={stat.iconColor} size={24} />
              </div>

              <span className="text-xs font-medium text-gray-400">
                Today
              </span>
            </div>

            <h3 className="text-3xl font-bold text-gray-800 mb-1">
              {stat.value}
            </h3>

            <p className="text-gray-500 text-sm">
              {stat.label}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default OverviewSection;