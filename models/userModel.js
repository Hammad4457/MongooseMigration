// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    // Add more fields as needed
  }, {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  });

export default mongoose.model('User', userSchema);