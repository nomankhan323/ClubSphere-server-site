import Membership from "../models/Membership.js";

export const joinClub = async (req, res) => {
    const membership = await Membership.create(req.body);
    res.json(membership);
};

export const getMemberships = async (req, res) => {
    const data = await Membership.find();
    res.json(data);
};
