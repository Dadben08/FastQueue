import axiosInstance from "../config/axiosinstance.js";

const serviceService = {
  // Get all services for the logged-in organization
  getServices: async () => {
    try {
      const response = await axiosInstance.get("/api/service");
      return response.data;
    } catch (error) {
      // Demo data while backend is not ready
      return {
        services: [
          {
            _id: "1",
            name: "Account Opening",
            duration: 15,
            prefix: "A",
          },
          {
            _id: "2",
            name: "Cash Deposit",
            duration: 5,
            prefix: "D",
          },
          {
            _id: "3",
            name: "Customer Support",
            duration: 10,
            prefix: "C",
          },
        ],
      };
    }
  },

  // Get a single service
  getService: async (serviceId) => {
    const response = await axiosInstance.get(`/api/service/${serviceId}`);
    return response.data;
  },

  // Create a new queue service
  createService: async (data) => {
    const response = await axiosInstance.post("/api/service", data);
    return response.data;
  },

  // Update a queue service
  updateService: async (serviceId, data) => {
    const response = await axiosInstance.put(
      `/api/service/${serviceId}`,
      data
    );
    return response.data;
  },

  // Delete a queue service
  deleteService: async (serviceId) => {
    const response = await axiosInstance.delete(
      `/api/service/${serviceId}`
    );
    return response.data;
  },

  // Generate a queue ticket for a service
  generateTicket: async (serviceId) => {
    try {
      const response = await axiosInstance.post(
        `/api/service/${serviceId}/ticket`
      );
      return response.data;
    } catch (error) {
      // Demo ticket generation
      return {
        ticket: "A025",
        service: "Account Opening",
        estimatedWait: 12,
      };
    }
  },
};

export default serviceService;