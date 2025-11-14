import express from "express";
import { registerUser } from "./contollers.js";

const router = express.Router();

router.post("/user/register", registerUser);

export default router;
