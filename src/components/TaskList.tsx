type TaskListProps = {
  tasks: string[],
  deleteTask: (index:number) => void
}

const TaskList = ({tasks, deleteTask}: TaskListProps) => {
  return <ul>
    {tasks.map((task, index) => (
      <div key={index}>
        <li key={index}>
          {task}
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      </div>
    ))}
  </ul>
}

export default TaskList
