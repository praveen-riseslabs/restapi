import express from 'express';
import {genrateRandomToken} from '../controllers/forgot.controllers.js'
const forgotRouter = express.Router()
forgotRouter.post('/password', genrateRandomToken);

export default forgotRouter;