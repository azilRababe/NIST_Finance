import User from "../models/user.js";
import JWT from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Register
export const register = (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  User.findOne(email)
    .then(() => res.status(404).json({ msg: "Email already exist" }))
    .catch(() => {
      new User({ firstname, lastname, email, password })
        .save()
        .then((user) => res.status(202).json(user))
        .catch((err) => console.log(err));
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
      res.status(404).json({ msg: "Username Or Password Incorrect" });
    })
    .catch((err) =>
      res.status(404).json({ err: `${err} Or User Doesn't exist!:` })
    );
};
