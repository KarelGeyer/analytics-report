import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//Import user model
import User from '../models/userModel.js';

// Import validation model
import joiUserSchema from '../models/userValidation.js';

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
 
     // Check if user already exists
     const emailExist = await User.findOne({
         email: req.body.email
     });
 
     // Hash the password
     const salt = await bcrypt.genSalt(10);
     const hashedPassword = await bcrypt.hash(req.body.password, salt);
 
     // Create new user
     const user = new User({
         email: req.body.email,
         password: hashedPassword
     });
 
     try {
         if(error){
             const message = error.details[0].message
             res.json(message)
         } else if (emailExist){
             return res.send('User with this email already exist')
         } else {
             await user.save()
             res.status(201).json(user);
         }
     } catch(err) {
         res.status(400).json(err);
     }
}

export const logIn = async (req, res) => {
    
    try { 
         // Find the user 
        const user = await User.findOne({
            email: req.body.email,
        })

        // Check if password is correct
        const isPasswordValid = await bcrypt.compare(req.body.password, user.password)

        if (!isPasswordValid) {
            res.status(401).send(isPasswordValid)
        }

        // Create and assign token
        const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)
        res.header('auth-token', token).send({
            user: user,
            token: token
        })

    } catch(err) {
        res.status(401).send('something went wrong');
    }
}
