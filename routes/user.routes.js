import express from "express";
import { saveUser, getUsers } from "../controllers/user.controller.js";
import verifyFirebase from "../middleware/verifyFirebase.js";

const router = express.Router();

router.post("/save", verifyFirebase, saveUser);
router.get("/", verifyFirebase, getUsers);

export default router;
