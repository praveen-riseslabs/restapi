import express from 'express';
import {getAllRecords, addNewRecords,editRecords, deleteRecords} from '../controllers/reports.controllers.js'
const reportsRouter = express.Router()
reportsRouter.get('/getallrecords', getAllRecords);
reportsRouter.post('/addnewrecord', addNewRecords);
reportsRouter.put('/editrecord/:id', editRecords);
reportsRouter.delete('/deleterecord/:id', deleteRecords);

export default reportsRouter;