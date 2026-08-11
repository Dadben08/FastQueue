import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import OperatingHoursStep from "../components/OperatingHoursStep";
import ServicesStep from "../components/ServiceStep";
import PreviewStep from "../components/PreviewStep";
import SuccessModal from "../components/SuccessModal";
import fastqueueImage from "../assets/img/fastqueueImage.png";
import axiosInstance from "../config/axiosinstance.js";

const OrganizationSetup = () => {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [selectedDays, setSelectedDays] = useState({
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: false,
    sunday: false,
  });

  const [openTime, setOpenTime] = useState("08:00");
  const [closeTime, setCloseTime] = useState("17:00");
  const [useCustomHours, setUseCustomHours] = useState(false);

  const [customHours, setCustomHours] = useState({
    monday: { open: "08:00", close: "17:00" },
    tuesday: { open: "08:00", close: "17:00" },
    wednesday: { open: "08:00", close: "17:00" },
    thursday: { open: "08:00", close: "17:00" },
    friday: { open: "08:00", close: "17:00" },
    saturday: { open: "08:00", close: "17:00" },
    sunday: { open: "08:00", close: "17:00" },
  });

  const [services, setServices] = useState([]);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Load existing setup
  useEffect(() => {
    const loadSetup = async () => {
      try {
        const { data } = await axiosInstance.get("/api/users/profile");

        if (data.user?.businessDays?.length) {
          const dayMap = {
            Monday: "monday",
            Tuesday: "tuesday",
            Wednesday: "wednesday",
            Thursday: "thursday",
            Friday: "friday",
            Saturday: "saturday",
            Sunday: "sunday",
          };

          const selected = {};
          const custom = {};

          data.user.businessDays.forEach((d) => {
            const key = dayMap[d.day];
            selected[key] = d.isOpen;
            custom[key] = {
              open: d.openTime || "08:00",
              close: d.closeTime || "17:00",
            };
          });

          setSelectedDays((prev) => ({ ...prev, ...selected }));
          setCustomHours((prev) => ({ ...prev, ...custom }));
        }

        if (data.user?.services?.length) {
          setServices(data.user.services);
        }
      } catch (err) {
        console.error("Failed to load setup", err);
      }
    };

    loadSetup();
  }, []);

  const handleSave = async () => {
    try {
      setLoading(true);
      setError("");

      const daysMap = {
        monday: "Monday",
        tuesday: "Tuesday",
        wednesday: "Wednesday",
        thursday: "Thursday",
        friday: "Friday",
        saturday: "Saturday",
        sunday: "Sunday",
      };

      const businessDaysPayload = Object.entries(selectedDays).map(
        ([day, isOpen]) => ({
          day: daysMap[day],
          isOpen,
          openTime: isOpen
            ? useCustomHours
              ? customHours[day].open
              : openTime
            : null,
          closeTime: isOpen
            ? useCustomHours
              ? customHours[day].close
              : closeTime
            : null,
        })
      );

      const servicesPayload = services.map((service) => ({
        name: service.name.trim(),
        duration: Number(service.duration),
        description: service.description?.trim() || "",
        type: service.type,
        link: service.type === "virtual" ? service.link : undefined,
      }));

      await axiosInstance.put("/api/users/setup", {
        services: servicesPayload,
        businessDays: businessDaysPayload,
        setupCompleted: true,
      });

      localStorage.setItem("setupCompleted", "true");
      setShowSuccessModal(true);
    } catch (err) {
      console.error("Setup error:", err);
      setError(err.response?.data?.message || "Setup failed");
    } finally {
      setLoading(false);
    }
  };

  const handleServicesNext = () => {
    if (services.length === 0) {
      setError("Please add at least one service before continuing.");
      return;
    }

    setError("");
    setCurrentStep(3);
  };

  const handleConfirmAndNavigate = () => {
    setShowSuccessModal(false);
    navigate("/dashboard");
  };

  const handleSkip = () => {
    if (!loading) navigate("/dashboard");
  };

  const steps = [
    { number: 1, title: "Operating Hours" },
    { number: 2, title: "Services" },
    { number: 3, title: "Preview & Save" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#2f2a76]">
              FastQueue Setup
            </h1>
            <p className="text-gray-600 mt-2">
              Let's get your organization ready to accept bookings
            </p>
          </div>

          <button
            onClick={handleSkip}
            disabled={loading}
            className="text-gray-500 hover:text-[#2f2a76] disabled:opacity-50"
          >
            Skip and do later
          </button>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <div className="mb-12 flex justify-center gap-4">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                    currentStep >= step.number
                      ? "bg-[#2f2a76] text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {currentStep > step.number ? <Check size={20} /> : step.number}
                </div>
                <p className="text-sm mt-2">{step.title}</p>
              </div>

              {index < steps.length - 1 && (
                <div
                  className={`h-1 w-24 mt-6 ${
                    currentStep > step.number
                      ? "bg-[#2f2a76]"
                      : "bg-gray-200"
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {currentStep === 1 && (
          <OperatingHoursStep
            selectedDays={selectedDays}
            setSelectedDays={setSelectedDays}
            openTime={openTime}
            setOpenTime={setOpenTime}
            closeTime={closeTime}
            setCloseTime={setCloseTime}
            useCustomHours={useCustomHours}
            setUseCustomHours={setUseCustomHours}
            customHours={customHours}
            setCustomHours={setCustomHours}
            onNext={() => setCurrentStep(2)}
          />
        )}

        {currentStep === 2 && (
          <ServicesStep
            services={services}
            setServices={setServices}
            showServiceModal={showServiceModal}
            setShowServiceModal={setShowServiceModal}
            editingService={editingService}
            setEditingService={setEditingService}
            onNext={handleServicesNext}
            onBack={() => setCurrentStep(1)}
          />
        )}

        {currentStep === 3 && (
          <PreviewStep
            selectedDays={selectedDays}
            openTime={openTime}
            closeTime={closeTime}
            useCustomHours={useCustomHours}
            customHours={customHours}
            services={services}
            onBack={(step) => setCurrentStep(step)}
            onSave={handleSave}
            loading={loading}
          />
        )}

        <SuccessModal
          isOpen={showSuccessModal}
          onConfirm={handleConfirmAndNavigate}
          onClose={() => setShowSuccessModal(false)}
        />
      </div>
    </div>
  );
};

export default OrganizationSetup;