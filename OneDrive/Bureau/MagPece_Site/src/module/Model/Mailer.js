const nodemailer = require("nodemailer");
const SendMail = (distiné, sujet, Contenu) => {
  let transporter = nodemailer.createTransport({
    host: "localhost",
    port: 1025,
    secure: false,
    tls: { rejectUnauthorized: false },
  });
  const mailOptions = {
    from: "Sinbad.ok@yahoo.com",
    to: distiné,
    subject: sujet,
    text: Contenu,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = SendMail;
