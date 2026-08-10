import { useState } from 'react'
import type { Task } from '../../type'
import './taskInput.css'

type TaskInputProps = {
  addNewTask: (task: Task) => void,
  showTaskInput: () => void
}

const TaskInput = ({ addNewTask, showTaskInput }: TaskInputProps) => {
  const defaultTast = { name: '', category: 'Study', details: '', completed: false, }
  const [newTask, setNewTask] = useState<Task>(defaultTast as Task)

  const handleAddNewTask = () => {
    if (newTask.name.trim() !== '') {
      addNewTask(newTask)
      setNewTask(defaultTast as Task)
    }
  }

  return <section className='taskInput'>
    <div>
      <div className="part">
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
        <button
        className='tIBtn'
        onClick={showTaskInput}>Cancel</button>
      </div>
    </div>
  </section>
}

export default TaskInput