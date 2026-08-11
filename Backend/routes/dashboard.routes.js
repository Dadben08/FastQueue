import express from "express";
import {
  getDashboardSummary,
  getDashboardBookings,
} from "../controllers/dashboard.controller.js";
import protect from "../middleware/auth.js";

const router = express.Router();

router.get(
  "/summary",
  protect,
  getDashboardSummary
);

router.get(
  "/bookings",
  protect,
  getDashboardBookings
);

export default router;