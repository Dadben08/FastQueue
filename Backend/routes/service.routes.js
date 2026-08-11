import express from "express";
import {
  createService,
  getOrganizationServices,
  updateService,
  deleteService,
} from "../controllers/service.controller.js";
import protect from "../middleware/auth.js";

const router = express.Router();

router.get(
  "/organization/:organizationId",
  getOrganizationServices
);

router.post("/", protect, createService);
router.put("/:id", protect, updateService);
router.delete("/:id", protect, deleteService);

export default router;