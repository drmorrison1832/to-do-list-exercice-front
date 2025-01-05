import axios from "axios";

const DeleteTask = (props) => {
  const { task, setMustRetrieve, taskToUpdate, setTaskToUpdate } = props;

  // console.log("  DeleteTask", new Date().getMilliseconds());

  function handleClick() {
    setTaskToUpdate({
      _id: task._id,
      method: "delete",
    });

    console.log(' DeleteTask: setTaskToUpdate method set to "delete" ');
  }

  return (
    <span className="delete" onClick={handleClick}>
      X
    </span>
  );
};

export default DeleteTask;
