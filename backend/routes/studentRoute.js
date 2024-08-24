import express from "express";
const router = express.Router();
import { student, deleteStudent, getStudent } from "../controllers/studentController.js";


router.post('/student',student);
router.get('/getStudent',getStudent)
router.delete('/deleteStudent',deleteStudent);

export default router;