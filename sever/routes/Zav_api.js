import expess from "express";
const router = expess.Router();
import { CreateZav } from "../controllers/zav_api";

router.post("/add", CreateZav);

export default router;
