import express from "express";
import {findAll, deleteUser, update, findOne, create} from '../controllers/user.controllers.js';
const userRoutes = express.Router()
// Retrieve all users
userRoutes.get('/getusers', findAll);
// Create a new user
userRoutes.post('/create', create);
// Retrieve a single user with id
userRoutes.get('/:id', findOne);
// Update a user with id
userRoutes.put('/:id', update);
// Delete a user with id
userRoutes.delete('/:id', deleteUser);

export default userRoutes;