import type { Task } from '../../type'
import TaskEdit from '../TaskEdit'
import './taskList.css'
import { useState } from 'react'

type TaskListProps = {
  tasks: Task[],
  deleteTask: (index: number) => void
  finishTask: (index: number) => void
  editTask: (index: number, task: Task) => void
}

const TaskList = ({ tasks, deleteTask, finishTask, editTask }: TaskListProps) => {
  const [edit, setEdit] = useState<number | null>()

  return <section className='taskList'>
    <h2>Task lists</h2>
    <ul>
      {tasks.map((task, index) => (
        <div key={index}>
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              id={`task-${index}`}
              onChange={() => finishTask(index)}
            />
            <label
              htmlFor={`task-${index}`}
              className={task.completed ? 'taskFinish true' : 'taskFinish false'}
              onDoubleClick={() => setEdit(index)}
            >
              {task.name + " "}
              {task.dueDate ? task.dueDate : null}
              {task.category}
            </label>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
          {edit == index && <TaskEdit
            idx={index}
            modifTask={task}
            editTask={editTask}
            clearTasks={() => setEdit(null)}
          />}
        </div>
      ))}
    </ul>

  </section>
}

export default TaskList
