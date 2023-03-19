import React from "react";
import "./../css/todo.css";
const Todo = () => {
  return (
    <>
      <div className="container mainContainer">
        <h2>Nimbuzz Todo app</h2>
        <div className="todoContainer">
          <form>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="task"
                placeholder="Add a new task"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Todo;
