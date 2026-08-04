import axiosInstance from "../config/axiosinstance.js";

const dashboardService = {
  // Get organization profile with all data
  getOrganizationProfile: async () => {
    const response = await axiosInstance.get("/api/users/profile");
    return response.data;
  },

  // Get today's appointments/bookings
  getTodayAppointments: async () => {
    const response = await axiosInstance.get("/api/bookings/today");
    return response.data;
  },

  // Get dashboard stats
  getDashboardStats: async () => {
    const response = await axiosInstance.get("/api/dashboard/stats");
    return response.data;
  },
};

export default dashboardService;
