import Document from "./../models/document.model.js";
import {authenticateToken} from "./token.controller.js"
// Retrieve and return all Employees from the database.
export const getalldocuments = (req, res) => {
  authenticateToken(req, res);
  Document.find()
    .then(document => {
      res.send(document);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Something went wrong while getting list of employees."
      });
    });
};
// Create and Save a new Employee
export const addnewDocuments = (req, res) => {
  // Validate request
  authenticateToken(req, res);
  if (!req.body) {
    return res.status(400).send({
      message: "Please fill all required field"
    });    
  }
  const employee = new Document({
    name: req.body.name,
    description: req.body.description,
    forwhom: req.body.forwhom,
    attachment: req.body.attachment
  });
  // Save Employee in the database
  employee.save().then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Something went wrong while creating new Employee."
      });
    });
};

