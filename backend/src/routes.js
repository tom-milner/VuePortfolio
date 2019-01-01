const ContactController = require("./controllers/ContactController");
const ContactControllerPolicy = require("./policies/ContactControllerPolicy");
const WorkController = require("./controllers/WorkController");

module.exports = (app) => {
  // console.log(ContactControllerPolicy.register, ContactController.register)

  app.post("/contact",
    ContactControllerPolicy.contact,
    ContactController.contact);

  app.get("/status", function(req,res){
    res.json({"status":"UP"})
  })


  // Work Page

  app.post("/work/create",
    WorkController.createProject
  )

  app.get("/work",
    WorkController.getProjects)
}