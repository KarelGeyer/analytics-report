import mongoose from 'mongoose';
import Joi from 'joi';

const UserModel = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	role: {
		type: String
	},
	email: {
		type: String,
	},
	password: {
		type: String,
	},
});

export const joiUserSchema = Joi.object({
	email: Joi.string().required().email(),
	password: Joi.string().required().min(8).max(16),
	role: Joi.string().required(),
	newEmail: Joi.string().email(),
	newPassword: Joi.string().min(8).max(16)
});

export default mongoose.model('User', UserModel);