import express from "express";
const app = express();
import dotenv from "dotenv";
import todoRouter from "./routes/todoRoutes.js";
import taskRouter from "./routes/taskRoutes.js";

dotenv.config();
app.use(express.json());

app.get("/ping", (request, response) => {
  response.send("pong");
});
app.use("/api/todo", todoRouter);
app.use("/api/task", taskRouter);
export default app;
