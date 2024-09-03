import express from "express";
const router = express.Router();
import { details } from "../controllers/detailsController.js";

router.post('/details',details)

export default router;