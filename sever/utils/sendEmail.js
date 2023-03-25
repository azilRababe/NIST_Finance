import nodemailer from "nodemailer";

export const sendEmail = (email, subject, text) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: "rababe.azil@aiesec.de",
      accessToken: process.env.JWT_SECRET,
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
