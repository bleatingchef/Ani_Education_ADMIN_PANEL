import express from "express";
import { deleteUser, getUser, user } from "../controllers/appointmentController.js";
const router = express.Router();

router.post('/user',user)
router.get('/getuser',getUser)
router.delete('/deleteuser',deleteUser)

export default router;


