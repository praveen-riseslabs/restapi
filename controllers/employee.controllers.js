import Employee from "../models/employee.model.js";
import {authenticateToken} from "../controllers/token.controller.js"
// Retrieve and return all Employees from the database.
export const getEmployeeDetails = (req, res) => {
  authenticateToken(req, res);
  Employee.find()
    .then(employees => {
      res.send(employees);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Something went wrong while getting list of employees."
      });
    });
};
// Create and Save a new Employee
export const addEmpDetails = (req, res) => {
  // Validate request
  authenticateToken(req, res);
  if (!req.body) {
    return res.status(400).send({
      message: "Please fill all required field"
    });    
  }
  const employee = new Employee({
    empId: req.body.empId,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    phone: req.body.phone,
    designation: req.body.designation,
    email: req.body.email,
    primaryskill: req.body.skillset
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

