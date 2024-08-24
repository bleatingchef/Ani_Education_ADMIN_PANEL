import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
    rollno:{
        type:String,
        required:[true, "Please add a roll number"],
        trim:true
    },
  name: {
    type: String,
    required: [true, "Please add a name"],
    trim: true
  },
  education: {
    type: String,
    required: [true, "Please add an Education"],
    trim: true
  },
  mobile: {
    type: String,
    required: [true, "Please add a phone number"],
    trim: true,
    match: [/^\d{10,15}$/, "Please enter a valid phone number"]
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
    trim: true,
    match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Please enter a valid email"]
  },
  admissionDate: {
    type: String,
    required: [true, "Please add a Date"],
    trim: true
  }
}, {
  timestamps: true
});

export const Student= mongoose.model('Student', StudentSchema);
