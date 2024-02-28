import express from 'express';
import {ValidateUser} from '../controllers/login.controllers.js'
const loginRouter = express.Router()
loginRouter.post('/login', ValidateUser);

export default loginRouter; 