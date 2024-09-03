import express from "express";
const router = express.Router();
import { details, getDetails } from "../controllers/detailsController.js";

router.post('/details',details)
router.get('/getDetails',getDetails)

export default router;