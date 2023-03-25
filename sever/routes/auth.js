import expess from "express";
const router = expess.Router();
import { register, login } from "../controllers/auth.js";
import { reset_password } from "../controllers/resetPassword.js";

router.post("/register", register);
router.post("/login", login);
router.post("/reset_password", reset_password);

export default router;
