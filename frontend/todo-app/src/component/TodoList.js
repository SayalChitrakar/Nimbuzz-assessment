import React from "react";
import "./../css/todo.css";
import TodoNav from "./subComponent/TodoNav";
import TaskList from "./subComponent/TaskList";

const TodoList = ({ submitState, forceRender }) => {
  const [navState, setNavState] = React.useState("Pending");
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
        <TaskList
          navState={navState}
          submitState={submitState}
          forceRender={forceRender}
        />
      </div>
    </div>
  );
};
export default TodoList;
