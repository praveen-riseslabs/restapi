import express from 'express';
import {getAllRecords, addNewRecords,editRecords, deleteRecords} from '../controllers/reports.controllers.js'
const reportsRouter = express.Router()
reportsRouter.get('/getalldocumets', getAllRecords);
reportsRouter.post('/addnewdocument', addNewRecords);
reportsRouter.put('/editdocument/:id', editRecords);
reportsRouter.delete('/deletedocument', deleteRecords);

export default reportsRouter;