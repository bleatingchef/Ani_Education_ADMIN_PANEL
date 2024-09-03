import express from "express";
const router = express.Router();
// import { loanApply,getLoan } from "../controllers/loanController.js";
// import { EligibilityCheck } from "../models/eligibilityModel.js";
import { eligibilityCheck, getEligibility } from "../controllers/eligibilityController.js";

router.post('/eligibility',eligibilityCheck)
router.get('/getEligibility',getEligibility)

export default router;