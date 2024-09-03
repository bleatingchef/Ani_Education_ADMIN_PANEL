import asyncHandler from "express-async-handler";
import  Loan  from "../models/loan.js";

const user =asyncHandler(async(req,res)=>{
    const {name,phone,amount}=req.body
    if(!name||!phone||!amount){
        res.status(400)
        throw new Error("Please fill all the fields");
    }

    const userExist=await Loan.findOne({pan})

    if (userExist){
        res.status(400);
        throw new Error("User already exists.");
    }

    const form= await Loan.create({
        name:name,
        phone:phone,
        amount:amount,
    });
    res.status(201).json(form);
})
    const getUser=asyncHandler(async(req,res)=>{
        const user=await Loan.find();
        res.status(200).json(user)
    })

    const deleteUser=asyncHandler(async(req,res)=>{
        const {name}=req.body

        if(!name){
            res.status(400)
            throw new error("Please provide a Name")
        }

        const user = await Loan.findOneAndDelete({pan});

        if(!user){
            res.status(400)
            throw new Error("Name is not found");
        }

        res.status(200).json({message:"Field deleted successfully"})
    });
     
export {user,getUser,deleteUser};