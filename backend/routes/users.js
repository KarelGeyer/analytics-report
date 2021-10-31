import express from 'express';
import { getUsers, getUser, createNewUser, logIn, removeUser, updateUser } from '../controlers/userControlers.js';
import validateUser from '../middlewares/validateUser.js';

const users = express.Router();

users.get('/', getUsers);
users.get('/users', getUser);
users.post('/', createNewUser);
users.post('/login', validateUser, logIn);
users.delete('/', validateUser, removeUser);
users.patch('/', validateUser, updateUser);

export default users;