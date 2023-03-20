import Joi from "joi";

export const todoSchema = Joi.object({
  name: Joi.string().required(),
});

export const updateTodoSchema = Joi.object({
  name: Joi.string(),
  status: Joi.string().valid("PENDING", "COMPLETED"),
});
