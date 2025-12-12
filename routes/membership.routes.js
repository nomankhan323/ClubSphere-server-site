import express from "express";
import { joinClub, getMemberships } from "../controllers/membership.controller.js";

const router = express.Router();

router.post("/join", joinClub);
router.get("/", getMemberships);

export default router;
