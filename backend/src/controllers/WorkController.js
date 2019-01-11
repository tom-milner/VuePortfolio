const Project = require("../models/Project")

module.exports = {


  getProjects(req, res) {
    Project.find({}, function (err, allProjects) {
      if (err) {
        console.log(err)
      } else {
        res.send(allProjects)
      }
    })
  }

}