import Joi from 'joi'

export const addUserSchema = Joi.object({
    name: Joi.string().required().min(4).max(20),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
    age: Joi.number().required().min(10).max(60)
})
