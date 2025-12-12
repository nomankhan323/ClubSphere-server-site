import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import userRoutes from "./routes/user.routes.js";
import clubRoutes from "./routes/club.routes.js";
import eventRoutes from "./routes/event.routes.js";
import membershipRoutes from "./routes/membership.routes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// DB Connect
connectDB();

// Routes
app.use("/api/users", userRoutes);
app.use("/api/clubs", clubRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/memberships", membershipRoutes);
app.use("/api/dashboard", dashboardRoutes);

// Default
app.get("/", (req, res) => {
    res.send("ClubSphere Backend Running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🔥 Server running on port ${PORT}`));
