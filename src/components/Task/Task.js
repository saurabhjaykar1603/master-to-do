import React from "react";
import "./Task.css";

function Task({ title, description, date, deleteTask, id }) {
  return (
    <>
      <div
        className="card shadow-sm mt-2"
        style={{ width: "26rem", height: "120px" }}
      >
        <div className="card-body card-body-container ">
          <h4 className="m-0 fw-bold">Title : {title}</h4>
          <p className="m-0 mt-2 ">
            <span className="fw-bold">Description : </span> {description}
          </p>
          <p className="m-0 mt-2 ">Date : {date}</p>
          <p
            className="delet-icon bg-light shadow  p-1"
            style={{ borderRadius: "50px", border: "1px solid red" }}
            onClick={() => {deleteTask(id);}}
          >
            🗑️
          </p>
          <p
            className="edit-icon bg-light shadow  p-1"
            style={{ borderRadius: "50px", border: "1px solid red" }}
          >
            ✏️
          </p>
        </div>
      </div>
    </>
  );
}

export default Task;
