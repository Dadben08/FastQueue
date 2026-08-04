import axiosInstance from "../config/axiosinstance.js";

const authService = {
  // Register Organization
  registerOrg: (data) => axiosInstance.post("/api/users/register", data),

  // Login Organization
  loginOrg: async (data) => {
    const response = await axiosInstance.post("/api/users/login", data);

    // Store token and user data
    if (response.data.token) {
      localStorage.setItem("authToken", response.data.token);
    }

    if (response.data.user || response.data.organization) {
      localStorage.setItem(
        "userData",
        JSON.stringify(response.data.user || response.data.organization)
      );
    }

    return response;
  },

  // Verify Email
  verifyEmail: (token) => axiosInstance.get(`/api/users/verify/${token}`),

  // Logout
  logout: () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    localStorage.removeItem("setupCompleted");
  },
};

export default authService;

// import axios from 'axios';

// // Create axios instance with base configuration
// const api = axios.create({
//   baseURL: process.env.SERVER_URL || '/api/user',
//   timeout: 10000, // 10 seconds timeout
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// useEffect(() => {
//     getUser()
// },[])

// // Request interceptor to add auth token if available
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('authToken');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Response interceptor for error handling
// api.interceptors.response.use(
//   (response) => response.data,
//   (error) => {
//     const errorMessage = error.response?.data?.message ||
//                         error.message ||
//                         'Something went wrong';

//     console.error('API Error:', {
//       message: errorMessage,
//       status: error.response?.status,
//       url: error.config?.url,
//     });

//     // Handle specific HTTP status codes
//     if (error.response?.status === 401) {
//       // Redirect to login or refresh token
//       localStorage.removeItem('authToken');
//       window.location.href = '/login';
//     }

//     return Promise.reject(new Error(errorMessage));
//   }
// );

// // Business API endpoints
// export const businessAPI = {
//   // Get all businesses
//   getBusinesses: () => api.get('/businesses'),

//   // Search businesses
//   searchBusinesses: (searchTerm, category) =>
//     api.get('/businesses/search', {
//       params: {
//         q: searchTerm,
//         category: category !== 'All' ? category : undefined
//       }
//     }),

//   // Get single business
//   getBusiness: (id) => api.get(`/businesses/${id}`),

//   // Create new business
//   createBusiness: (businessData) => api.post('/businesses', businessData),

//   // Update business
//   updateBusiness: (id, businessData) => api.put(`/businesses/${id}`, businessData),

//   // Delete business
//   deleteBusiness: (id) => api.delete(`/businesses/${id}`),
// };

// // Queue API endpoints
// export const queueAPI = {
//   // Join queue
//   joinQueue: (queueData) => api.post('/queues/join', queueData),

//   // Get queue position
//   getQueuePosition: (queueId) => api.get(`/queues/${queueId}/position`),

//   // Get user's active queues
//   getUserQueues: () => api.get('/queues/user'),

//   // Cancel queue
//   cancelQueue: (queueId) => api.delete(`/queues/${queueId}`),

//   // Update queue status
//   updateQueueStatus: (queueId, status) =>
//     api.patch(`/queues/${queueId}/status`, { status }),
// };

// // User/Auth API endpoints
// export const authAPI = {
//   // Register user
//   register: (userData) => api.post('/auth/register', userData),

//   // Login user
//   login: (credentials) => api.post('/auth/login', credentials),

//   // Get user profile
//   getProfile: () => api.get('/auth/profile'),

//   // Update user profile
//   updateProfile: (userData) => api.put('/auth/profile', userData),

//   // Logout user
//   logout: () => {
//     localStorage.removeItem('authToken');
//     return Promise.resolve();
//   },
// };

// // Export the base api instance for custom requests
// export default authservice;
