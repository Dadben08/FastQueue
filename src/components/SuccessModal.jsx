import React from "react";
import { Check, ArrowRight, X } from "lucide-react";


const SuccessModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 text-center">
        {/* Success Icon */}
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check size={32} className="text-green-600" />
        </div>

        {/* Content */}
        <h2 className="text-xl font-bold text-[#2f2a76] mb-2">
          You're All Set!
        </h2>
        <p className="text-gray-600 text-sm mb-6">
          Your organization is now live and ready to accept bookings.
        </p>

        {/* Single Button */}
        <button
          onClick={onConfirm}
          className="w-full py-3 bg-gradient-to-r from-[#2f2a76] to-[#4a45a0] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;