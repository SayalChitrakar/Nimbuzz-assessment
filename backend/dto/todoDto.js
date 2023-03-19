import Joi from "joi";

export const todoSchema = Joi.object({
  name: Joi.string().required(),
  completionRate: Joi.number(),
});

export const updateTodoSchema = Joi.object({
  name: Joi.string(),
  completionRate: Joi.number(),
});
