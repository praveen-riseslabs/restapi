import User from "../models/user.model.js";
import nodemailer from "nodemailer";

function getRandomNum(length) {
  var randomNum = (Math.pow(10, length).toString().slice(length - 1) +
    Math.floor(Math.random() * Math.pow(10, length) + 1).toString()).slice(
    -length
  );
  return randomNum;
}
const transporter = nodemailer.createTransport({
  port: 465, // true for 465, false for other ports
  host: "smtp.gmail.com",
  //   service:"gmail",
  auth: {
    user: "praveen.uideveloper1@gmail.com",
    pass: "thbr vsgl ahqm ozyi"
  },
  secure: true
});
// Create and Save a new User
export const genrateRandomToken = async (req, res) => {
 const email = req.body.email;
  const digit = getRandomNum(6);
  if (req.body.email) {
   await User.updateOne({"email":email}, {$set: {otp:digit, otpExpiration: Date.now() + 1000*20}}, { upsert: true, new: true } ).then(data => {
        res.send("Successfully Sent OTP to your email address!");
      }).catch(err => {
        res.status(500).send({
          message:
            err.message || "Something went wrong while creating new user."
        });
      });
    const mailData = {
      from: "praveen.uideveloper1@gmail.com", // sender address
      to: email, // list of receivers
      subject: "One time OTP from MyFacebook",
      text: "My Facebook Generated OTP valid only for 45secs",
      html: "<b>your OTP is " + digit + " there! </b><br><br/>"
    };
    transporter.sendMail(mailData, function(err, info) {
      if (err) {
        res.send("Failed to send OTP to your email Adresss ");
      } else {
        res.send("Successfully sent OTP to your email address");
      }
    });
  } else {
    res.send("Failed to send OTP to your email Adresss ");
  }
}
