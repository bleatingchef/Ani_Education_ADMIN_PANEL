import asyncHandler from "express-async-handler";
// import { Contact } from "../models/contactModel.js";
import { Student } from "../models/studentModel.js";

const student = asyncHandler(async (req,res)=>{
    const {rollno,name,education,mobile,email,admissionDate} = req.body
    if(!rollno||!name||!education||!mobile||!email||!admissionDate){
        res.status(400);
        throw new Error("Please fill all the field");
    }

    const userExist = await Student.findOne({rollno});

    if(userExist){
        res.status(400);
        throw new Error("Student already exist");
    }

    const form = await Student.create({
        rollno:rollno,
        name:name,
        education:education,
        mobile:mobile,
        email:email,
        admissionDate:admissionDate,
    });
    res.status(201).json(form);
})

const getStudent = asyncHandler(async(req,res)=>{
    const students = await Student.find();
    res.status(200).json(students)
})

const deleteStudent = asyncHandler(async(req,res)=>{
    const {rollno} = req.body;

    if(!rollno){
        res.status(400)
        throw new Error("Please provide an rollno")
    }

    const student = await Student.findOneAndDelete({rollno});

    if(!student){
        res.status(400)
        throw new Error("Student is not found");
    }
    res.status(200).json({message:"Student deleted successfully"})

})

export {student,getStudent,deleteStudent};