import React from "react";
import { Users, Calendar } from "lucide-react";

const QuickActions = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md mb-8 border border-gray-100">
      <h3 className="text-xl font-bold text-[#2f2a76] mb-5">Quick Actions</h3>
      <div className="flex flex-wrap gap-4">
        <button className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#2f2a76] to-[#4a45a0] text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
          <Users size={20} />
          <span>View Today's Queue</span>
        </button>

        <button className="flex items-center gap-3 px-6 py-3 bg-white text-[#2f2a76] border-2 border-[#2f2a76] rounded-xl font-semibold hover:bg-[#2f2a76] hover:text-white transition-all duration-200">
          <Calendar size={20} />
          <span>View Calendar</span>
        </button>
      </div>
    </div>
  );
};

export default QuickActions;
