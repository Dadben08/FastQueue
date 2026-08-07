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
  const [queue, setQueue] = useState([]);
  const [currentTicket, setCurrentTicket] = useState(null);

  const [stats, setStats] = useState({
    waitingCustomers: 0,
    servedToday: 0,
    averageWaitTime: 0,
    currentQueue: "A001",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch organization profile
  const fetchOrgData = async () => {
    try {
      const data = await dashboardService.getOrganizationProfile();
      setOrgData(data);
      localStorage.setItem("userData", JSON.stringify(data));
    } catch (err) {
      console.error("Failed to fetch organization data:", err);
      setError(err.message);
    }
  };

  // Fetch today's queue
  const fetchQueue = async () => {
    try {
      const data = await dashboardService.getTodayQueue();

      setQueue(data.queue || []);
      setCurrentTicket(data.currentTicket || null);
    } catch (err) {
      console.error("Failed to fetch queue:", err);

      // Demo data while backend is not ready
      setQueue([
        { ticket: "A021", name: "John", status: "Completed" },
        { ticket: "A022", name: "Mary", status: "Serving" },
        { ticket: "A023", name: "Peter", status: "Waiting" },
      ]);

      setCurrentTicket("A022");
    }
  };

  // Fetch dashboard statistics
  const fetchStats = async () => {
    try {
      const data = await dashboardService.getDashboardStats();

      setStats(
        data.stats || {
          waitingCustomers: 18,
          servedToday: 186,
          averageWaitTime: 12,
          currentQueue: "A022",
        }
      );
    } catch (err) {
      console.error("Failed to fetch dashboard stats:", err);

      setStats({
        waitingCustomers: 18,
        servedToday: 186,
        averageWaitTime: 12,
        currentQueue: "A022",
      });
    }
  };

  // Load dashboard data
  useEffect(() => {
    const loadDashboardData = async () => {
      setLoading(true);

      await Promise.all([
        fetchOrgData(),
        fetchQueue(),
        fetchStats(),
      ]);

      setLoading(false);
    };

    loadDashboardData();
  }, []);

  // Refresh dashboard
  const refresh = async () => {
    await Promise.all([
      fetchOrgData(),
      fetchQueue(),
      fetchStats(),
    ]);
  };

  // Call next customer
  const callNextCustomer = () => {
    const waiting = queue.find((customer) => customer.status === "Waiting");

    if (!waiting) return;

    setCurrentTicket(waiting.ticket);

    setQueue((prev) =>
      prev.map((customer) =>
        customer.ticket === waiting.ticket
          ? { ...customer, status: "Serving" }
          : customer
      )
    );
  };

  // Complete current customer
  const completeCurrentCustomer = () => {
    if (!currentTicket) return;

    setQueue((prev) =>
      prev.map((customer) =>
        customer.ticket === currentTicket
          ? { ...customer, status: "Completed" }
          : customer
      )
    );

    setStats((prev) => ({
      ...prev,
      servedToday: prev.servedToday + 1,
      waitingCustomers: Math.max(prev.waitingCustomers - 1, 0),
    }));

    setCurrentTicket(null);
  };

  const value = {
    orgData,
    queue,
    currentTicket,
    stats,
    loading,
    error,
    refresh,
    callNextCustomer,
    completeCurrentCustomer,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};