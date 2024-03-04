import User from "../models/user.model.js";
// Retrieve and return all users from the database.
export const findAll = async (req, res) => {
  try {
    await User.find()
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Something went wrong while getting list of users."
      });
    });
  } catch(e) {
     console.log("data", e);
  }
  
};
// Create and Save a new User
export const create = async (req, res) => {
  try{
    if (!req.body) {
      return res.status(400).send({
        message: "Please fill all required field"
      });
    }
    // Create a new User
    const user =  await new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password
    });
    // Save user in the database
      const saved =  user.save()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Something went wrong while creating new user."
        });
      });
      await saved;
  } catch(e) {
    console.log("error", e);
  }
  // Validate request
  
};
// Find a single User with a id
export const findOne =async (req, res) => {
  try{
    await User.findById(req.params.id)
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
  } catch(e){
     console.log("error", e);
  }
 
};
// Update a User identified by the id in the request
export const update = async (req, res) => {
  // Validate Request

  try {
    if (!req.body) {
      return res.status(400).send({
        message: "Please fill all required field"
      });
    }
    // Find user and update it with the request body
    await User.findByIdAndUpdate(
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
  } catch (e) {
    console("error", e);
  }
  
};
// Delete a User with the specified id in the request
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndRemove(req.params.id)
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
  } catch (e) {
    console("error", e)
  }
 
};
