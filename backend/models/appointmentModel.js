import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
    name:{
        type: String,
        required:[true, "Please add a name"],
        trim: true
    },
    phone:{
        type: String,
        trim: true,
        match:[/^\d{10,15}$/, "Please add a phone number"],
    },
    email:{
        type: String,
        required:[true, "Please add an Email"],
        unique: true,
        trim: true,
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Please enter a valid Email"]
    },
    comment:{
        type: String,
        trim: true,
    }
},
    {
        timestamps:true    
});

export const User_op= mongoose.model('User_op', userSchema);