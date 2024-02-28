import User from "../models/user.model.js";
// Retrieve and return all users from the database.
export const findAll = (req, res) => {
  User.find()
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Something went wrong while getting list of users."
      });
    });
};
// Create and Save a new User
export const create = (req, res) => {
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
// Find a single User with a id
export const findOne = (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: "User not found with id " + req.params.id
        });
      }
      res.send(user);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "User not found with id " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Error getting user with id " + req.params.id
      });
    });
};
// Update a User identified by the id in the request
export const update = (req, res) => {
  // Validate Request
  if (!req.body) {
    return res.status(400).send({
      message: "Please fill all required field"
    });
  }
  // Find user and update it with the request body
  User.findByIdAndUpdate(
    req.params.id,
    {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password
    },
    { new: true }
  )
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: "user not found with id " + req.params.id
        });
      }
      res.send(user);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "user not found with id " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Error updating user with id " + req.params.id
      });
    });
};
// Delete a User with the specified id in the request
export const deleteUser = (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: "user not found with id " + req.params.id
        });
      }
      res.send({ message: "user deleted successfully!" });
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "user not found with id " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Could not delete user with id " + req.params.id
      });
    });
};
