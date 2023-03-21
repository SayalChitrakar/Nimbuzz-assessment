import React from "react";
import "./../css/todo.css";
import TodoNav from "./subComponent/TodoNav";
import TaskList from "./subComponent/TaskList";

const TodoList = ({ submitState }) => {
  const [navState, setNavState] = React.useState("All");
  const handleNavState = (navState) => {
    setNavState(navState);
  };
  return (
    <div className="container mainContainer">
      <div
        className="todoContainer"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <TodoNav handleNavState={handleNavState} navState={navState} />
        <TaskList navState={navState} submitState={submitState} />
      </div>
    </div>
  );
};
export default TodoList;
