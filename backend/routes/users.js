import express from 'express';

// Import controlers
import {getUsers, createNewUser, logIn} from '../controlers/userControlers.js'

// Initiate the router
const users = express.Router();

users.get('/', getUsers)
users.post('/', createNewUser)
users.post('/login', logIn)

export default users;