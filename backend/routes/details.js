import express from 'express';
import verify from '../middlewares/verifyToken.js';

const details = express.Router();

details.get('/', verify, (req, res) => {
	res.json('This is a simple testing route');
});

export default details;