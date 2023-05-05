import express from "express";
const router = express.Router();
import {
  addUSer,
  getUser,
  getUsers,
  updateUser,
  deleteUSer,
} from "../controllers/apis.js";

import { requireRole } from "../utils/middlewares.js";

// CREATE - POST
router.post("/addUser", requireRole(""), addUSer);
// READ - GET
router.get("/user/:id", requireRole(""), getUser);
router.get("/users", requireRole(""), getUsers);
// UPDATE - PATCH
router.patch("/updateUser/:id", requireRole(""), updateUser);
// DELETE - DELETE
router.delete("/deleteUSer/:id", requireRole(""), deleteUSer);

export default router;
