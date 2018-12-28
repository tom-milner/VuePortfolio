const ContactController = require("./controllers/ContactController");
const ContactControllerPolicy = require("./policies/ContactControllerPolicy");


module.exports = (app) => {
  // console.log(ContactControllerPolicy.register, ContactController.register)

  app.post("/contact",
    ContactControllerPolicy.contact,
    ContactController.contact);

  app.get("/status", function(req,res){
    res.json({"status":"UP"})
  })
}