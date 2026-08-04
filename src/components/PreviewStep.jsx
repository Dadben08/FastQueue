import React from "react";
import { Clock, Edit2, Building2, Check, Video, MapPin } from "lucide-react";

const PreviewStep = ({
  selectedDays,
  openTime,
  closeTime,
  useCustomHours,
  customHours,
  services,
  onBack,
  onSave,
  loading,
}) => {
  const getSelectedDaysString = () =>
    Object.entries(selectedDays)
      .filter(([, isOpen]) => isOpen)
      .map(([day]) => day.charAt(0).toUpperCase() + day.slice(1))
      .join(", ");

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#2f2a76] mb-2">
            Review Your Setup
          </h2>
          <p className="text-gray-600">
            Make sure everything looks correct before going live
          </p>
        </div>

        {/* Operating Hours */}
        <div className="mb-8 p-6 bg-blue-50 border-2 border-blue-200 rounded-xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Clock className="text-blue-600" size={24} />
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-lg text-gray-800 mb-3">
                Operating Hours
              </h3>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Days:</span>
                  <span className="font-semibold text-gray-800">
                    {getSelectedDaysString()}
                  </span>
                </div>

                {!useCustomHours ? (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Hours:</span>
                    <span className="font-semibold text-gray-800">
                      {openTime} – {closeTime}
                    </span>
                  </div>
                ) : (
                  <div className="border-t border-blue-200 pt-2 mt-2">
                    {Object.entries(selectedDays)
                      .filter(([, isOpen]) => isOpen)
                      .map(([day]) => (
                        <div key={day} className="flex justify-between py-1">
                          <span className="text-gray-600">
                            {day.charAt(0).toUpperCase() + day.slice(1)}
                          </span>
                          <span className="font-semibold text-gray-800">
                            {customHours[day]?.open} – {customHours[day]?.close}
                          </span>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={() => onBack(1)}
              className="text-blue-600 hover:bg-blue-100 p-2 rounded-lg"
            >
              <Edit2 size={18} />
            </button>
          </div>
        </div>

        {/* Services */}
        <div className="mb-8 p-6 bg-green-50 border-2 border-green-200 rounded-xl">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Building2 className="text-green-600" size={24} />
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-lg text-gray-800">
                Your Services
              </h3>
              <p className="text-sm text-gray-600">
                {services.length} service(s)
              </p>
            </div>

            <button
              onClick={() => onBack(2)}
              className="text-green-600 hover:bg-green-100 p-2 rounded-lg"
            >
              <Edit2 size={18} />
            </button>
          </div>

          <div className="space-y-2">
            {services.map((service) => (
              <div
                key={service._id || service.tempId}
                className="flex justify-between py-2 border-b border-green-200 last:border-0"
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-800">
                    {service.name}
                  </span>
                  {service.type === "virtual" ? (
                    <Video size={14} className="text-blue-600" />
                  ) : (
                    <MapPin size={14} className="text-green-600" />
                  )}
                </div>

                <span className="text-sm text-gray-600">
                  {service.duration} min
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <button
            onClick={() => onBack(2)}
            disabled={loading}
            className="flex-1 py-3 border-2 border-gray-300 rounded-xl font-semibold"
          >
            Back
          </button>

          <button
            onClick={onSave}
            disabled={loading}
            className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-xl font-semibold"
          >
            {loading ? (
              "Saving..."
            ) : (
              <>
                <Check size={20} />
                Save & Go Live
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewStep;
