import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
} from "../controllers/userControllers";

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);

export default router;
