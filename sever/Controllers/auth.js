import expess from "express";
const router = expess.Router();

import User from "../models/user.js";
import JWT from "jsonwebtoken";
import bcrypt from "bcryptjs";

// RESET PASS
import { sendEmail } from "../utils/sendEmail.js";
import crypto from "crypto";

// Register
router.post("/register", (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  User.findOne(email)
    .then(() => {
      res.status(409).json({ err: "Email already exist" });
    })
    .catch(() => {
      new User({ firstname, lastname, email, password })
        .save()
        .then(() =>
          res.status(201).json({
            msg: "Your registration was successful.",
          })
        )
        .catch(() => res.status(500).json({ err: "Something went wrong" }));
    });
});

// Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(res.accessToken);
  User.findOne({ email })
    .then((user) => {
      const hashedPass = bcrypt.compareSync(password, user.password);
      if (hashedPass) {
        const token = JWT.sign(
          { id: user._id, role: user.role },
          process.env.JWT_SECRET
        );
        return res.status(202).json({
          accessToken: token,
          user: {
            id: user._id,
            email: user.email,
            role: user.role,
          },
        });
      }
      res.status(401).json({ msg: "Username Or Password Incorrect" });
    })
    .catch(() => {
      res.status(404).json({ err: `User Doesn't exist!:` });
    });
});

// RESET PASSWORD -----------------------------------------------------------
router.post("/forget_password", (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      const resetToken = crypto.randomBytes(20).toString("hex");
      user.resetToken = resetToken;
      user.resetTokenExpiry = Date.now() + 3600000;
      user
        .save()
        .then(() => {
          const link = `${process.env.BASE_URL}/ResetPassword?resetToken=${resetToken}`;
          sendEmail(user.email, "Password Reset", link);
          res.status(202).json({ msg: "Reset password email sent" });
        })
        .catch(() => {
          res.status(400).json({ err: `Internal server error` });
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: `Email not found` });
    });
});

router.post("/reset_password", (req, res) => {
  const { password } = req.body;
  const { resetToken } = req.query;
  User.findOne({
    resetToken,
    resetTokenExpiry: { $gt: Date.now() },
  })
    .then((user) => {
      user.password = password;
      user.resetToken = undefined;
      user.resetTokenExpiry = undefined;
      user
        .save()
        .then(() => {
          res.status(202).json({ msg: "Password reset successfully" });
        })
        .catch((err) => {
          res.status(404).json({ err: `Something went wrong : ${err}` });
        });
    })
    .catch(() => {
      res.status(400).json({ err: `Invalid or expired reset token` });
    });
});

export default router;
