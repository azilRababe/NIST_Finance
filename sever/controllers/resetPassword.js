import User from "../models/user.js";
import Token from "../models/token.js";
import { sendEmail } from "../utils/sendEmail.js";
import crypto from "crypto";

export const reset_password = (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      Token.findOne({ userId: user._id })
        .then((token) => {
          if (!token) {
            new Token({
              userId: user._id,
              token: crypto.randomBytes(32).toString("hex"),
            }).save();
          }
          const link = `${process.env.BASE_URL}/reset_password/${user._id}/${token.token}`;
          sendEmail(user.email, "Password reset", link);
          res.send("password reset link sent to your email account");
        })
        .catch((err) =>
          res.status(404).json({ err: `Something went wrong: ${err}` })
        );
    })
    .catch((err) =>
      res.status(404).json({ err: `${err} or Email doesn't exist` })
    );
};
