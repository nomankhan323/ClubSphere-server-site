import express from "express";
import { joinClub, getMemberships } from "../controllers/membership.controller.js";
import verifyFirebase from "../middleware/verifyFirebase.js";
import checkRole from "../middleware/checkRole.js";

const router = express.Router();

router.post("/join", verifyFirebase, checkRole(["member"]), joinClub);

router.get("/", verifyFirebase, getMemberships);

export default router;
