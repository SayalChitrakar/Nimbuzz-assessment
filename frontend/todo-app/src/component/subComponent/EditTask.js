import React from "react";
import "./../../css/editTask.css";
import { ImCross } from "react-icons/im";
import axios from "axios";

const EditTask = ({ currentEditData, setEditStatus, setForceRender }) => {
  const [task, changeTask] = React.useState(currentEditData.name);
  const handleTaskChange = (event) => {
    changeTask(event.target.value);
  };
  const handleSubmit = async (event, currentEditData) => {
    event.preventDefault();
    const todoId = currentEditData._id;
    await axios.patch(`http://localhost:3001/api/todo/${todoId}`, {
      name: task,
    });
    setEditStatus(false);
    setForceRender((prev) => !prev);
  };
  return (
    <>
      <div className="editContainer">
        <div className="top-bar">
          <h3
            style={{
              width: "100%",
              paddingLeft: "25px",
              paddingTop: "25px",
              color: "orange",
            }}
          >
            Edit todo name.
          </h3>
          <button
            style={{
              position: "absolute",
              top: "0px",
              right: "0px",
            }}
            className="btn"
            onClick={() => {
              setEditStatus(false);
            }}
          >
            <ImCross style={{ color: "#dc3545" }} />
          </button>
        </div>
        <form style={{ padding: "20px" }}>
          <div className="input-group">
            <input
              style={{ color: "gray" }}
              type="text"
              className="form-control"
              id="task"
              onChange={handleTaskChange}
              value={task}
              placeholder="Edit Name"
              aria-describedby="submit-button"
            />
            <button
              className="btn submitBtn"
              type="submit"
              id="submit-button"
              onClick={(event) => handleSubmit(event, currentEditData)}
            >
              Edit Name
            </button>
          </div>
        </form>
      </div>
      <div className="model-wrapper"></div>
    </>
  );
};
export default EditTask;
