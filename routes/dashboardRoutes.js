import express from "express";
import Club from "../models/Club.js";
import Event from "../models/Event.js";
import User from "../models/User.js";

const router = express.Router();

router.get("/stats", async (req, res) => {
    try {
        const totalClubs = await Club.countDocuments();
        const totalEvents = await Event.countDocuments();
        const totalMembers = await User.countDocuments();

        res.json({
            totalClubs,
            totalEvents,
            totalMembers
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
});

export default router;
