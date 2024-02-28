import express from 'express';
import {getEmployeeDetails, addEmpDetails} from '../controllers/employee.controllers.js'
const employeeRouter = express.Router()
employeeRouter.get('/getEmployeeDetails', getEmployeeDetails);
employeeRouter.post('/addEmpDetails', addEmpDetails);

export default employeeRouter;