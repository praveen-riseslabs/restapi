import express from 'express';
import {getAllDocuments, addNewDocuments, editDocument, deleteDocument} from '../controllers/document.controllers.js'
const documentsRouter = express.Router()
documentsRouter.get('/getalldocumets', getAllDocuments);
documentsRouter.post('/addnewdocument', addNewDocuments);
documentsRouter.put('/editdocument/:id', editDocument);
documentsRouter.delete('/deletedocument/:id', deleteDocument);

export default documentsRouter;