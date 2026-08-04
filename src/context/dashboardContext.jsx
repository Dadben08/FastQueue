import React, { createContext, useContext, useState, useEffect } from "react";
import dashboardService from "../services/dashboardService";

const DashboardContext = createContext();

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within DashboardProvider");
  }
  return context;
};

export const DashboardProvider = ({ children }) => {
  const [orgData, setOrgData] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [stats, setStats] = useState({
    todayTotal: 0,
    completed: 0,
    inProgress: 0,
    noShows: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch organization data
  const fetchOrgData = async () => {
    try {
      const data = await dashboardService.getOrganizationProfile();
      setOrgData(data);
      localStorage.setItem("userData", JSON.stringify(data));
    } catch (err) {
      console.error("Failed to fetch org data:", err);
      setError(err.message);
    }
  };

  // Fetch appointments
  const fetchAppointments = async () => {
    try {
      const data = await dashboardService.getTodayAppointments();
      setAppointments(data.appointments || []);
    } catch (err) {
      console.error("Failed to fetch appointments:", err);
      // Set empty array if endpoint doesn't exist yet
      setAppointments([]);
    }
  };

  // Fetch dashboard stats
  const fetchStats = async () => {
    try {
      const data = await dashboardService.getDashboardStats();
      setStats(data.stats || stats);
    } catch (err) {
      console.error("Failed to fetch stats:", err);
      // Keep default stats if endpoint doesn't exist yet
    }
  };

  // Initial data load
  useEffect(() => {
    const loadDashboardData = async () => {
      setLoading(true);
      await Promise.all([fetchOrgData(), fetchAppointments(), fetchStats()]);
      setLoading(false);
    };

    loadDashboardData();
  }, []);

  // Refresh function
  const refresh = async () => {
    await Promise.all([fetchOrgData(), fetchAppointments(), fetchStats()]);
  };

  const value = {
    orgData,
    appointments,
    stats,
    loading,
    error,
    refresh,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};
