import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name of todo is required."],
    },
    status: {
      type: String,
    },
    completionRate: {
      type: Number,
      default: 0,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Todo = mongoose.model("Todo", todoSchema);
export default Todo;
