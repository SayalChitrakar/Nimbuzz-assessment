import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Todo from "./component/Todo";
import TodoList from "./component/TodoList";
import CompletionRate from "./component/CompletionRate";
import React from "react";
function App() {
  const [forceRender, setForceRender] = React.useState(false);
  return (
    <div style={{ marginTop: "30px" }}>
      <div className="container">
        <h2 style={{ width: "100%", color: "orange", textAlign: "center" }}>
          Nimbuzz Todo App
        </h2>
        <div className="row">
          <div className="col-8">
            <Todo forceRender={{ forceRender, setForceRender }} />
            <TodoList forceRender={{ forceRender, setForceRender }} />
          </div>
          <div className="col-4">
            <CompletionRate forceRender={{ forceRender, setForceRender }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
