import Service from "../models/Service.js";
import Organization from "../models/Organization.js";

export const createService = async (req, res) => {
  try {
    const organization = await Organization.findOne({
      owner: req.user.id,
    });

    const service = await Service.create({
      organization: organization._id,
      ...req.body,
    });

    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOrganizationServices = async (req, res) => {
  try {
    const services = await Service.find({
      organization: req.params.organizationId,
      isActive: true,
    });

    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteService = async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);

    res.json({
      message: "Service deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};