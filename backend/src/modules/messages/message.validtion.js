import Joi from "joi";

export const msgSchema = Joi.object({
    message: Joi.string().required().min(4).max(200),
    // receivedId: Joi.required()
})