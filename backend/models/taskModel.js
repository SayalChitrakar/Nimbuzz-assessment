import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Task name is required."],
  },
  status: {
    type: String,
    enum: ["PENDING", "COMPLETED"],
    default: "PENDING",
  },
  todo: {
    type: mongoose.Schema.ObjectId,
    ref: "Todo",
    required: [true, "Task must belong to todo list."],
  },
});

const Task = mongoose.model("Task", taskSchema);
export default Task;
