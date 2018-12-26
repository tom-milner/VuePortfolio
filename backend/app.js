const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const PORT = 8081;
const GMAIL_USER = "tom.f.milner@gmail.com";
const GMAIL_PASS = "";

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


// Status check
app.get("/status", function(req,res){
  res.json({"status": "UP"});
});

// Email post route
app.post("/contact", function(req,res){

  console.log("mailing");

  console.log(req.body);

  let mailOpts, transporter;

  transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {

    }
  })

  res.send("contact")

});




app.listen(PORT, function(){
  console.log(`listening on port ${PORT}`)
});