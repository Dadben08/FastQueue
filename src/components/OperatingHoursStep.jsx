import React from "react";
import { ChevronRight } from "lucide-react";

const DAYS = [
  { key: "monday", label: "Mon" },
  { key: "tuesday", label: "Tue" },
  { key: "wednesday", label: "Wed" },
  { key: "thursday", label: "Thu" },
  { key: "friday", label: "Fri" },
  { key: "saturday", label: "Sat" },
  { key: "sunday", label: "Sun" },
];

const OperatingHoursStep = ({
  selectedDays,
  setSelectedDays,
  openTime,
  setOpenTime,
  closeTime,
  setCloseTime,
  useCustomHours,
  setUseCustomHours,
  customHours,
  setCustomHours,
  onNext,
}) => {
  const toggleDay = (day) => {
    setSelectedDays((prev) => ({
      ...prev,
      [day]: !prev[day],
    }));
  };

  const updateCustomHours = (day, field, value) => {
    setCustomHours((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [field]: value,
      },
    }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-[#2f2a76] mb-2">
          When are you open?
        </h2>
        <p className="text-gray-600 mb-6">
          Select the days and hours customers can book
        </p>

        {/* Days */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-3">
            {DAYS.map((day) => (
              <button
                key={day.key}
                onClick={() => toggleDay(day.key)}
                className={`px-4 py-2 rounded-lg font-medium ${
                  selectedDays[day.key]
                    ? "bg-[#2f2a76] text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {day.label}
              </button>
            ))}
          </div>
        </div>

        {/* Hours */}
        {!useCustomHours ? (
          <div className="flex gap-4 mb-6">
            <input
              type="time"
              value={openTime}
              onChange={(e) => setOpenTime(e.target.value)}
              className="flex-1 border-2 rounded-lg px-3 py-2"
            />
            <input
              type="time"
              value={closeTime}
              onChange={(e) => setCloseTime(e.target.value)}
              className="flex-1 border-2 rounded-lg px-3 py-2"
            />
          </div>
        ) : (
          <div className="space-y-3 mb-6">
            {DAYS.filter((d) => selectedDays[d.key]).map((day) => (
              <div key={day.key} className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold capitalize mb-2">{day.key}</p>
                <div className="flex gap-3">
                  <input
                    type="time"
                    value={customHours[day.key]?.open || ""}
                    onChange={(e) =>
                      updateCustomHours(day.key, "open", e.target.value)
                    }
                    className="flex-1 border-2 rounded-lg px-3 py-2"
                  />
                  <input
                    type="time"
                    value={customHours[day.key]?.close || ""}
                    onChange={(e) =>
                      updateCustomHours(day.key, "close", e.target.value)
                    }
                    className="flex-1 border-2 rounded-lg px-3 py-2"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={() => setUseCustomHours((p) => !p)}
          className="text-sm text-[#2f2a76] font-semibold mb-6"
        >
          {useCustomHours
            ? "Use same hours for all days"
            : "Use different hours per day"}
        </button>

        <button
          onClick={onNext}
          className="w-full bg-[#2f2a76] text-white py-3 rounded-xl flex items-center justify-center gap-2"
        >
          Continue
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default OperatingHoursStep;
