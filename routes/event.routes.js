import express from "express";
import { createEvent, getEvents } from "../controllers/event.controller.js";

const router = express.Router();

router.post("/create", createEvent);
router.get("/", getEvents);

export default router;
