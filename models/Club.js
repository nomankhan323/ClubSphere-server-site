import mongoose from "mongoose";

const clubSchema = new mongoose.Schema({
    clubName: String,
    description: String,
    category: String,
    location: String,
    bannerImage: String,
    membershipFee: { type: Number, default: 0 },
    status: { type: String, default: "pending" },
    managerEmail: String,
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Club", clubSchema);
