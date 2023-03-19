import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: [true, "Task is required."],
  },
  status: {
    type: String,
    enum: ["PENDING", "COMPLETED"],
    default: "PENDING",
  },
  completionRate: {
    type: Number,
    default: 0,
  },
});

const Todo = mongoose.model("Todo", todoSchema);
export default Todo;
