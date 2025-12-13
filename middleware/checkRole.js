import User from "../models/User.js";

const checkRole = (allowedRoles) => {
    return async (req, res, next) => {
        try {
            const firebaseUid = req.user.uid;

            const dbUser = await User.findOne({ uid: firebaseUid });

            if (!dbUser) {
                return res.status(401).json({ message: "User not found in DB" });
            }

            if (!allowedRoles.includes(dbUser.role)) {
                return res.status(403).json({ message: "Forbidden: Access Denied" });
            }

            req.dbUser = dbUser;
            next();
        } catch (err) {
            res.status(500).json({ message: "Role check failed" });
        }
    };
};

export default checkRole;
