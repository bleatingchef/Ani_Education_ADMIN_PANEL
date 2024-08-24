import asyncHandler from "express-async-handler";
import {User_op} from "../models/appointmentModel.js"

const user =asyncHandler(async(req,res)=>{
    const {name,phone,email,comment}=req.body
    if(!name||!phone||!email||!comment){
        res.status(400)
        throw new Error("Please fill all the fields");
    }

    const userExist=await User_op.findOne({email})

    if (userExist){
        res.status(400);
        throw new Error("User already exists.");
    }

    const form= await User_op.create({
        name:name,
        phone:phone,
        email:email,
        comment:comment,
    });
    res.status(201).json(form);
})
    const getUser=asyncHandler(async(req,res)=>{
        const user=await User_op.find();
        res.status(200).json(user)
    })

    const deleteUser=asyncHandler(async(req,res)=>{
        const {email}=req.body

        if(!email){
            res.status(400)
            throw new error("Please provide an Email")
        }

        const user = await User_op.findOneAndDelete({email});

        if(!user){
            res.status(400)
            throw new Error("Contact is not found");
        }

        res.status(200).json({message:"Contact deleted successfully"})
    });
     
export {user,getUser,deleteUser};