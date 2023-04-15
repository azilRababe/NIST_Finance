import User from "../models/user.js";
import JWT from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Register
export const register = (req, res) => {
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
};

// Login
export const login = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then((user) => {
      const hashedPass = bcrypt.compareSync(password, user.password);
      if (hashedPass) {
        const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET);
        return res.status(202).json({ ...user, accessToken: token });
      }
      res.status(401).json({ msg: "Username Or Password Incorrect" });
    })
    .catch(() => {
      res.status(404).json({ err: `User Doesn't exist!:` });
    });
};
