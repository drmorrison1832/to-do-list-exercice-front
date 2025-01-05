import axios from "axios";

const IsDoneCheckbox = (props) => {
  const { task, setMustRetrieve, taskToUpdate, setTaskToUpdate } = props;

  // console.log("  IsDoneCheckbox", new Date().getMilliseconds());

  function handleChange(event) {
    setTaskToUpdate({
      id: task._id,
      isDone: event.target.checked ? true : false,
      method: "put",
    });

    console.log(' IsDoneCheckbox: setTaskToUpdate method set to "put" ');
  }

  return (
    <input
      type="checkbox"
      checked={task.isDone}
      onChange={(event) => {
        handleChange(event);
      }}
    ></input>
  );
};

export default IsDoneCheckbox;

/* axios
          .put("http://localhost:3000/", {
            id: task._id,
            isDone: event.target.checked ? true : false,
          })
          .then((response) => {})
          .catch((error) => {
            console.error(error);
          });

        setMustRetrieve(true);

        console.log(
          "IsDoneCheckbox : mustRetrieve set to true",
          new Date().getMilliseconds()
        ); */
