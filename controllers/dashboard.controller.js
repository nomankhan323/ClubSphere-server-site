import Club from "../models/Club.js";
import Event from "../models/Event.js";
import Membership from "../models/Membership.js";

export const getDashboardStats = async (req, res) => {
    try {
        const totalClubs = await Club.countDocuments();
        const totalEvents = await Event.countDocuments();
        const totalMembers = await Membership.countDocuments();

        res.json({
            totalClubs,
            totalEvents,
            totalMembers,
        });
    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
};
