import expess from "express";
const router = expess.Router();
import { register, login } from "../Controllers/auth.js";

router.post("/register", register);
router.post("/login", login);

export default router;
