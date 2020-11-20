("use strict");
const nodemailer = require("nodemailer");

function mailer(formData, db) {
  db.collection("messages").add(formData); // send record to firestore database
}

module.exports = { mailer };
