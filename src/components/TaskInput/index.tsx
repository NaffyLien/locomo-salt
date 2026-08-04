import { useState } from 'react'
import type { Task } from '../../type'
import './taskInput.css'

type TaskInputProps = {
  addNewTask: (task: Task) => void,
  clearTasks: () => void
}

const TaskInput = ({ addNewTask, clearTasks: clearTask }: TaskInputProps) => {
  const [newTask, setNewTask] = useState<Task>({
    name: '',
    completed: false,
    category: "Study"
  })

  const handleAddNewTask = () => {
    if (newTask.name.trim() !== '') {
      addNewTask(newTask)
      setNewTask({
        name: '',
        completed: false,
        category: "Study"
      })
    }
  }

  return <section className='taskInput'>
    <input
      className='tIName'
      type='text'
      placeholder='Insert next task here'
      value={newTask.name}
      onChange={(e) => setNewTask(prev => ({ ...prev, name: e.target.value }))}
    />
    <input
      className='tIDate'
      type='date'
      name='dueDate'
      id='dueDate'
      min={new Date().toISOString().slice(0, 10)}
      value={newTask.dueDate}
      onChange={(e) => setNewTask(prev => ({ ...prev, dueDate: e.target.value }))}
    />
    <select
      className='tICtg'
      id="category"
      value={newTask.category}
      onChange={(e) => setNewTask(prev => ({ ...prev, category: e.target.value as Task['category'] }))}
    >
      <option >Work</option>
      <option >Study</option>
      <option >Personal</option>
      <option >Shopping</option>
      <option >Other</option>
    </select>
    <button
      className='tIBtn'
      onClick={handleAddNewTask}>Add task</button>
    <button type='reset' onClick={clearTask}>Clear</button>
  </section>
}

export default TaskInput