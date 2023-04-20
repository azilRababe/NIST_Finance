import expess from "express";
const router = expess.Router();
import { generatePDF } from "../controllers/generatePDF.js";

router.post("/generate_PDF", generatePDF);

export default router;
