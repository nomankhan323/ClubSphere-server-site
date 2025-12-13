import Membership from "../models/Membership.js";

export const joinClub = async (req, res) => {
    const email = req.dbUser.email;
    const { clubId } = req.body;

    const exists = await Membership.findOne({ clubId, userEmail: email });

    if (exists) {
        return res.status(400).json({ message: "Already joined" });
    }

    const membership = await Membership.create({
        clubId,
        userEmail: email,
    });

    res.json(membership);
};

export const getMemberships = async (req, res) => {
    const data = await Membership.find({ userEmail: req.dbUser.email });
    res.json(data);
};
