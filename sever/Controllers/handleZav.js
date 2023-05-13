import express from "express";
const router = express.Router();

import fs from "fs";
import handlebars from "handlebars";
import html_pdf_node from "html-pdf-node";

import { upload } from "../utils/aws_S3.js";

import zav from "../models/zav.js";

// import { requireRole } from "../utils/role_based_auth.js";

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
      const file = files[i];
      const { Key } = file;
      const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key,
        Expires: 60 * 60 * 24 * 7, // URL valid for 7 days
      };
      const url = await s3.getSignedUrlPromise("getObject", params);
      s3FileURLs.push(url);
    }

    await new zav({ ...req.body, files: s3FileURLs }).save();
    res.status(200).json({ msg: "Files uploaded successfully!" });
  } catch (error) {
    console.log(error);
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

// READ
const pageSize = 10;

router.get("/getAllZavs", async (req, res) => {
  const { page = 1 } = req.query;

  try {
    const [count, data] = await Promise.all([
      zav.countDocuments(),
      zav
        .find({})
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .exec(),
    ]);

    res.status(200).json({
      total: count,
      page,
      data,
    });
  } catch (error) {
    res.status(500).json({ err: `Something went wrong ${error}` });
  }
});

router.get("/getZav/:id", async (req, res) => {
  try {
    const Zav = await zav.findById({ _id: req.params.id });
    res.status(202).json({ data: Zav });
  } catch (error) {
    res.status(500).json({ err: `Something went wrong: ${error}` });
  }
});
// UPDATE
router.patch("/update-zav/:id", async (req, res) => {
  try {
    const updatedZav = await zav.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    res
      .status(200)
      .json({ msg: "Data updated successfully", data: updatedZav });
  } catch (error) {
    res.status(500).json({ err: `Something went wrong: ${error}` });
  }
});
// DELETE
router.delete("/delete-zav/:id", async (req, res) => {
  try {
    const deletedZav = await zav.findOneAndDelete({ _id: req.params.id });
    if (!deletedZav) {
      return res.status(404).json({ error: "Zav not found" });
    }
    res.status(200).json({ msg: "Zav has been successfully deleted" });
  } catch (error) {
    res.status(500).json({ error: `Failed to delete Zav: ${error}` });
  }
});

export default router;
