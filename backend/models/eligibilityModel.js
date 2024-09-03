import mongoose from 'mongoose';

const eligibilitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
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
  pan:{
    type: String,
    required: [true, "Please add a pan number"],
    trim: true,
    // match: [/^\d{10,15}$/, "Please enter a valid phone number"]
  }
}, {
  timestamps: true
});

export const EligibilityCheck= mongoose.model('EligibilityCheck', eligibilitySchema);
