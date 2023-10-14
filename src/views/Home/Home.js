import React, { useState } from "react";

function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  return (
    <>
      <div className="container py-2 text-center bg-primary text-white rounded w-50 mt-2">
        <h2 className="fs-1 ">Master TO DO</h2>
      </div>

      <div className="d-flex justify-content-evenly mt-4">
        <div className="">
          <h1 className="text-center">Task LIst</h1>
          <div
            className="card shadow"
            style={{
              width: "25rem",
              height: "450px ",
              border: "1px solid red",
            }}
          >
            <div className="card-body"></div>
          </div>
        </div>

        <div className="">
          <h1 className="text-center">Add Task</h1>
          <div
            className="card shadow"
            style={{
              width: "25rem",
              height: "450px ",
              border: "1px solid red",
            }}
          >
            <div className="card-body">
              <form
                action="
                "
              >
                <div className="container mt-4">
                  <input
                    type="text"
                    className="form-control py-4"
                    placeholder="Enter Title Here"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </div>
                <div className="container mt-4">
                  <input
                    type="text"
                    className="form-control py-4"
                    placeholder="Enter Descripton Here"
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                </div>
                <div className="container mt-4">
                  <input
                    type="Date"
                    className="form-control py-4"
                    placeholder="Enter Date Here"
                    value={date}
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                  />
                </div>
                <div className="coantainer text-center mt-5 ">
                  <button
                    type="button"
                    className="btn btn-warning px-5 py-2 fs-5 fw-bold "
                  >
                    Add Task
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
