import asyncHandler from "express-async-handler";
import { Details } from "../models/details.js";

const details = asyncHandler(async (req,res)=>{
    const {name, mobile,amount} = req.body
    if(!name||!mobile||!amount){
        res.status(400);
        throw new Error("Please fill all the field");
    }

    const userExist = await Details.findOne({mobile});

    if(userExist){
        res.status(400);
        throw new Error("Student already exist");
    }

    const form = await Details.create({
        amount:amount,
        name:name,
        mobile:mobile,
    });
    res.status(201).json(form);
})
const getDetails = asyncHandler(async(req,res)=>{
    const details = await Details.find()
    res.status(201).json(details)  
})

export {details,getDetails};