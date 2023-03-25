import nodemailer from "nodemailer";

export const sendEmail = (email, subject, text) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  // send mail with defined transport object
  transporter
    .sendMail({
      from: process.env.USER,
      to: email,
      subject: subject,
      text: text,
    })
    .then(() => console.log("Email send successfully"))
    .catch((err) => console.log({ err: err }));
};
