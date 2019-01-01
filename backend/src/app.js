const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").load()
const config = require("./config/config");

// setup app
const app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

console.log(config)

// connnect database
let mongoDB = config.db.url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connections;
db.concat("error", console.error.bind(console, "MongoDB Connection Error"))

// setup routes
require("./routes")(app);

// *******************************************************************************************
app.listen(config.port, function(){
  console.log(`listening on port ${config.port}`)

});