import User from "../models/user.js";
import { sendEmail } from "../utils/sendEmail.js";
import crypto from "crypto";

export const forget_password = (req, res) => {
  const { email } = req.body;
  User.findOne({ email })
    .then((user) => {
      const resetToken = crypto.randomBytes(20).toString("hex");
      user.resetToken = resetToken;
      user.resetTokenExpiry = Date.now() + 3600000;
      user
        .save()
        .then(() => {
          const link = `${process.env.BASE_URL}/reset-password/${user._id}/${user.resetToken}`;
          sendEmail(user.email, "Password Reset", link);
          res.status(202).json({ msg: "Reset password email sent" });
          console.log(link);
        })
        .catch((err) =>
          res.status(400).json({ err: `${err} or Internal server error` })
        );
    })
    .catch((err) => res.status(500).json({ err: `${err} or Email not found` }));
};

export const reset_password = (req, res) => {
  const { resetToken, newPassword } = req.body;
  User.findOne({ resetToken, resetTokenExpiry: { $gt: Date.now() } })
    .then((user) => {
      user.password = newPassword;
      user.resetToken = undefined;
      user.resetTokenExpiry = undefined;
      user
        .save()
        .then(() =>
          res.status(202).json({ msg: "Password reset successfully" })
        )
        .catch((err) =>
          res.status(404).json({ err: `Something went wrong : ${err}` })
        );
    })
    .catch((err) =>
      res.status(400).json({ err: `${err} or Invalid or expired reset token` })
    );
};