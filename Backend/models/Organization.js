import mongoose from "mongoose";

const businessDaySchema = new mongoose.Schema({
  day: String,
  isOpen: Boolean,
  openTime: String,
  closeTime: String,
});

const organizationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      required: true,
    },
    industry: {
      type: String,
      required: true,
    },
    address: String,
    city: String,
    state: String,
    phone: String,
    email: String,
    logo: String,

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    businessDays: [businessDaySchema],

    setupCompleted: {
      type: Boolean,
      default: false,
    },

    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Organization", organizationSchema);