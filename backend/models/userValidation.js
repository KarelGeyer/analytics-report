import Joi from 'joi'

const joiUserSchema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8).max(16)
})

export default joiUserSchema
