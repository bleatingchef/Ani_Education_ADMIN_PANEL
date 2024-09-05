import express from "express";
const router=express.Router();
import { getsignupData, signupCheck } from "../controllers/signupController.js";



router.post('/signUp',signupCheck);
router.get('/getsignup',getsignupData);

export default router;