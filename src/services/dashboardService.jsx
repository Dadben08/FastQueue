import axiosInstance from "../config/axiosinstance.js";

const dashboardService = {
  // Get organization profile
  getOrganizationProfile: async () => {
    try {
      const response = await axiosInstance.get("/api/users/profile");
      return response.data;
    } catch (error) {
      // Return demo data while backend is not ready
      return {
        orgName: "Access Bank Ikeja",
        orgEmail: "ikeja@accessbank.com",
        orgAddress: "Ikeja, Lagos",
        category: "Banking",
      };
    }
  },

  // Get today's queue
  getTodayQueue: async () => {
    try {
      const response = await axiosInstance.get("/api/queue/today");
      return response.data;
    } catch (error) {
      // Demo queue data
      return {
        queue: [
          {
            ticket: "A021",
            name: "John Doe",
            phone: "08031234567",
            status: "Completed",
          },
          {
            ticket: "A022",
            name: "Mary Johnson",
            phone: "08039876543",
            status: "Serving",
          },
          {
            ticket: "A023",
            name: "Peter Ade",
            phone: "08035551234",
            status: "Waiting",
          },
          {
            ticket: "A024",
            name: "David Musa",
            phone: "08037778899",
            status: "Waiting",
          },
        ],

        currentTicket: "A022",
      };
    }
  },

  // Get dashboard statistics
  getDashboardStats: async () => {
    try {
      const response = await axiosInstance.get("/api/dashboard/stats");
      return response.data;
    } catch (error) {
      // Demo dashboard stats
      return {
        stats: {
          waitingCustomers: 18,
          servedToday: 186,
          averageWaitTime: 12,
          currentQueue: "A022",
        },
      };
    }
  },
};

export default dashboardService;