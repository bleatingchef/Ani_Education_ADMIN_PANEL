import asyncHandler from "express-async-handler";
import {User_op} from "../models/appointmentModel.js"

const user =asyncHandler(async(req,res)=>{
    const {name,phone,amount}=req.body
    if(!name||!phone||!amount){
        res.status(400)
        throw new Error("Please fill all the fields");
    }

    const userExist=await User_op.findOne({name})

    if (userExist){
        res.status(400);
        throw new Error("User already exists.");
    }

    const form= await User_op.create({
        name:name,
        phone:phone,
        amount:amount,
    });
    res.status(201).json(form);
})
    const getUser=asyncHandler(async(req,res)=>{
        const user=await User_op.find();
        res.status(200).json(user)
    })

    const deleteUser=asyncHandler(async(req,res)=>{
        const {name}=req.body

        if(!name){
            res.status(400)
            throw new error("Please provide a Name")
        }

        const user = await User_op.findOneAndDelete({name});

        if(!user){
            res.status(400)
            throw new Error("Name is not found");
        }

        res.status(200).json({message:"Field deleted successfully"})
    });
     
export {user,getUser,deleteUser};