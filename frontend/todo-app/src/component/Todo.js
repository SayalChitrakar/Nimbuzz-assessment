import React from "react";
import "./../css/todo.css";
import axios from "axios";
const Todo = ({ forceRender }) => {
  const [task, changeTask] = React.useState("");

  const handleTaskChange = (event) => {
    changeTask(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (task !== "") {
      const data = await axios.post("http://localhost:3001/api/todo", {
        name: task,
      });
    }
    changeTask("");
    forceRender.setForceRender((prev) => !prev);
  };
  return (
    <>
      <div className="container mainContainer todoHeader">
        <div className="todoContainer">
          <form>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="task"
                value={task}
                placeholder="Add a new task"
                aria-describedby="submit-button"
                onChange={handleTaskChange}
              />
              <button
                className="btn submitBtn"
                type="submit"
                id="submit-button"
                onClick={handleSubmit}
              >
                Add Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Todo;
