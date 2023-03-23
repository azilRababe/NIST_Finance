import User from "../Models/auth.js";
import bcryptjs from "bcryptjs";
import JWT from "jsonwebtoken";

// register
export const register = (req, res) => {
  const { username, email, password } = req.body;
  User.findOne(email)
    .then(() => res.status(404).json({ msg: "Email Already exists" }))
    .catch(() => {
      var salt = bcryptjs.genSaltSync(10);
      var hashPassword = bcryptjs.hashSync(password, salt);
      new User({ username, email, password: hashPassword })
        .save()
        .then((user) => res.status(202).json(user))
        .catch((err) => res.status(404).json({ err: err }));
    });
};

// login
export const login = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then((user) => {
      const hashedPass = bcryptjs.compareSync(password, user.password);
      if (hashedPass) {
        const token = JWT.sign(JSON.stringify(user), process.env.SECRET_KEY);
        return res.status(202).json({ user, accessToken: token });
      }
      res.status(404).json({ msg: "Username Or Password Incorrect" });
    })
    .catch((err) =>
      res.status(404).json({ err: `${err} Or User Doesn't exist!:` })
    );
};
