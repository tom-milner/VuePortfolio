const Project = require("../models/Project")

module.exports = {

  createProject(req,res) {
    let project = new Project ({
      name: req.body.name,
      description: req.body.description,
      link: req.body.link,
      imageURL: req.body.imageURL
    });

    project.save(function(err){
      if(err) { return next(err)}
      res.send("Project created successfully")
    })
  },

  getProjects(req,res){
    Project.find({}, function(err, allProjects){
      if(err){
        console.log(err)
      } else {
        res.send(allProjects)
      }
    })
  }

}