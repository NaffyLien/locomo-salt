import { useState } from 'react'
import type { Task } from '../type'

type TaskInputProps = {
  addNewTask: (task: Task) => void
}

const TaskInput = ({ addNewTask }: TaskInputProps) => {
  const [newTaskName, setNewTaskName] = useState('')
  const [newTaskDate, setNewTaskDate] = useState<string>(new Date().toISOString().slice(0, 10))

  const handleAddNewTask = () => {
    if (newTaskName.trim() !== '') {
      addNewTask({ 
        name: newTaskName, 
        completed: false, 
        dueDate: newTaskDate
      })
      setNewTaskName('')
    }
  }

  return <section>
    <input
      type='text'
      placeholder='Insert next task here'
      value={newTaskName}
      onChange={(e) => setNewTaskName(e.target.value)}
    />
    <input
      type='date'
      name='dueDate'
      id='dueDate'
      value={newTaskDate}
      onChange={(e) => setNewTaskDate(e.target.value)}
    />
    <button onClick={handleAddNewTask}>Add task</button>
  </section>
}

export default TaskInput