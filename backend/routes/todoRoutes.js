import express from "express";
import {
  getAllTodo,
  addTodo,
  updateTodo,
  getOneTodo,
} from "./../controller/todoController.js";

const todoRouter = express.Router();

todoRouter.route("/").get(getAllTodo).post(addTodo);

todoRouter.route("/:todoId").get(getOneTodo).patch(updateTodo);

export default todoRouter;
