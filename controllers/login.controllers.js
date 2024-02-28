import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
// Retrieve and return all users from the database.
function generateAccessToken(user) {
  const secret = 'riseslabsitsolutionspvtltd';
  const options = { expiresIn: '24h' };

  return jwt.sign(user, secret, options);
}
export const ValidateUser = (req, res) => {
  User.find(req.body)
    .then(users => {
      if(users.length) {
       const jwt = generateAccessToken(req.body);
       console.log("jwt", jwt);
     //  User.update(req.body, {"jwt": jwt});
       const userDetails = {}
       userDetails["token"] = jwt;
       userDetails["firstname"] =  users[0].firstname;
       userDetails["lastname"] =  users[0].lastname;
       userDetails["phone"] =  users[0].phone;
       userDetails["email"] =  users[0].email;
       //delete users[0].password;  
       res.send(userDetails);
      } else {
        res.status(201).send({
          message: "Invalid email id or password"
        })
      }
      //res.send(users);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Something went wrong while getting list of users."
      });
    });
};
// Create and Save a new User
const create = (req, res) => {
  // Validate request
  if (!req.body) {
    return res.status(400).send({
      message: "Please fill all required field"
    });
  }
  // Create a new User
  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password
  });
  // Save user in the database
  user
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Something went wrong while creating new user."
      });
    });
};

