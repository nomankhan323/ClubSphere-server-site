import admin from "../config/firebase.js";

const verifyFirebase = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: "Unauthorized: No Token" });
        }

        const decodedUser = await admin.auth().verifyIdToken(token);

        req.user = decodedUser;

        next();
    } catch (error) {
        console.log("Firebase Auth Error:", error.message);
        return res.status(401).json({ message: "Invalid Firebase Token" });
    }
};

export default verifyFirebase;
