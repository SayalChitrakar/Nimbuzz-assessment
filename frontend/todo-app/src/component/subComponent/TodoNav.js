import React from "react";
import "./../../css/todoNav.css";
const TodoNav = ({ handleNavState, navState }) => {
  const handleChildState = (stateValue) => {
    handleNavState(stateValue);
  };
  return (
    <div className="todoNav ">
      <button
        className={
          navState === "Pending" ? "btn col-4 selectedNavBtn" : "btn col-4"
        }
        id="pendingBtn"
        onClick={() => handleChildState("Pending")}
      >
        Pending
      </button>
      <button
        className={
          navState === "Completed" ? "btn col-4 selectedNavBtn" : "btn col-4"
        }
        id="completedBtn"
        onClick={() => handleChildState("Completed")}
      >
        Completed
      </button>
      <button
        className={
          navState === "All" ? "btn col-4 selectedNavBtn" : "btn col-4"
        }
        id="allBtn"
        onClick={() => handleChildState("All")}
      >
        All
      </button>
    </div>
  );
};
export default TodoNav;
