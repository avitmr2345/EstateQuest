import express from "express";
import { signup, signin, signOut, google } from "../controllers/auth.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/signout", signOut);
router.post("/google", google);

export default router;
