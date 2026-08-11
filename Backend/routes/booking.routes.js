import express from "express";
import {
  createBooking,
  getOrganizationBookings,
  updateBookingStatus,
} from "../controllers/booking.controller.js";
import protect from "../middleware/auth.js";

const router = express.Router();

router.post("/", createBooking);

router.get(
  "/organization/:organizationId",
  protect,
  getOrganizationBookings
);

router.put(
  "/:id/status",
  protect,
  updateBookingStatus
);

export default router;