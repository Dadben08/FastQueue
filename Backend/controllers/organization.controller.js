import Organization from "../models/Organization.js";

const generateSlug = (name) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export const createOrganization = async (req, res) => {
  try {
    const {
      name,
      industry,
      address,
      city,
      state,
      phone,
      email,
      businessDays,
    } = req.body;

    const organization = await Organization.create({
      name,
      slug: generateSlug(name),
      industry,
      address,
      city,
      state,
      phone,
      email,
      businessDays,
      owner: req.user.id,
      setupCompleted: true,
    });

    res.status(201).json(organization);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOrganizations = async (req, res) => {
  try {
    const organizations = await Organization.find({
      isPublished: true,
    });

    res.json(organizations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOrganizationBySlug = async (req, res) => {
  try {
    const organization = await Organization.findOne({
      slug: req.params.slug,
    });

    if (!organization) {
      return res.status(404).json({
        message: "Organization not found",
      });
    }

    res.json(organization);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateOrganization = async (req, res) => {
  try {
    const organization = await Organization.findOneAndUpdate(
      {
        owner: req.user.id,
      },
      req.body,
      {
        new: true,
      }
    );

    res.json(organization);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};