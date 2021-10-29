import bcrypt from 'bcrypt';
import User, { joiUserSchema } from '../models/UserModel.js';

const validateUser = async (req, res, next) => {

  try {
    const user = await User.findOne({
      email: req.body.email,
    });

    if (!user) {
      return res.status(401).send('password or email is wrong');
    };

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

    if (!isPasswordValid) {
      return res.status(401).send('password or email is wrong')
    };

    req.thisUser = user
    next();
  } catch (err) {
    return res.status(400).send(err);
  };
};

export default validateUser;