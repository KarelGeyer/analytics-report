import express from 'express';
import verify from '../app/middlewares/verifyToken.js';

const details = express.Router()

details.get('/', verify, (req, res) => {
    res.json('This is a simple testing route')
})

export default details