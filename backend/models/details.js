import mongoose from 'mongoose';

const detailsSchema = new mongoose.Schema({
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
  amount:{
    type: String,
    required: [true, "Please add a amount"],
    trim: true,
    // match: [/^\d{10,15}$/, "Please enter a valid phone number"]
  }
}, {
  timestamps: true
});

export const Details= mongoose.model('Details', detailsSchema);
