import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Todo from "./component/Todo";
import TodoList from "./component/TodoList";
import React from "react";
function App() {
  const [submitState, changeSubmitState] = React.useState(true);
  return (
    <>
      <Todo changeSubmitState={changeSubmitState} submitState={submitState} />
      <TodoList submitState={submitState} />
    </>
  );
}

export default App;
