import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  Nationality: { type: String },
  birthdate: { type: String },
  gender: { type: String, enum: ["man", "women", "other"] },
  university: { type: String },
  studies: { type: String },
  educationStatus: { type: String, enum: ["Student", "Graduate"] },
  createdAt: { type: Date, Default: Date.now() },
});

const EPs = mongoose.model("EPs", userSchema);

export default EPs;
