import asyncHandler from "express-async-handler";
import { Loan } from "../models/loan.js";

const loanApply = asyncHandler(async (req,res)=>{
    const {name, mobile,email,pan} = req.body
    if(!name||!mobile||!pan||!email){
        res.status(400);
        throw new Error("Please fill all the field");
    }

    const userExist = await Loan.findOne({pan});

    if(userExist){
        res.status(400);
        throw new Error("Student already exist");
    }

    const form = await Loan.create({
        pan:pan,
        name:name,
        mobile:mobile,
        email:email,
    });
    res.status(201).json(form);
})

const getLoan = asyncHandler(async(req,res)=>{
    const loan = await Loan.find()
    res.status(201).json(loan)  
})

export{loanApply};