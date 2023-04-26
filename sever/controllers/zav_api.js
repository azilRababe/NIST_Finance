import { Zav } from "../models/zav.js";

// create
export const CreateZav = (req, res) => {
  new Zav(req.body)
    .save()
    .then((data) => {
      res.status(200).json({ msg: data });
    })
    .catch((err) => {
      res.status(500).json({ err: err });
    });
};
