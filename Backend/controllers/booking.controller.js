import Booking from "../models/Booking.js";

const generateQueueNumber = () => {
  return (
    "A" +
    Math.floor(100 + Math.random() * 900)
  );
};

export const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create({
      organization: req.body.organizationId,
      service: req.body.serviceId,
      customerName: req.body.customerName,
      phone: req.body.phone,
      email: req.body.email,
      appointmentDate: req.body.appointmentDate,
      appointmentTime: req.body.appointmentTime,
      queueNumber: generateQueueNumber(),
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOrganizationBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({
      organization: req.params.organizationId,
    })
      .populate("service")
      .sort({ createdAt: -1 });

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBookingStatus = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};