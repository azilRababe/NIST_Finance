import express from "express";
const router = express.Router();

import fs from "fs";
import handlebars from "handlebars";
import html_pdf_node from "html-pdf-node";

import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { upload, s3 } from "../utils/aws_S3.js";

import zav from "../models/zav.js";

import { requireRole } from "../utils/role_based_auth.js";

const uploadConfig = [
  { name: "passportCopy", maxCount: 1 },
  { name: "anabin", maxCount: 1 },
  { name: "workContract", maxCount: 1 },
  { name: "EnrollmentCertificate", maxCount: 1 },
  { name: "Internship_progress_plan", maxCount: 1 },
  { name: "DeclarationOFemployment", maxCount: 1 },
  { name: "visa", maxCount: 1 },
];

router.post("/upload-files", upload.fields(uploadConfig), async (req, res) => {
  const files = req.files;

  try {
    const s3FileURLs = {};

    for (let i = 0; i < Object.keys(files).length; i++) {
      const file = files[Object.keys(files)[i]];
      const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: file[0].key,
      };
      const command = new GetObjectCommand(params);
      const url = await getSignedUrl(s3, command);
      s3FileURLs[Object.keys(files)[i]] = url;
    }

    await new zav({
      ...req.body,
      ...s3FileURLs,
    }).save();

    res.status(200).json({ msg: "Files uploaded successfully!" });
  } catch (err) {
    res.status(500).json({ err: `Failed to upload files: ${err}` });
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
  } catch (err) {
    res.status(500).json({ err: `Failed to generate PDF: ${err}` });
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
  } catch (err) {
    res.status(500).json({ err: `Something went wrong ${err}` });
  }
});

router.get("/getZav/:id", async (req, res) => {
  try {
    const Zav = await zav.findById({ _id: req.params.id });
    res.status(202).json({ data: Zav });
  } catch (err) {
    res.status(500).json({ err: `Something went wrong: ${err}` });
  }
});
// UPDATE
router.patch("/update-zav/:id", requireRole("moderator"), async (req, res) => {
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
  } catch (err) {
    res.status(500).json({ err: `Something went wrong: ${err}` });
  }
});
// DELETE
router.delete("/delete-zav/:id", requireRole("moderator"), async (req, res) => {
  try {
    const deletedZav = await zav.findOneAndDelete({ _id: req.params.id });
    if (!deletedZav) {
      return res.status(404).json({ error: "Zav not found" });
    }
    res.status(200).json({ msg: "Zav has been successfully deleted" });
  } catch (err) {
    res.status(500).json({ err: `Failed to delete Zav: ${err}` });
  }
});

export default router;
