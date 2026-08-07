import React from "react";
import {
  Users,
  Clock,
  CheckCircle,
  TrendingUp,
  BarChart3,
  Ticket,
} from "lucide-react";
import { useDashboard } from "../../context/dashboardContext";

const ReportsSection = () => {
  const { stats } = useDashboard();

  const cards = [
    {
      title: "Customers served",
      value: stats.servedToday || 186,
      icon: CheckCircle,
      color: "bg-green-500",
    },
    {
      title: "Waiting customers",
      value: stats.waitingCustomers || 18,
      icon: Users,
      color: "bg-blue-500",
    },
    {
      title: "Average wait time",
      value: `${stats.averageWaitTime || 12} mins`,
      icon: Clock,
      color: "bg-orange-500",
    },
    {
      title: "Current queue",
      value: stats.currentQueue || "A022",
      icon: Ticket,
      color: "bg-[#F4400D]",
    },
  ];

  return (
    <div className="min-h-[80vh] bg-[#2F2A76] rounded-3xl overflow-hidden">
      {/* Header */}
      <div className="bg-[#F4400D] px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white">
              FastQueue Reports
            </h1>
            <p className="text-white/80 mt-2">
              Queue analytics and daily performance overview
            </p>
          </div>

          <BarChart3 className="text-white" size={48} />
        </div>
      </div>

      {/* Report Cards */}
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl ${card.color} flex items-center justify-center`}
                  >
                    <Icon className="text-white" size={28} />
                  </div>

                  <TrendingUp className="text-green-500" size={24} />
                </div>

                <h2 className="text-4xl font-bold text-[#2F2A76]">
                  {card.value}
                </h2>

                <p className="text-gray-500 mt-2">
                  {card.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* Performance Summary */}
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#2F2A76] mb-6">
              Today's performance
            </h3>

            <div className="space-y-5">
              <div className="flex justify-between">
                <span className="text-gray-600">Customers served</span>
                <span className="font-bold text-[#F4400D]">
                  {stats.servedToday || 186}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Waiting customers</span>
                <span className="font-bold text-[#F4400D]">
                  {stats.waitingCustomers || 18}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Average wait time</span>
                <span className="font-bold text-[#F4400D]">
                  {stats.averageWaitTime || 12} mins
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Current queue</span>
                <span className="font-bold text-[#F4400D]">
                  {stats.currentQueue || "A022"}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col justify-center items-center text-center">
            <TrendingUp
              className="text-[#F4400D] mb-4"
              size={72}
            />

            <h3 className="text-3xl font-bold text-[#2F2A76]">
              Queue efficiency
            </h3>

            <p className="text-gray-500 mt-3 max-w-sm">
              Based on today's performance, your average service efficiency
              is estimated at
            </p>

            <div className="text-6xl font-extrabold text-[#F4400D] mt-6">
              94%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsSection;