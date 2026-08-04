import React, { useEffect } from "react";
import {
  Plus,
  X,
  Edit2,
  Trash2,
  ChevronRight,
  Building2,
  Video,
  MapPin,
} from "lucide-react";
import AddServiceModal from "./AddServiceModal";
import serviceService from "../services/serviceService";

const ServicesStep = ({
  services,
  setServices,
  showServiceModal,
  setShowServiceModal,
  editingService,
  setEditingService,
  onNext,
  onBack,
}) => {
  // Load existing services when component mounts
  useEffect(() => {
    const loadServices = async () => {
      try {
        const response = await serviceService.getServices();
        if (response.data.services) {
          setServices(response.data.services);
        }
      } catch (err) {
        console.error("Failed to load services:", err);
      }
    };

    loadServices();
  }, [setServices]);

  const handleServiceSaved = (savedService) => {
    setServices((prev) => {
      const exists = prev.find((s) => s._id === savedService._id);
      return exists
        ? prev.map((s) => (s._id === savedService._id ? savedService : s))
        : [...prev, savedService];
    });
  };

  const handleDeleteService = async (id) => {
    try {
      await serviceService.deleteService(id);
      setServices((prev) => prev.filter((s) => s._id !== id));
    } catch (err) {
      console.error("Failed to delete service:", err);
      alert("Failed to delete service. Please try again.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#2f2a76] mb-2">
            What services do you offer?
          </h2>
          <p className="text-gray-600">
            Add services with their durations and type
          </p>
        </div>

        <button
          onClick={() => setShowServiceModal(true)}
          className="w-full mb-6 flex items-center justify-center gap-2 bg-[#2f2a76] text-white py-3 rounded-xl font-semibold hover:bg-[#4a45a0] transition-colors border-2 border-dashed border-[#2f2a76]"
        >
          <Plus size={20} />
          <span>Add Service</span>
        </button>

        <div className="space-y-3 mb-8">
          {services.map((service) => (
            <div
              key={service._id}
              className="border-2 border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-gray-800 text-lg">
                      {service.name}
                    </h4>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        service.type === "virtual"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {service.type === "virtual" ? (
                        <span className="flex items-center gap-1">
                          <Video size={12} /> Virtual
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                          <MapPin size={12} /> Physical
                        </span>
                      )}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">
                    Duration:{" "}
                    <span className="font-semibold">
                      {service.duration} minutes
                    </span>
                  </p>
                  {service.type === "virtual" && service.link && (
                    <p className="text-xs text-blue-600 break-all">
                      Link: {service.link}
                    </p>
                  )}
                  {service.description && (
                    <p className="text-sm text-gray-500 mt-2">
                      {service.description}
                    </p>
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setEditingService(service);
                      setShowServiceModal(true);
                    }}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <Edit2 size={18} />
                  </button>
                  <button
                    onClick={() => handleDeleteService(service._id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {services.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <Building2 size={48} className="mx-auto mb-3 opacity-50" />
            <p>No services added yet. Click "Add Service" to get started.</p>
          </div>
        )}

        <div className="flex gap-4">
          <button
            onClick={onBack}
            className="flex-1 py-3 border-2 border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Back
          </button>
          <button
            onClick={onNext}
            disabled={services.length === 0}
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#2f2a76] to-[#4a45a0] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>Preview & Save</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Service Modal */}
      <AddServiceModal
        isOpen={showServiceModal}
        onClose={() => {
          setShowServiceModal(false);
          setEditingService(null);
        }}
        editingService={editingService}
        onSaved={handleServiceSaved}
      />
    </div>
  );
};

export default ServicesStep;
