import expess from "express";
const router = expess.Router();

import User from "../models/user.js";
import JWT from "jsonwebtoken";
import bcrypt from "bcryptjs";

// RESET PASS
import { sendEmail } from "../utils/sendEmail.js";
import crypto from "crypto";

import { requireRole } from "../utils/role_based_auth.js";

// Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then((user) => {
      const hashedPass = bcrypt.compareSync(password, user.password);
      if (hashedPass) {
        const token = JWT.sign(
          { id: user._id, role: user.role },
          process.env.JWT_SECRET
        );
        res.setHeader("Authorization", `Bearer ${token}`);
        res.setHeader("X-User-ID", user._id);
        res.setHeader("X-User-Role", user.role);
        return res.status(202).json({
          accessToken: token,
          user: {
            firstname: user.firstname,
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

// edit user
router.patch("/edit-user/:id", requireRole("admin"), async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    res
      .status(200)
      .json({ msg: "Data updated successfully", data: updatedUser });
  } catch (err) {
    res.status(404).json(`Somehting went wrong : ${err}`);
  }
});

export default router;
