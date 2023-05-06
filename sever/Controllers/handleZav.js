import express from "express";
const router = express.Router();

import fs from "fs";
import handlebars from "handlebars";
import html_pdf_node from "html-pdf-node";

import { upload } from "../utils/aws_S3.js";

import zav from "../models/zav.js";

const uploadConfig = [
  { name: "passportCopy", maxCount: 1 },
  { name: "anabin", maxCount: 1 },
  { name: "workContract", maxCount: 1 },
  { name: "EnrollmentCertificate", maxCount: 1 },
  { name: "Internship_progress_plan", maxCount: 1 },
  { name: "DeclarationOFemployment", maxCount: 1 },
  // { name: "generatedPDF", maxCount: 1 },
  { name: "visa", maxCount: 1 },
];

// upload files to aws s3 bucket
router.post("/upload-files", upload.fields(uploadConfig), async (req, res) => {
  const files = req.files;
  try {
    // Save data to mongodb
    const s3FileURLs = [];

    for (let i = 0; i < Object.keys(files).length; i++) {
      s3FileURLs.push(files[i].location);
    }

    await new zav({ ...req.body, files: s3FileURLs }).save();
    res.status(200).json({ msg: "Files uploaded successfully!" });
  } catch (error) {
    res.status(500).json({ err: `Failed to upload files: ${error}` });
  }
});

// generate pdf file
router.post("/generate-pdf", async (req, res) => {
  try {
    const templateHtml = fs.readFileSync("./public/pdf/template.hbs", "utf8");
    const template = handlebars.compile(templateHtml);
    const html = template(req.body);

    // generate PDF
    const pdfBuffer = await html_pdf_node.generatePdf(
      { content: html },
      { format: "A4" }
    );

    // Return the PDF file as a downloadable file to the client
    res.set("Content-Disposition", 'attachment; filename="Zav.pdf"');
    res.set("Content-Type", "application/pdf");
    res.send(pdfBuffer);
  } catch (error) {
    res.status(500).json({ err: `Failed to generate PDF: ${error}` });
  }
});

export default router;
