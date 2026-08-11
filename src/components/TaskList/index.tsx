import OneTask from '../OneTask'
import './taskList.css'
// import { useState } from 'react'
import type { TaskListProps } from '../../type'

const TaskList = ({ tasks, deleteTask, finishTask, editTask }: TaskListProps) => {
  // const [edit, setEdit] = useState<number | null>()

  return <section className='taskList'>
    <h2 className='listTitle'>Task lists</h2>
    <div className='list'>
      {tasks.map((task, index) => (
        <OneTask
          key={index}
          idx={index}
          task={task}
          deleteTask={deleteTask}
          finishTask={finishTask}
          editTask={editTask}
        />
      ))}
    </div>

  </section>
}

export default TaskList
