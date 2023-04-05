import expess from "express";
const router = expess.Router();
import { register, login } from "../controllers/auth.js";
import {
  forget_password,
  reset_password,
} from "../controllers/resetPassword.js";

router.post("/register", register);
router.post("/login", login);
router.post("/forget_password", forget_password); // gen token and send email
router.post("/reset_password/:resetToken", reset_password); // reset the pass

export default router;
