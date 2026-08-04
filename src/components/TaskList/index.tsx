import './taskList.css'

type TaskListProps = {
  tasks: { name: string, completed: boolean }[],
  deleteTask: (index: number) => void
  finishTask: (index: number) => void
}

const TaskList = ({ tasks, deleteTask, finishTask }: TaskListProps) => {
  return <ul className='taskList'>
    {tasks.map((task, index) => (
      <div key={index}>
        <li key={index}>
          <input
            type="checkbox"
            checked={task.completed}
            id={`task-${index}`}
            onClick={()=>finishTask(index)}
          />
          <label htmlFor={`task-${index}`} className={task.completed? 'taskFinish true': 'taskFinish false'}>{task.name}</label>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      </div>
    ))}
  </ul>
}

export default TaskList
