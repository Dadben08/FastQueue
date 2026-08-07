import React, { useState } from "react";
import { Phone, Clock, Ticket } from "lucide-react";
import { useDashboard } from "../../context/dashboardContext";

const QueueSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const {
    queue,
    callNextCustomer,
    completeCurrentCustomer,
  } = useDashboard();

  const filteredQueue =
    activeFilter === "all"
      ? queue
      : queue.filter((customer) => customer.status === activeFilter);

  const getStatusBadge = (status) => {
    const statusConfig = {
      Waiting: {
        bg: "bg-yellow-100",
        text: "text-yellow-800",
      },
      Serving: {
        bg: "bg-blue-100",
        text: "text-blue-800",
      },
      Completed: {
        bg: "bg-green-100",
        text: "text-green-800",
      },
    };

    const config = statusConfig[status] || statusConfig.Waiting;

    return (
      <span
        className={`px-3 py-1 rounded-full text-xs font-semibold ${config.bg} ${config.text}`}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 mt-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Live queue management
          </h2>
          <p className="text-gray-500 mt-1">
            Manage waiting customers and control the live queue
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={callNextCustomer}
            className="px-5 py-2 bg-[#F4400D] text-white rounded-lg font-semibold hover:bg-[#d93608] transition-colors"
          >
            Call next customer
          </button>

          <button
            onClick={completeCurrentCustomer}
            className="px-5 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Complete service
          </button>
        </div>
      </div>

      <div className="flex gap-2 mb-6">
        {["all", "Waiting", "Serving", "Completed"].map(
          (filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeFilter === filter
                  ? "bg-[#2F2A76] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {filter}
            </button>
          )
        )}
      </div>

      <div className="space-y-4">
        {filteredQueue.length > 0 ? (
          filteredQueue.map((customer, index) => (
            <div
              key={customer.ticket || index}
              className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center">
                    <Ticket className="text-[#F4400D]" size={22} />
                  </div>

                  <div>
                    <div className="text-2xl font-bold text-[#2F2A76]">
                      {customer.ticket}
                    </div>
                    <div className="text-gray-500 text-sm">
                      Queue ticket
                    </div>
                  </div>
                </div>

                {getStatusBadge(customer.status)}
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  {customer.name}
                </h4>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  {customer.phone && (
                    <div className="flex items-center gap-2">
                      <Phone size={16} />
                      <span>{customer.phone}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>Joined 10 minutes ago</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {customer.status === "Waiting" && (
                  <button className="px-5 py-2 bg-[#F4400D] text-white rounded-lg font-semibold hover:bg-[#d93608] transition-colors">
                    Call customer
                  </button>
                )}

                {customer.status === "Serving" && (
                  <button className="px-5 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    Complete service
                  </button>
                )}

                <button className="px-5 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                  Skip
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🎫</div>
            <p className="text-xl text-gray-500">
              No customers in the queue
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QueueSection;