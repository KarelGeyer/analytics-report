import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User, {joiUserSchema} from '../models/UserModel.js';

export const getUsers = async (req, res) => {
    try {
        const user = await User.find()
        res.status(201).json(user)
    } catch (err) {
        res.status(404).json(err)
    }
}

export const createNewUser = async (req, res) => {
    // Validate data
    const validation = joiUserSchema.validate(req.body);
    const {error} = validation;
 
    try {
        if (!error) {
            // Check if user already exists
            const emailExist = await User.findOne({
                email: req.body.email
            });

            if(emailExist) {
                return res.send('User with this email already exist')
            } else {
                // Hash the password
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(req.body.password, salt);
     
                // Create new user
                const user = await new User({
                email: req.body.email,
                password: hashedPassword
                });

                await user.save()
                res.status(201).json(user);
            }
        } else {
            const message = error.details[0].message
            res.json(message)
        }
    } 
    catch(err) {
        res.status(400).json(err);
    }
}

export const logIn = async (req, res) => { 
    try { 
         // Find the user 
        const user = await User.findOne({
            email: req.body.email,
        })

        if (!user) {
            return res.status(401).send('password or email is wrong');
        }
        
        // Check if password is correct
        const isPasswordValid = await bcrypt.compare(req.body.password, user.password)
    
        if (!isPasswordValid) {
            return res.status(401).send('Something went wrong')
        }

        // Create and assign token
        const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)
        res.header('auth-token', token).send({
            user: user,
            token: token
        })
    } catch (err) {
        res.status(400).send('something went wrong');
    }
}

export const removeUser = async (req, res) => { 
    try { 
        const user = await User.findOne({
            email: req.body.email,
        })

        if(!user) {
            return res.status(401).send('password or email is wrong');
        }

        const isPasswordValid = await bcrypt.compare(req.body.password, user.password)

        if(isPasswordValid) {
            await User.findOneAndDelete({email: req.body.email})
            res.status(200).send('Account was succesfully deleted')
        } else {
            res.status(401).send('password or email is wrong')
        }
    }
    catch(err) {
        res.status(401).json(err);
    }
}

export const updateUser = async (req, res) => { 
    const validation = joiUserSchema.validate(req.body);
    const {error} = validation;

    try {
        if(error) {
            return res.status(400).send(error.details[0].message)
        }

        const user = await User.findOne({
            email: req.body.email,
        })

        if(!user) {
            return res.status(401).send('password or email is wrong');
        }

        const isPasswordValid = await bcrypt.compare(req.body.password, user.password)

        if(isPasswordValid) {
            const {newPassword, newEmail} = req.body

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(newPassword, salt);

            await User.findOneAndUpdate({email: req.body.email}, {
                email: newEmail,
                password: hashedPassword
            })
            res.status(200).send('Account was successfully updated')
        } else {
            res.status(401).send('Something went wrong')
        }
    }
    catch(err) {
        res.status(401).json(err);
    }
}
