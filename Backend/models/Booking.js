import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
      required: true,
    },

    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
    },

    customerName: String,
    phone: String,
    email: String,

    appointmentDate: String,
    appointmentTime: String,

    queueNumber: String,

    status: {
      type: String,
      enum: ["waiting", "serving", "completed", "cancelled"],
      default: "waiting",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);