import Todo from "./../models/todoModel.js";
import Joi from "joi";
import { todoSchema, updateTodoSchema } from "../dto/todoDto.js";
import mongoose from "mongoose";

export const getAllTodo = async (request, response) => {
  try {
    const todo = await Todo.find();
    response.status(200).json({
      status: "success",
      data: todo,
    });
  } catch (error) {
    console.log("error while getting all todo.");
  }
};
export const getOneTodo = async (request, response) => {
  try {
    //Checking if the id in params is a valid object Id of DB.
    const isValidId = mongoose.Types.ObjectId.isValid(request.params.todoId);
    if (!isValidId) {
      return response.status(400).json({
        status: "Failed",
        message: "Not a valid Id.",
      });
    }

    const todo = await Todo.findById(request.params.todoId);
    response.status(200).json({
      status: "Success",
      data: {
        data: todo,
      },
    });
  } catch (error) {
    console.log("error while getting one todo.");
  }
};
export const addTodo = async (request, response) => {
  try {
    const { error } = todoSchema.validate(request.body);
    if (error) {
      return response.status(400).json({
        status: "Failed",
        message: error,
      });
    }
    const todo = await Todo.create(request.body);
    return response.status(200).json({
      status: "Success",
      data: {
        data: todo,
      },
    });
  } catch (error) {
    console.log("Error while adding todo.");
    console.log(error);
  }
};

export const updateTodo = async (request, response) => {
  try {
    const isValidId = mongoose.Types.ObjectId.isValid(request.params.todoId);
    const { error } = updateTodoSchema.validate(request.body);
    if (error) {
      return response.status(400).json({
        status: "Failed",
        message: error,
      });
    }
    if (!isValidId) {
      return response.status(400).json({
        status: "Failed",
        message: "Not valid Id.",
      });
    }
    const isValidTodo = await Todo.findById(request.params.todoId);
    if (!isValidTodo) {
      return response.status(400).json({
        status: "Failed",
        message: "Todo not found.",
      });
    }

    const updatedTodo = await Todo.findByIdAndUpdate(
      request.params.todoId,
      request.body,
      {
        new: true,
      }
    );
    response.status(200).json({
      status: "Success",
      message: "Todo updated successfully.",
      data: {
        data: updatedTodo,
      },
    });
  } catch (error) {
    console.log(error);
    console.log("error");
    response.send("Error while updating todo.");
  }
};
export const getAllCompletedTodo = async (request, response) => {
  try {
    const completedTodo = await Todo.find({
      status: "COMPLETED",
    });
    response.status(200).json({
      status: "Success",
      data: {
        data: completedTodo,
      },
    });
  } catch (error) {
    console.log("error while getting completed todo.");
    response.send("error while getting completed todo.");
  }
};
export const getAllPendingTodo = async (request, response) => {
  try {
    const pendingTodo = await Todo.find({
      status: "PENDING",
    });
    response.status(200).json({
      status: "Success",
      data: {
        data: pendingTodo,
      },
    });
  } catch (error) {
    console.log("error while getting pending todo.");
    response.send("error while getting pending todo.");
  }
};

export const completionRatePerDay = async (request, response) => {
  try {
    const completionRate = await Todo.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          data: { $push: "$$ROOT" },
          numberOfTask: { $sum: 1 },
          numberOfCompletedTask: {
            $sum: {
              $cond: [{ $eq: ["status", "COMPLETED"] }, 1, 0],
            },
          },
        },
      },
    ]);
    response
      .status(200)
      .json({ status: "Success", data: { data: completionRate } });
    console.log(completionRate);
  } catch (error) {
    console.log(error);
    return response.status(400).json({ staus: "Failed", error });
  }
};
