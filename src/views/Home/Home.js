import React, { useState } from "react";
import Task from "../../components/Task/Task";

function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [taskList, setTaskList] = useState([
    {
      title: "Master To Do",
      description: "Master All To do Concepts",
      date: "15-oct-2023",
    },
  ]);

  // This function adds a task to a list and saves it to local storage.
  const addTaskIntoList = () => {
    // Generate a random ID for the new task.
    const randomId = Math.floor(Math.random() * 1000);
    console.log(randomId); // Log the random ID for debugging purposes.

    // Create a task object with the random ID, title, description, and date.
    const obj = {
      id: randomId, // Assign the random ID
      title: title, // Assign the task title (assuming 'title' is defined elsewhere)
      description: description, // Assign the task description (assuming 'description' is defined elsewhere)
      date: date, // Assign the task date (assuming 'date' is defined elsewhere)
    };

    // Copy the existing task list and add the new task object to it.
    const newTaskList = [...taskList, obj];

    // Update the task list state with the new list that includes the added task.
    setTaskList(newTaskList);

    // Reset the input fields (assuming 'setTitle', 'setDescription', and 'setDate' functions are defined elsewhere).
    setTitle("");
    setDescription("");
    setDate("");

    // Save the updated task list to local storage (assuming 'saveTasksToLocalStorage' is defined elsewhere).
    saveTasksToLocalStorage(newTaskList);
  };

  // delet task operation using obj
  // const deleteTask = (obj) => {
  //   const index = taskList.indexOf(obj); // Find the index of the task to be deleted
  //   const tempArray = taskList; // Create a reference to the original array
  //   tempArray.splice(index, 1); // Remove the task from the tempArray
  //   setTaskList([...tempArray]); // Update state with the tempArray
  // };

  // delet task operation using id

  // Define a function called deleteTask that takes an 'id' as an argument

  const deleteTask = (id) => {
    let index; // Declare a variable to store the index of the task to delete

    // Iterate through the taskList array to find the index of the task with the specified 'id'
    taskList.forEach((task, i) => {
      if (task.id === id) {
        index = i; // Set the 'index' variable when the task with the matching 'id' is found
      }
    });

    const tempArray = [...taskList]; // Create a new array based on the current 'taskList'

    // Remove the task with the found index from 'tempArray'
    tempArray.splice(index, 1);

    // Update the state with a new array that excludes the deleted task
    setTaskList([...tempArray]);
  };

  // save tasks to localStorage

  const saveTasksToLocalStorage = (task) => {
    localStorage.setItem("master", JSON.stringify(task));
  };

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
              width: "28rem",
              height: "450px ",
              border: "1px solid red",
            }}
          >
            <div className="card-body tasklist-container-scroller">
              {taskList.map((taskItem, i) => {
                const { title, description, date, id } = taskItem;
                return (
                  <Task
                    title={title}
                    description={description}
                    date={date}
                    deleteTask={deleteTask}
                    // object={taskItem}
                    id={id}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="">
          <h1 className="text-center">Add Task</h1>
          <div
            className="card shadow"
            style={{
              width: "28rem",
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
                    onClick={addTaskIntoList}
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
