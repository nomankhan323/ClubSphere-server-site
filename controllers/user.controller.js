import User from "../models/User.js";

export const saveUser = async (req, res) => {
    const { email, name, photoURL, uid } = req.body;

    const exists = await User.findOne({ uid });

    if (exists) {
        return res.json(exists);
    }

    const newUser = await User.create({
        uid,
        email,
        name,
        photoURL,
        role: "member",
    });

    res.json(newUser);
};

export const getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

export const updateUserRole = async (req, res) => {
    const { role } = req.body;

    const user = await User.findByIdAndUpdate(
        req.params.id,
        { role },
        { new: true }
    );

    res.json(user);
};
