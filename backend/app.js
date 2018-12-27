const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
// const Sentry = require("@sentry/node");
let moment = require("moment");
require("dotenv").load()
const PORT = 8081;
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;
// Sentry.init({ dsn: 'https://6bf9f0b9b1cc4e0281909ed77f844907@sentry.io/1360576' });

const app = express();
// app.use(Sentry.Handlers.requestHandler());

app.use(bodyParser.urlencoded({extended: true}));

// app.get('/', function mainHandler(req, res) {
//   throw new Error('Broke!');
// });

// Status check
app.get("/status", function(req,res){
  res.json({"status": "UP"});
});

// console.log(GMAIL_PASS, GMAIL_USER)

// Email post route
app.post("/contact", function(req,res){

  console.log("mailing");

  console.log(req.body);

  let mailOptions, transporter;

  transporter = nodemailer.createTransport({
    service:"gmail",
    port: 465,
    secure: true,
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS
    }
  });


  let now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

  console.log(now);

  mailOptions = {
    from:`${req.body.email}`,
    to: "tommilnerdev@gmail.com",
    subject: `CONTACT`,
    text:` Name: ${req.body.name} \n Sender:  ${req.body.email}  \n \n Message: \n ${req.body.message} \n \n Time: \n ${now}`,
    replyTo:`${req.body.email}`
  }

  transporter.sendMail(mailOptions, function(err, res){
    if(err){
      console.log(err);
    } else {
      console.log("res: " + res);
      console.log("sent");
    }
  })
  res.send("email sent")
});




app.listen(PORT, function(){
  console.log(`listening on port ${PORT}`)
});