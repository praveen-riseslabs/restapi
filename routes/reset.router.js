import express from 'express';
import {setResetPassword} from '../controllers/reset.controllers.js'
const forgotRouter = express.Router()
forgotRouter.post('/password', setResetPassword);

export default forgotRouter;