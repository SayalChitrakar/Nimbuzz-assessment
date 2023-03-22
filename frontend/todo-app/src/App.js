import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Todo from "./component/Todo.js";
import TodoList from "./component/TodoList.js";
import CompletionRate from "./component/CompletionRate.js";
import React from "react";
function App() {
  const [forceRender, setForceRender] = React.useState(false);
  return (
    <div style={{ marginTop: "30px" }}>
      <div className="container">
        <h2 style={{ width: "100%", color: "orange", textAlign: "center" }}>
          Nimbuzz Todo App
        </h2>
        <div className="appRow row">
          <div className="appCol col-8">
            <Todo forceRender={{ forceRender, setForceRender }} />
            <TodoList forceRender={{ forceRender, setForceRender }} />
          </div>
          <div className="appCol col-4">
            <CompletionRate forceRender={{ forceRender, setForceRender }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
