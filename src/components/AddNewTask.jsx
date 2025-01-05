import axios from "axios";
import { useState, useEffect } from "react";

export default function AddNewTask(props) {
  const { mustRetrieve, setMustRetrieve, taskToUpdate, setTaskToUpdate } =
    props;
  const [newTaskLabel, setNewTaskLabel] = useState("");

  // console.log(" AddNewTask", new Date().getMilliseconds());

  function handleClick(event) {
    event.preventDefault();
    if (newTaskLabel) {
      setTaskToUpdate({
        label: newTaskLabel,
        method: "post",
      });

      console.log(' AddNewTask: setTaskToUpdate method set to "post" ');

      setNewTaskLabel("");
    }
  }

  return (
    <div className="new-task-form">
      <form>
        <input
          type="text"
          value={newTaskLabel}
          name="new-task-label"
          id="new-task-label"
          placeholder="New task..."
          onChange={(event) => {
            setNewTaskLabel(event.target.value);
          }}
        />
        <button onClick={mustRetrieve ? null : handleClick}>
          <p>Add task</p>
        </button>
      </form>
    </div>
  );
}
