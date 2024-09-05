import asyncHandler from "express-async-handler";
import { SignUpForm } from "../models/signupModel.js";

const signupCheck = asyncHandler(async (req,res)=>{
    const {username,email,password} = req.body
    if(!username||!password||!email){
        res.status(400);
        throw new Error("Please fill all the field");
    }

    const userExist = await SignUpForm.findOne({email});

    if(userExist){
        res.status(400);
        throw new Error("Account already exist");
    }

    const form = await SignUpForm.create({
        username:username,
        email:email,
        password:password,
    });
    res.status(201).json(form);
})

const getsignupData = asyncHandler(async(req,res)=>{
    const signCheck = await SignUpForm.find()
    res.status(201).json(signCheck)  
})

export{signupCheck,getsignupData};