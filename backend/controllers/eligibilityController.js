import asyncHandler from "express-async-handler";
import { EligibilityCheck } from "../models/eligibilityModel.js";

const eligibilityCheck = asyncHandler(async (req,res)=>{
    const {name, mobile,email,pan} = req.body
    if(!name||!mobile||!pan||!email){
        res.status(400);
        throw new Error("Please fill all the field");
    }

    const userExist = await EligibilityCheck.findOne({pan});

    if(userExist){
        res.status(400);
        throw new Error("Student already exist");
    }

    const form = await EligibilityCheck.create({
        pan:pan,
        name:name,
        mobile:mobile,
        email:email,
    });
    res.status(201).json(form);
})

const getEligibility = asyncHandler(async(req,res)=>{
    const eligibleCheck = await EligibilityCheck.find()
    res.status(201).json(eligibleCheck)  
})

export{eligibilityCheck,getEligibility};