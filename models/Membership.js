import mongoose from "mongoose";

const membershipSchema = new mongoose.Schema({
    userEmail: String,
    clubId: String,
    status: { type: String, default: "active" },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Membership", membershipSchema);
