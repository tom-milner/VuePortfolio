const nodemailer = require("nodemailer");
const moment = require("moment")
require("dotenv").load()


module.exports = {
   async contact(req, res) {
    let mailOptions, transporter;
    transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.PASS
      }
    });
    let now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

    mailOptions = {
      from: `${req.body.email}`,
      to: "tommilnerdev@gmail.com",
      subject: `CONTACT`,
      text: ` Name: ${req.body.name} \n Sender:  ${req.body.email} \n Telephone: ${req.body.tel} \n \n Message: \n ${req.body.message} \n \n Time: \n ${now}`,
      replyTo: `${req.body.email}`
    }

    // await transporter.sendMail(mailOptions, function (err, res) {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log("res: " + res);
    //     console.log("sent");
    //   }
    // })
    await res.send({
      error: "Message Sent."
    })

  }
}