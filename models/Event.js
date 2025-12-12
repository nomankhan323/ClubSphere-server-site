import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    clubId: String,
    title: String,
    description: String,
    date: String,
});

export default mongoose.model("Event", eventSchema);
