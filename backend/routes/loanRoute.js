import express from "express";
const router = express.Router();
import { loanApply } from "../controllers/loanController.js";

router.post('/loanApply',loanApply)

export default router;