import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUser,
} from "../controllers/userControllers.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.route("/user").get(protect, getUser);

export default router;
