import Club from "../models/Club.js";

export const createClub = async (req, res) => {
    const club = await Club.create({
        ...req.body,
        managerEmail: req.dbUser.email,
        status: "pending",
        createdAt: new Date(),
    });

    res.json(club);
};


export const getAllClubs = async (req, res) => {
    const clubs = await Club.find({ status: "approved" });
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

export const getClubById = async (req, res) => {
    try {
        const club = await Club.findById(req.params.id);

        if (!club) {
            return res.status(404).json({ message: "Club not found" });
        }

        res.json(club);

    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
};
