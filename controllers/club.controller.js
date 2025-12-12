import Club from "../models/Club.js";

export const createClub = async (req, res) => {
    const club = await Club.create(req.body);
    res.json(club);
};

export const getAllClubs = async (req, res) => {
    const clubs = await Club.find();
    res.json(clubs);
};

export const approveClub = async (req, res) => {
    const club = await Club.findByIdAndUpdate(
        req.params.id,
        { status: "approved" },
        { new: true }
    );

    res.json(club);
};
