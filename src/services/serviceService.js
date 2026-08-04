// import axiosInstance from "../config/axiosinstance.js";

// const serviceService = {
//   createService: (data) => axiosInstance.post("/api/service", data),
//   updateService: (id, data) => axiosInstance.put(`/api/service/${id}`, data),
// };

// export default serviceService;

import axiosInstance from "../config/axiosinstance.js";

const serviceService = {
  // Get all services for the logged-in organization
  getServices: () => axiosInstance.get("/api/service"),

  // Create a new service
  createService: (data) => axiosInstance.post("/api/service", data),

  // Update a service
  updateService: (serviceId, data) =>
    axiosInstance.put(`/api/service/${serviceId}`, data),

  // Delete a service
  deleteService: (serviceId) =>
    axiosInstance.delete(`/api/service/${serviceId}`),

  // Get single service
  getService: (serviceId) => axiosInstance.get(`/api/service/${serviceId}`),
};

export default serviceService;