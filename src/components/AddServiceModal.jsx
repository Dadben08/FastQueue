import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import serviceService from "../services/serviceService";

const defaultService = {
  name: "",
  duration: 30,
  description: "",
  type: "physical",
  link: "",
};

const AddServiceModal = ({
  isOpen,
  onClose,
  onSaved,
  editingService = null,
}) => {
  const [service, setService] = useState(defaultService);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Populate form when editing
  useEffect(() => {
    if (editingService) {
      setService(editingService);
    } else {
      setService(defaultService);
    }
  }, [editingService]);

  if (!isOpen) return null;

  const handleSave = async () => {
    try {
      setLoading(true);
      setError("");

      let response;

      if (editingService?._id) {
        response = await serviceService.updateService(
          editingService._id,
          service
        );
      } else {
        response = await serviceService.createService(service);
      }

      // Backend returns { success, message, service }
      const savedService = response.data.service;

      onSaved(savedService);
      onClose();
      setService(defaultService);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Failed to save service");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-[#2f2a76]">
            {editingService ? "Edit Service" : "Add New Service"}
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <X size={20} />
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

        <div className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Service Name *
            </label>
            <input
              value={service.name}
              onChange={(e) => setService({ ...service, name: e.target.value })}
              className="w-full px-4 py-2 border-2 rounded-lg"
            />
          </div>

          {/* Type */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Service Type *
            </label>
            <select
              value={service.type}
              onChange={(e) =>
                setService({
                  ...service,
                  type: e.target.value,
                  link: "",
                })
              }
              className="w-full px-4 py-2 border-2 rounded-lg"
            >
              <option value="physical">Physical</option>
              <option value="virtual">Virtual</option>
            </select>
          </div>

          {/* Virtual link */}
          {service.type === "virtual" && (
            <div>
              <label className="block text-sm font-semibold mb-2">
                Meeting Link *
              </label>
              <input
                value={service.link}
                onChange={(e) =>
                  setService({ ...service, link: e.target.value })
                }
                className="w-full px-4 py-2 border-2 rounded-lg"
              />
            </div>
          )}

          {/* Duration */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Duration *
            </label>
            <select
              value={service.duration}
              onChange={(e) =>
                setService({
                  ...service,
                  duration: Number(e.target.value),
                })
              }
              className="w-full px-4 py-2 border-2 rounded-lg"
            >
              <option value={15}>15 mins</option>
              <option value={30}>30 mins</option>
              <option value={45}>45 mins</option>
              <option value={60}>1 hour</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Description
            </label>
            <textarea
              rows={3}
              value={service.description}
              onChange={(e) =>
                setService({
                  ...service,
                  description: e.target.value,
                })
              }
              className="w-full px-4 py-2 border-2 rounded-lg resize-none"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-6">
          <button onClick={onClose} className="flex-1 border-2 py-2 rounded-lg">
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={
              loading ||
              !service.name ||
              (service.type === "virtual" && !service.link)
            }
            className="flex-1 bg-[#2f2a76] text-white py-2 rounded-lg disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddServiceModal;
