import express from "express";
import {
  createOrganization,
  getOrganizations,
  getOrganizationBySlug,
  updateOrganization,
} from "../controllers/organization.controller.js";
import protect from "../middleware/auth.js";

const router = express.Router();

router.get("/", getOrganizations);
router.get("/:slug", getOrganizationBySlug);

router.post("/", protect, createOrganization);
router.put("/me", protect, updateOrganization);

export default router;