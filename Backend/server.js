import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";

// Routes
import organizationRoutes from "./routes/organization.routes.js";
import serviceRoutes from "./routes/service.routes.js";
import bookingRoutes from "./routes/booking.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";

dotenv.config();

// Connect MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(morgan("dev"));

// Test route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "FastQueue API is running",
  });
});

// API Routes
app.use("/api/organizations", organizationRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/dashboard", dashboardRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Server error",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`FastQueue server running on port ${PORT}`);
});