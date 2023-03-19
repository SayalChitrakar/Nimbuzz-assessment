import Joi from "joi";

export const todoSchema = Joi.object({
    task : Joi
        .string()
        .required(),
    status: Joi
        .string()
        .valid('PENDING','COMPLETED'),
    completionRate : Joi
                    .number()
})

export const updateTodoSchema = Joi.object({
    task : Joi
        .string(),
    status: Joi
        .string()
        .valid('PENDING','COMPLETED'),
    completionRate : Joi
                    .number()
})

