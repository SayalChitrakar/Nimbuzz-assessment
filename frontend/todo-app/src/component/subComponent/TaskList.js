import React from "react";
import "./../../css/taskList.css";
import axios from "axios";
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDone } from "react-icons/md";
import EditTask from "./EditTask";

const TaskList = ({ navState, submitState }) => {
  const [todoData, setTodoData] = React.useState([]);
  const [forceRender, setForceRender] = React.useState(false);
  const [editStatus, setEditStatus] = React.useState(false);
  const [currentEditData, setCurrentEditData] = React.useState({});
  const completeTodo = async (todoItem) => {
    const compledData = await axios.patch(
      `http://localhost:3001/api/todo/${todoItem}`,
      {
        status: "COMPLETED",
      }
    );
    setForceRender(!forceRender);

    console.log(currentEditData);
  };
  const editTodo = async (data) => {
    setCurrentEditData(data);
    setEditStatus(true);
  };
  React.useEffect(() => {
    console.log("running");
    const fetchData = async () => {
      const api =
        navState === "All"
          ? "http://localhost:3001/api/todo"
          : navState === "Pending"
          ? "http://localhost:3001/api/todo/pending"
          : "http://localhost:3001/api/todo/completed";
      const data = await axios.get(api);
      setTodoData(data.data.data);
    };
    fetchData();
  }, [navState, submitState, forceRender]);

  return (
    <div className="mainListContainer">
      <div className="taskListContainer">
        {todoData.map((data) => {
          let date = data.createdAt.slice(0, 10);
          return (
            <div className="task">
              <div
                className="task-item col-4"
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p style={{ width: "100%", textAlign: "justify" }}>
                  {data.name}
                </p>
                {navState === "All" && (
                  <div
                    className="todoStatus"
                    style={{
                      color: data.status === "COMPLETED" ? "green" : "red",
                      border:
                        data.status === "COMPLETED"
                          ? "1px solid green"
                          : "1px solid red",
                    }}
                  >
                    <p>{data.status}</p>
                  </div>
                )}
              </div>
              <div className="task-item col -4">
                <p> {date}</p>
              </div>
              <div
                className="task-item col -4"
                style={{ justifyContent: "flex-end" }}
              >
                <div className="task-fun">
                  {data.status !== "COMPLETED" && (
                    <button
                      className="btn"
                      style={{ color: "#28a745" }}
                      onClick={() => {
                        completeTodo(data._id);
                      }}
                    >
                      <MdOutlineDone />
                    </button>
                  )}

                  <button
                    className="btn"
                    style={{ color: "#007bff" }}
                    onClick={() => {
                      editTodo(data);
                    }}
                  >
                    <CiEdit />
                  </button>
                  <button className="btn" style={{ color: "#dc3545" }}>
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {editStatus && (
        <div className="editContainer">
          <EditTask
            setForceRender={setForceRender}
            setEditStatus={setEditStatus}
            currentEditData={currentEditData}
          />
        </div>
      )}
    </div>
  );
};

export default TaskList;
