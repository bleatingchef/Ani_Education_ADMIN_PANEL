import mongoose from 'mongoose';

const signupSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please add a username"],
    trim: true
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
    trim: true,
    match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Please enter a valid email"]
  },
  password:{
    type: String,
    required: [true, "Please add a password"],
    trim: true,
    // match: [/^\d{10,15}$/, "Please enter a valid phone number"]
  }
}, {
  timestamps: true
});

export const SignUpForm= mongoose.model('SignUpForm', signupSchema);
