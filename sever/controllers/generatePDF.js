import fs from "fs";
import handlebars from "handlebars";
import html_to_pdf from "html-pdf-node";
import puppeteer from "puppeteer";

export const generatePDF = async (req, res) => {
  try {
    // handlebars
    const templateHtml = fs.readFileSync("./public/pdf/template.html", "utf8");
    const template = handlebars.compile(templateHtml);
    const html = template(req.body);
    // puppeteer
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.setContent(html);
    const pdf = await page.pdf({ format: "A4", path: null, type: "pdf" });
    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": "inline",
      "Content-Length": pdf.length,
    });

    res.send(pdf);

    await browser.close();
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while generating the PDF.");
  }
};
