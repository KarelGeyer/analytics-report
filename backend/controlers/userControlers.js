import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User, { joiUserSchema } from '../models/UserModel.js';

export const getUsers = async (req, res) => {
	try {
		const user = await User.find()
		res.status(201).json(user)
	} catch (err) {
		res.status(404).json(err)
	};
};

export const createNewUser = async (req, res) => {
	const { error } = joiUserSchema.validate(req.body);

	if (error) {
		const message = error.details[0].message;
		return res.send(message);
	};

	try {
		const user = await User.findOne({
			email: req.body.email
		});

		if (user) {
			return res.send('User with this email already exist');
		};

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(req.body.password, salt);

		const newUser = await new User({
			email: req.body.email,
			password: hashedPassword
		});

		const savedUser = await newUser.save();

		if (!savedUser) {
			return res.status(400).send('something went wrong, please try again later');
		};

		res.status(201).send('account was succesfully created');
	} catch (err) {
		res.status(400).json(err.message);
	};
};

export const logIn = async (req, res) => {
	try {
		const user = req.thisUser

		// Create and assign token
		const token = jwt.sign({
			_id: user._id
		}, process.env.TOKEN_SECRET);

		res.header('auth-token', token).send({
			user: user,
			token: token
		});
	} catch (err) {
		res.status(400).send(err.message);
	};
};

export const removeUser = async (req, res) => {
	try {
		const deletedUser = await User.findOneAndDelete({
			email: req.body.email
		});

		if (!deletedUser) {
			return res.status(400).send('user was not found');
		};

		return res.status(200).send('account was succesfully deleted');
	} catch (err) {
		return res.status(401).json(err.message);
	};
};

export const updateUser = async (req, res) => {
	const { error } = joiUserSchema.validate(req.body);

	if (error) {
		return res.status(400).send(error.details[0].message);
	};

	try {
		const { newPassword, newEmail } = req.body;
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(newPassword, salt);

		await User.findOneAndUpdate({
			email: req.body.email
		}, {
			email: newEmail,
			password: hashedPassword
		});

		return res.status(201).send('user was succesfully updated');
	} catch (err) {
		return res.status(401).json(err.message);
	};
};
