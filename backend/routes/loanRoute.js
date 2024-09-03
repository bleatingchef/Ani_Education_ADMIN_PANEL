import express from "express";
const router = express.Router();
import { loanApply,getLoan, deleteloan } from "../controllers/loanController.js";

router.post('/loanApply',loanApply)
router.get('/getLoan',getLoan)
router.delete('/deleteloan',deleteloan)

export default router;