import Joi from "joi";
import mongoose from "mongoose";

export const createTaskSchema = Joi.object({
  name: Joi.string().required(),
  todo: Joi.string().custom((value, helper) => {
    if (!mongoose.Types.ObjectId.isValid(value)) {
      return helper.error("Id must be valid object id.");
    } else {
      return true;
    }
  }, "Object ID"),
});

export const updateTaskSchema = Joi.object({
  name: Joi.string(),
  status: Joi.string().valid("PENDING", "COMPLETED"),
});
