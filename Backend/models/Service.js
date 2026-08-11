import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    duration: Number,

    description: String,

    type: {
      type: String,
      enum: ["physical", "virtual"],
      default: "physical",
    },

    link: String,

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Service", serviceSchema);