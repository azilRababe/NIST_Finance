import expess from "express";
const router = expess.Router();

import User from "../models/user.js";
import { requireRole } from "../utils/role_based_auth.js";

// add new user
router.post("/register", requireRole("admin"), (req, res) => {
  const { firstname, lastname, email, password, role } = req.body;
  User.findOne(email)
    .then(() => {
      res.status(409).json({ err: "Email already exist" });
    })
    .catch(() => {
      new User({ firstname, lastname, email, password, role })
        .save()
        .then(() =>
          res.status(201).json({
            msg: "Your registration was successful.",
          })
        )
        .catch(() => res.status(500).json({ err: "Something went wrong" }));
    });
});
// update user
router.patch("/user/:id", requireRole("admin"), async (req, res) => {
  try {
    const updateUser = await User.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    res
      .status(200)
      .json({ msg: "Data updated successfully", data: updateUser });
  } catch (err) {
    res.status(500).json({ err: `Something went wrong: ${err}` });
  }
});
export default router;
