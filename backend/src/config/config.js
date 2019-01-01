module.exports = {
  port: process.env.PORT || 8081,
  nodemailer : {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  },
  db: {
    url: process.env.DB_URL || "mongodb://localhost:27017"
  }
}