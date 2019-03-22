const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const Sentry = require('@sentry/node');


// setup app
const app = express();
Sentry.init({
  dsn: 'https://4d97397ddd124f9fbbe8cc3914ff14c7@sentry.io/1371315'
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
require("dotenv").load()
app.use(Sentry.Handlers.errorHandler());

console.log(process.env.DB_URL)

// connnect database

var dbOptions = {
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
}


let mongoURL = process.env.DB_URL;
mongoose.connect(mongoURL, dbOptions);
mongoose.Promise = global.Promise;
let db = mongoose.connections;
db.concat("error", console.error.bind(console, "MongoDB Connection Error"))

// setup routes
require("./routes")(app);

// *******************************************************************************************
app.listen(process.env.PORT, function () {
  console.log(`listening on port ${process.env.PORT}`)

});