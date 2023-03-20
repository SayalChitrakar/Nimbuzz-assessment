import express from "express";
import {
  getAllTodo,
  addTodo,
  updateTodo,
  getOneTodo,
  getAllPendingTodo,
  getAllCompletedTodo,
  completionRatePerDay,
} from "./../controller/todoController.js";

const todoRouter = express.Router();

todoRouter.route("/").get(getAllTodo).post(addTodo);

todoRouter.route("/pending").get(getAllPendingTodo);

todoRouter.route("/completed").get(getAllCompletedTodo);

todoRouter.route("/task/completion-rate").get(completionRatePerDay);

todoRouter.route("/:todoId").get(getOneTodo).patch(updateTodo);

export default todoRouter;
