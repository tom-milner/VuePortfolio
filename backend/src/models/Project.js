const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let projectSchema = new Schema({
  name: {type: String, required: true, max: 100},
  imageURL: {type: String, required: true, max: 200},
  link: {type: String, required:false, max:200},
  description: {type: String, required:true, max:500}
})


module.exports = mongoose.model("Project", projectSchema);