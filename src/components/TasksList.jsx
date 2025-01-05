import IsDoneCheckbox from "./IsDoneCheckbox";
import ArchiveTaskIcon from "./ArchiveTaskIcon";
import DeleteTask from "./DeleteTask";
import TaskName from "./TaskName";

const TasksList = (props) => {
  const {
    tasks,
    setTasks,
    isArchive,
    mustRetrieve,
    setMustRetrieve,
    taskToUpdate,
    setTaskToUpdate,
  } = props;

  // console.log(" TasksList", new Date().getMilliseconds());

  // if (mustRetrieve && tasks.length === 0) {
  //   return (
  //     <div className="tasks-list">
  //       <p>Loading content...</p>
  //     </div>
  //   );
  // }

  if (tasks.length === 0 && !isArchive) {
    return (
      <div className="tasks-list">
        <p>Start adding tasks...</p>
      </div>
    );
  }

  return (
    <div className="tasks-list">
      {tasks.map((task, index) => {
        if (task.isArchived === isArchive) {
          return (
            <div className="task" key={task._id}>
              <label>
                <IsDoneCheckbox
                  task={task}
                  setMustRetrieve={setMustRetrieve}
                  taskToUpdate={taskToUpdate}
                  setTaskToUpdate={setTaskToUpdate}
                />
                <TaskName task={task} />
              </label>
              <ArchiveTaskIcon
                task={task}
                setMustRetrieve={setMustRetrieve}
                taskToUpdate={taskToUpdate}
                setTaskToUpdate={setTaskToUpdate}
              />
              <DeleteTask
                task={task}
                setMustRetrieve={setMustRetrieve}
                taskToUpdate={taskToUpdate}
                setTaskToUpdate={setTaskToUpdate}
              />
            </div>
          );
        }
      })}
    </div>
  );
};

export default TasksList;
