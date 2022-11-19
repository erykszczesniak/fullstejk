const Task = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  return (
    <div>
      <input
        type="text"
        value={task}
        placeholder="Enter a task"
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <input
        className="button"
        type="button"
        value="Add"
        onClick={(e) => {
          setTaskList([
            ...taskList,
            {
              id: taskList.length + 1,
              task: task,
            },
          ]);
          setTask("");
        }}
      />
      <ul>
        {taskList.map((t) => (
          <li key={t.id}>{t.task}</li>
        ))}
      </ul>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Task />, rootElement);
