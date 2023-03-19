import express from "express";
import {
  getAllTaskOfTodo,
  addTask,
  updateTask,
  getAllCompletedTask,
  getAllPendingTask,
} from "../controller/taskController.js";

const taskRouter = express.Router();
taskRouter.route("/:todoId").get(getAllTaskOfTodo);

taskRouter.route("/").post(addTask);

taskRouter.route("/:taskId").patch(updateTask);

taskRouter.route("/completed/:todoId").get(getAllCompletedTask);

taskRouter.route("/pending/:todoId").get(getAllPendingTask);

export default taskRouter;
