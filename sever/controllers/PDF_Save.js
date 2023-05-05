import fs from "fs";
import handlebars from "handlebars";
import html_pdf_node from "html-pdf-node";
import zav from "../models/zav.js";

export const generatePDF = async (req, res) => {
  try {
    const templateHtml = fs.readFileSync("./public/pdf/template.hbs", "utf8");
    const template = handlebars.compile(templateHtml);
    const html = template(req.body);

    // Generate the PDF file
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
};
