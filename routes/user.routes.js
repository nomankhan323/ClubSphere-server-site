import express from "express";
import {
    saveUser,
    getUsers,
    updateUserRole,
} from "../controllers/user.controller.js";
import verifyFirebase from "../middleware/verifyFirebase.js";
import checkRole from "../middleware/checkRole.js";

const router = express.Router();

router.post("/save", verifyFirebase, saveUser);

router.get("/", verifyFirebase, checkRole(["admin"]), getUsers);

router.patch(
    "/:id/role",
    verifyFirebase,
    checkRole(["admin"]),
    updateUserRole
);

export default router;
