import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import data from './routes/data.js';
import users from './routes/users.js';
import details from './routes/details.js';

const app = express();
dotenv.config();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/analytics', data);
app.use('/users', users);
app.use('/details', details);
app.get('/', (req, res) => {
	res.send('welcome');
});

const PORT = process.env.PORT;
const CONNECTION_URL = process.env.CONNECTION_URL;

mongoose.connect(CONNECTION_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}).then(() => app.listen(PORT, () => console.log(`Server is running and listening to ${PORT}`))).catch((err) => console.log(err));

