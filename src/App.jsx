import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

// Components
import TasksList from "./components/TasksList";
import AddNewTask from "./components/AddNewTask";

// Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faRotateLeft);

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToUpdate, setTaskToUpdate] = useState({});
  const [mustRetrieve, setMustRetrieve] = useState(true);

  console.log("App (re)started", new Date().getMilliseconds());
  console.log(
    "App: mustRetrieve value is:",
    mustRetrieve,
    new Date().getMilliseconds()
  );

  // Retrieves data after first render or when mustRetrieve changes state.

  useEffect(() => {
    retrieveTasks();
  }, [mustRetrieve]);

  // Sends Axios request to server depending on taskToUpdate state
  useEffect(
    function axiosHandler() {
      console.log(
        "App: axiosHandler: taskUpdate method is:",
        taskToUpdate.method,
        new Date().getMilliseconds()
      );

      if (!taskToUpdate.method) {
        console.log("App: no request to make");
        return;
      }
      if (taskToUpdate.method === "post") {
        postNewTask();
      }
      if (taskToUpdate.method === "put") {
        updateExistingTask();
      }
      if (taskToUpdate.method === "delete") {
        deleteTask();
      }
      console.log(
        'App: axiosHandlerEffect: mustRetrieve set to "true"',
        new Date().getMilliseconds()
      );
    },
    [taskToUpdate]
  );

  // Axios functions

  async function retrieveTasks() {
    if (mustRetrieve === true) {
      try {
        console.log("App: retrieveTasks...", new Date().getMilliseconds());
        const response = await axios.get("http://localhost:3000/");
        console.log(
          "App: retrieveTasks: tasks retrieved from server",
          new Date().getMilliseconds()
        );
        setTasks(response.data);

        console.log(
          'App: retrieveTasks: mustRetrieve set to "false"',
          new Date().getMilliseconds()
        );
        setMustRetrieve(false);
      } catch (error) {
        console.error(error);
      }
    }
  }

  async function postNewTask() {
    console.log("App: postNewTask...", new Date().getMilliseconds());
    await axios.post("http://localhost:3000/", taskToUpdate);

    setMustRetrieve(true);
    setTaskToUpdate({});

    console.log(
      "App: postNewTask: taskToUpdate set to {}",
      new Date().getMilliseconds()
    );
  }

  async function updateExistingTask() {
    console.log("App: updateExistingTask...", new Date().getMilliseconds());

    try {
      await axios.put("http://localhost:3000/", taskToUpdate);

      setTaskToUpdate({});
      setMustRetrieve(true);

      console.log(
        "App: updateExistingTask: taskToUpdate set to {}",
        new Date().getMilliseconds()
      );
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteTask() {
    console.log("App: deleteTask...");

    try {
      await axios.delete(`http://localhost:3000/${taskToUpdate._id}`);

      setTaskToUpdate({});
      setMustRetrieve(true);

      console.log(
        "App: deleteTask: taskToUpdate set to {}",
        new Date().getMilliseconds()
      );
    } catch (error) {
      console.error(error);
    }
  }

  console.log("App: rendering...", new Date().getMilliseconds());

  // if (mustRetrieve && tasks.length === 0) {
  //   return (
  //     <div className="tasks-list">
  //       <p>Loading content...</p>
  //     </div>
  //   );
  // }

  return (
    <>
      <TasksList
        tasks={tasks}
        setTasks={setTasks}
        mustRetrieve={mustRetrieve}
        setMustRetrieve={setMustRetrieve}
        isArchive={false}
        taskToUpdate={taskToUpdate}
        setTaskToUpdate={setTaskToUpdate}
      />

      <AddNewTask
        mustRetrieve={mustRetrieve}
        setMustRetrieve={setMustRetrieve}
        taskToUpdate={taskToUpdate}
        setTaskToUpdate={setTaskToUpdate}
      />

      <TasksList
        tasks={tasks}
        setTasks={setTasks}
        mustRetrieve={mustRetrieve}
        setMustRetrieve={setMustRetrieve}
        isArchive={true}
        taskToUpdate={taskToUpdate}
        setTaskToUpdate={setTaskToUpdate}
      />
    </>
  );
};

export default App;
