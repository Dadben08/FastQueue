import Organization from "../models/Organization.js";
import Booking from "../models/Booking.js";

export const getDashboardSummary = async (req, res) => {
  try {
    const organization = await Organization.findOne({
      owner: req.user.id,
    });

    const totalBookings = await Booking.countDocuments({
      organization: organization._id,
    });

    const waiting = await Booking.countDocuments({
      organization: organization._id,
      status: "waiting",
    });

    const serving = await Booking.countDocuments({
      organization: organization._id,
      status: "serving",
    });

    res.json({
      totalBookings,
      waiting,
      serving,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDashboardBookings = async (req, res) => {
  try {
    const organization = await Organization.findOne({
      owner: req.user.id,
    });

    const bookings = await Booking.find({
      organization: organization._id,
    })
      .populate("service")
      .sort({ createdAt: -1 });

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};