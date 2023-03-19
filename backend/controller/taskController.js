import Task from "../models/taskModel.js";
import Todo from "../models/todoModel.js";
import Joi from "joi";
import { createTaskSchema, updateTaskSchema } from "../dto/taskDto.js";
import mongoose from "mongoose";

export const getAllTaskOfTodo = async (request, response) => {
  try {
    const isValidTodoId = mongoose.Types.ObjectId.isValid(
      request.params.todoId
    );
    if (!isValidTodoId) {
      return response.status(400).json({
        status: "Failed",
        message: "Not a valid Id.",
      });
    }

    const isValidTodo = Todo.findById(request.params.todoId);
    if (!isValidTodo) {
      return response.status(400).json({
        status: "Failed",
        message: "Todo doesnot exists.",
      });
    }

    const tasks = await Task.find({ todo: request.params.todoId });
    response.status(200).json({
      status: "success",
      data: {
        data: tasks,
      },
    });
  } catch (error) {
    console.log("Error while getting all task.");
  }
};

export const addTask = async (request, response) => {
  try {
    const isValidExists = Todo.findById(request.params.todoId);
    if (!isValidExists) {
      return response.status(400).json({
        status: "Failed",
        message: "Todo doesnot exists.",
      });
    }
    console.log(request.body);
    const { error } = createTaskSchema.validate(request.body);
    if (error) {
      return response.status(400).json({
        status: "Failed",
        message: error,
      });
    }
    const task = await Task.create(request.body);
    response.status(200).json({
      status: "Success",
      message: "Task added successfully.",
      data: {
        data: task,
      },
    });
  } catch (error) {
    console.log(error);
    return response.status(400).json({
      status: "Failed",
      error,
      message: "Error while adding task",
    });
  }
};

export const updateTask = async (request, response) => {
  try {
    const { error } = updateTaskSchema.validate(request.body);
    if (error) {
      return response.status(400).json({
        status: "Failed",
        message: error,
      });
    }
    const isValidTask = await Task.findById(request.params.taskId);
    if (!isValidTask) {
      return response.status(400).json({
        status: "Failed",
        message: "Task doesnot exist.",
      });
    }
    const updatedTask = await Task.findByIdAndUpdate(
      request.params.taskId,
      request.body,
      { new: true }
    );
    response.status(200).json({
      status: "Success",
      message: "Task updated successfully.",
      data: {
        data: updatedTask,
      },
    });
  } catch (error) {
    console.log(error);
    return response.status(400).json({
      status: "Failed",
      error,
      message: "Error while updating task.",
    });
  }
};

export const getAllCompletedTask = async (request, response) => {
  try {
    const completedTask = await Task.find({
      todo: request.params.todoId,
      status: "COMPLETED",
    });
    response.status(200).json({
      status: "Success",
      data: {
        data: completedTask,
      },
    });
  } catch (error) {
    console.log("error while getting completed tasks.");
    response.send("error while getting completed tasks.");
  }
};
export const getAllPendingTask = async (request, response) => {
  try {
    const pendingTask = await Task.find({
      todo: request.params.todoId,
      status: "PENDING",
    });
    response.status(200).json({
      status: "Success",
      data: {
        data: pendingTask,
      },
    });
  } catch (error) {
    console.log("error while getting pending tasks.");
    response.send("error while getting pending tasks");
  }
};
