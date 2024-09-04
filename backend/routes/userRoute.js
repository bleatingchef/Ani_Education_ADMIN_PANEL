import express from "express";
const router = express.Router();

import { getuser, loginCheck, loginUser, logout, registerUser, updatePassword, updateUser } from "../controllers/userController.js";
import protect from "../middlewares/authMiddleware.js";


router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/logincheck',loginCheck);
router.get('/getuser',protect,getuser)
router.put('/updateUser',protect,getuser)
router.get('/logout',logout);
router.put('/resetpassword',logout);

export default router;