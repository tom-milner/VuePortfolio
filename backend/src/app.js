const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").load()
const config = require("./config/config");


const app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
var router = express.Router();
// app.use("/api", router);

require("./routes")(app);

// *******************************************************************************************
app.listen(config.port, function(){
  console.log(`listening on port ${config.port}`)
});