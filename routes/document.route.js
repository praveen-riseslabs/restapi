import express from 'express';
import {getalldocuments, addnewDocuments,editnewDocuments, deletenewDocuments} from '../controllers/documement.controllers.js'
const employeeRouter = express.Router()
employeeRouter.get('/getdocumets', getalldocuments);
employeeRouter.post('/addnewdocuments', addnewDocuments);
employeeRouter.update('/editdocuments', editnewDocuments);
employeeRouter.delete('/deletedocuments', deletenewDocuments);

export default employeeRouter;