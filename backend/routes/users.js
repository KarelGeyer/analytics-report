import express from 'express';

// Import controlers
import {getUsers, createNewUser, logIn, removeUser, updateUser} from '../app/controlers/userControlers.js'

// Initiate the router
const users = express.Router();

users.get('/', getUsers)
users.post('/', createNewUser)
users.post('/login', logIn)
users.delete('/', removeUser)
users.patch('/', updateUser)

export default users;