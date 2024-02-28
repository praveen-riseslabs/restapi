import User from "../models/user.model.js";
export const setResetPassword = async (req, res) => {
 const otp = req.body.otp;
 const password = req.body.password;
  if (otp && password) {
   await User.updateOne({"otp":otp}, {$set: {otp:'', password: password}}, { upsert: true, new: true } ).then(data => {
        res.send("Password reset succefully done!");
      }).catch(err => {
        res.status(500).send({
          message:
            err.message || "Something went wrong while creating new user."
        });
      });
  } else {
    res.send("Failed to send OTP to your email Adresss ");
  }
}
