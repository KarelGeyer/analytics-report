// Imports
import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import routes from './routes/routes.js';
import users from './routes/users.js';
import details from "./routes/details.js";

// Initialize and config
const app = express();
dotenv.config();

app.use(express.json({limit: '30mb', extended: true}))
app.use(express.urlencoded({limit: '30mb', extended: true}))
app.use(cors())

// Routes
app.use('/analytics', routes)
app.use('/users', users)
app.use('/details', details)

// Main Page
app.get('/', (req, res) => {
    res.send('welcome')
});

// Connect to MongoDB and start the server
const PORT = process.env.PORT
const CONNECTION_URL = process.env.CONNECTION_URL

mongoose.connect(CONNECTION_URL, {
useNewUrlParser: true,
useUnifiedTopology: true,
}).then(() => 
app.listen(PORT, () => console.log(PORT))
).catch((err) => 
console.log(err)
);

