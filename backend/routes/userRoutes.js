import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUser,
} from "../controllers/userControllers.js";

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.get("/user", getUser);

export default router;
