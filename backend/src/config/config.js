module.exports = {
  port: process.env.port || 3333,
  nodemailer : {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }

}