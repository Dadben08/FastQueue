import React from "react";
import {
  Ticket,
  ArrowRight,
  CheckCircle,
  Monitor,
} from "lucide-react";
import { useDashboard } from "../../context/dashboardContext";

const QuickActions = () => {
  const { callNextCustomer, completeCurrentCustomer } = useDashboard();

  const generateTicket = () => {
    alert("Generate ticket feature will be connected to the backend.");
  };

  const openDisplayScreen = () => {
    window.open("/display", "_blank");
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        Quick actions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <button
          onClick={generateTicket}
          className="flex items-center justify-center gap-3 px-6 py-4 bg-[#F4400D] text-white rounded-xl font-semibold hover:bg-[#d93608] transition-all duration-200"
        >
          <Ticket size={20} />
          <span>Generate ticket</span>
        </button>

        <button
          onClick={callNextCustomer}
          className="flex items-center justify-center gap-3 px-6 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200"
        >
          <ArrowRight size={20} />
          <span>Call next customer</span>
        </button>

        <button
          onClick={completeCurrentCustomer}
          className="flex items-center justify-center gap-3 px-6 py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all duration-200"
        >
          <CheckCircle size={20} />
          <span>Complete service</span>
        </button>

        <button
          onClick={openDisplayScreen}
          className="flex items-center justify-center gap-3 px-6 py-4 bg-white text-[#2F2A76] border-2 border-[#2F2A76] rounded-xl font-semibold hover:bg-[#2F2A76] hover:text-white transition-all duration-200"
        >
          <Monitor size={20} />
          <span>Display queue screen</span>
        </button>
      </div>
    </div>
  );
};

export default QuickActions;