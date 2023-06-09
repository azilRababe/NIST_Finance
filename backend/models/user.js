import mongoose from "mongoose";
const { Schema } = mongoose;
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["user", "admin", "moderator"],
      default: "user",
    },
    resetToken: String,
    resetTokenExpiry: Date,
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password"))
    this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model("User", userSchema);

export default User;
