import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Todo name is required."],
    },
    completionRate: {
      type: Number,
      default: 0,
    },
    createAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

//virtually populating task in todo.
todoSchema.virtual("task", {
  ref: "Task",
  foreignField: "todo",
  localField: "_id",
});

todoSchema.pre(/^find/, function (next) {
  this.select("_id name completionRate task");
  this.populate({
    path: "task",
    select: "_id name status -todo ",
  });
  next();
});
const Todo = mongoose.model("Todo", todoSchema);
export default Todo;
