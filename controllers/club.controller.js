import Club from "../models/Club.js";

export const createClub = async (req, res) => {
    const club = await Club.create({
        ...req.body,
        managerEmail: req.dbUser.email,
        status: "pending",
    });

    res.json(club);
};

export const getAllClubs = async (req, res) => {
    const clubs = await Club.find({ status: "approved" });
    res.json(clubs);
};

export const getClubById = async (req, res) => {
    const club = await Club.findById(req.params.id);
    if (!club) return res.status(404).json({ message: "Not found" });
    res.json(club);
};

export const approveClub = async (req, res) => {
    const club = await Club.findByIdAndUpdate(
        req.params.id,
        { status: "approved" },
        { new: true }
    );

    res.json(club);
};
