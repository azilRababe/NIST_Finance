import expess from "express";
const router = expess.Router();
// import multer from "multer";

import { generatePDF } from "../controllers/PDF_Save.js";

router.post("/generate_PDF", generatePDF);

export default router;
