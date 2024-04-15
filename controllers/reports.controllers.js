import Document from "../models/reports.model.js";
import {authenticateToken} from "./token.controller.js"
// Retrieve and return all Employees from the database.
export const getAllRecords = (req, res) => {
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
export const addNewRecords = (req, res) => {
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
    label: req.body.label,
    downloadlink: req.body.downloadlink
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
export const editRecords = (req, res) => {
  // Validate request
  authenticateToken(req, res);
  let docId = req.params.id;
  if (!req.body) {
    return res.status(400).send({
      message: "Please fill all required field"
    });    
  }
  const documement = {
    name: req.body.name ?  req.body.name : null,
    description: req.body.description ? req.body.description : null,
    label: req.body.label ? req.body.label : null ,
    downloadlink: req.body.downloadlink ? req.body.downloadlink : null
  };
   documement.updateOne({_id:docId}, {$set:employee}).then(
    res => res.status(200).send("Updated Successfully!"),
    err => err.status(400).send("Error while updatinf"),
  );
 // Save Employee in the database
  // employee.save().then(data => {
  //     res.send(data);
  //   }).catch(err => {
  //     res.status(500).send({
  //       message: err.message || "Something went wrong while creating new Employee."
  //     });
  //   });
};
export const deleteRecords = (req, res) => {
  // Validate request
  authenticateToken(req, res);
  if (!req.body) {
    return res.status(400).send({
      message: "Please fill all required field"
    });    
  }
  authenticateToken(req, res);
  let docId = req.params.id;
  if (!req.body) {
    return res.status(400).send({
      message: "Please fill all required field"
    });    
  }
  const documement = {
    is_deleted: true
  };
   documement.deleteOne({_id:docId}, {$set:documement}).then(
    res => res.status(200).send("Updated Successfully!"),
    err => err.status(400).send("Error while updating"),
  );
  // Save Employee in the database
 // documement.updateOne({_id:});
};

