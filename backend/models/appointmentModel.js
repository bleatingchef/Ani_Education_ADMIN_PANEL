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
    amount:{
        type: String,
        trim: true,
        match:[/^\d{10,15}$/, "Please add a phone number"]
    },
},
    {
        timestamps:true    
});

export const User_op= mongoose.model('User_op', userSchema);