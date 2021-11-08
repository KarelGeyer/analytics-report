import express from 'express';
import { getEvents, postEvent, updateEvent, deleteEvent } from '../controlers/eventControlers.js';
import verify from '../middlewares/verifyToken.js';

const events = express.Router();

events.get('/', getEvents);
events.post('/', verify, postEvent);
events.patch('/', verify, updateEvent)
events.delete('/', verify, deleteEvent)

export default events;