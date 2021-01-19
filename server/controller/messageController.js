const nodemailer = require("nodemailer");
const cred = require("../config");
const messageController = (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: cred.USER,
      pass: cred.PASS,
    },
  });

  const mailOptions = {
    from: req.body.email,
    name: req.body.name,
    to: cred.USER,
    subject: `Message from ${req.body.email}`,
    text: req.body.message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(400).json("fail");
    } else {
      console.log("Email sent");
      res.status(200).json("success");
    }
  });
};

const sendToScreen = (req, res) => {
  res.status(200).json("Up and Running");
};

module.exports = { messageController, sendToScreen };
