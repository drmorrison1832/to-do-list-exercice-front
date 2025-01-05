const TaskName = (props) => {
  const { task } = props;

  // console.log("  TaskName", new Date().getMilliseconds());

  return (
    <span
      style={
        task.isDone
          ? { textDecorationLine: "line-through" }
          : { textDecorationLine: "none" }
      }
    >
      {task.label}
    </span>
  );
};

export default TaskName;
