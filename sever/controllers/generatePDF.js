import fs from "fs";
import handlebars from "handlebars";
import puppeteer from "puppeteer";
import open from "open";

export const generatePDF = async (req, res) => {
  try {
    const templateHtml = fs.readFileSync("./public/pdf/template.html", "utf8");
    const template = handlebars.compile(templateHtml);
    const html = template(req.body);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(html, { waitUntil: "networkidle0" });
    const pdf = await page.pdf({ format: "A4" });
    await browser.close();

    const date = new Date().toISOString().slice(0, 10);
    // fs.writeFileSync(`${date}_zav.pdf`, pdf);

    fs.writeFile(`zav.pdf`, pdf, (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("An error occurred while generating the PDF file");
      } else {
        fs.readFile("zav.pdf", (err, data) => {
          if (err) {
            console.error(err);
            res
              .status(500)
              .send("An error occurred while reading the PDF file");
          } else {
            res.setHeader("Content-Type", "application/pdf");
            res.setHeader("Content-Disposition", 'inline; filename="zav.pdf"');
            res.send(data);
          }
        });
      }
    });
    // Open the PDF with the default application
    // await open("form.pdf");

    // Set the response headers
    // res.setHeader("Content-Type", "application/pdf");
    // res.setHeader("Content-Disposition", "attachment; filename=form.pdf");

    // Send the PDF back to the client
    // res.send(pdf);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while generating the PDF.");
  }
};
