import mongoose from "mongoose";
const { Schema } = mongoose;

const auth = new Schema(
  {
    username: String,
    email: String,
    password: String,
  },
  { timestamps: true }
);

const credentials = mongoose.model("credentials", auth);
export default auth;
