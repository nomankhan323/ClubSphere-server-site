import express from "express";
import {
    createClub,
    getAllClubs,
    approveClub,
    getClubById
} from "../controllers/club.controller.js";
import verifyFirebase from "../middleware/verifyFirebase.js";
import checkRole from "../middleware/checkRole.js";

const router = express.Router();

router.post("/create", verifyFirebase, createClub);

router.get("/", getAllClubs);

router.get("/:id", getClubById);

router.patch("/approve/:id", verifyFirebase, checkRole(["admin"]), approveClub);

export default router;
