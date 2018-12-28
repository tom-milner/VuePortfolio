const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
// const Sentry = require("@sentry/node");
let moment = require("moment");
require("dotenv").load()
const PORT = 8081;
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;
// Sentry.init({ dsn: 'https://6bf9f0b9b1cc4e0281909ed77f844907@sentry.io/1360576' });
const app = express();
// app.use(Sentry.Handlers.requestHandler());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
var router = express.Router();
app.use("/api", router);

// *******************************************************************************************
// ROUTES

// Status check
router.get("/status", function(req,res){
  res.json({"status": "UP"});
});
 
// Email post route
router.post("/contact", function(req,res){
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

  mailOptions = {
    from:`${req.body.email}`,
    to: "tommilnerdev@gmail.com",
    subject: `CONTACT`,
    text:` Name: ${req.body.name} \n Sender:  ${req.body.email} \n Telephone: ${req.body.tel} \n \n Message: \n ${req.body.message} \n \n Time: \n ${now}`,
    replyTo:`${req.body.email}`
  }
  // console.log(req.body.name);
  console.log(mailOptions);

  transporter.sendMail(mailOptions, function(err, res){
    if(err){
      console.log(err);
    } else {
      console.log("res: " + res);
      console.log("sent");
    }
  })
  res.send(mailOptions)
});


// *******************************************************************************************
app.listen(PORT, function(){
  console.log(`listening on port ${PORT}`)
});