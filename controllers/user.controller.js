import User from "../models/User.js";

export const saveUser = async (req, res) => {
    const { email, name, photoURL, uid } = req.body;

    const exists = await User.findOne({ email });

    if (exists) return res.json({ message: "User already exists" });

    const newUser = await User.create({ email, name, photoURL, uid });

    res.json(newUser);
};

export const getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};
