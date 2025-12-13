import mongoose from "mongoose";

const membershipSchema = new mongoose.Schema({
    userEmail: String,
    clubId: String,
    status: {
        type: String,
        enum: ["active", "expired", "pendingPayment"],
        default: "active",
    },
    paymentId: String,
    joinedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Membership", membershipSchema);
