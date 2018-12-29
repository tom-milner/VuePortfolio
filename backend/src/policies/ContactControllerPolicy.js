const Joi = require("joi");
module.exports = {

  contact(req, res, next) {

    const schema = {
      email: Joi.string().email(),
      tel: Joi.string().regex(
        new RegExp("^[0-9]*$")
      ),
      message: Joi.string(),
      name:Joi.string()
    }

    const {
      error,
      value
    } = Joi.validate(req.body, schema);

    if (error) {
      switch (error.details[0].context.key) {
        case "email":
          res.status(400).send({
            error: "You must provide a valid email address"
          });
          break
        case "tel":
          res.status(400).send({
            error: "Invalid phone number"
          })
          break;

        default:
          res.status(400).send({
            error: "Invalid information"
          })
      }
    } else {
      next();
    }
  }

}