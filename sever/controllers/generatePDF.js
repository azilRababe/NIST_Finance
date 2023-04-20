import fs from "fs";
import handlebars from "handlebars";
import puppeteer from "puppeteer";

export const generatePDF = async (req, res) => {
  try {
    // const { name, email, phone, nationality } = req.body;

    // Read the template file
    const templateHtml = fs.readFileSync(
      "./utils/PDF_Template/template.html",
      "utf8"
    );

    // Compile the template
    const template = handlebars.compile(templateHtml);

    // Render the HTML with the form data
    const html = template(req.body);

    // Launch Puppeteer
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate to a blank page and set the HTML
    await page.setContent(html, { waitUntil: "networkidle0" });

    // Generate the PDF
    const pdf = await page.pdf({ format: "A4" });

    // Close the browser
    await browser.close();

    // Set the response headers
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=form.pdf");

    // Send the PDF back to the client
    res.send(pdf);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while generating the PDF.");
  }
};
