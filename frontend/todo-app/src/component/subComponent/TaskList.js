import React from "react";
import "./../../css/taskList.css";
import axios from "axios";
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDone } from "react-icons/md";

const TaskList = ({ navState, submitState }) => {
  const [todoData, setTodoData] = React.useState([]);

  React.useEffect(() => {
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
  }, [navState, submitState]);
  return (
    <div className="taskListContainer">
      {todoData.map((data) => {
        let date = data.createdAt.slice(0, 10);
        return (
          <div className="task">
            <div className="task-item col-4">
              <p>{data.name}</p>
            </div>
            <div className="task-item col -4">
              <p style={{ paddingLeft: "28px" }}> {date}</p>
            </div>
            <div className="task-item col -4">
              <div className="task-fun">
                <button className="btn" style={{ color: "green" }}>
                  <MdOutlineDone />
                </button>
                <button className="btn">
                  <CiEdit />
                </button>
                <button className="btn" style={{ color: "red" }}>
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
