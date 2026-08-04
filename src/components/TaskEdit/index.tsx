import { useState } from 'react'
import type { Task } from '../../type'
import './taskEdit.css'

type TaskEditProps = {
  idx: number,
  modifTask: Task,
  editTask: (index:number, task: Task) => void,
  clearTasks: () => void
}

const TaskEdit = ({idx, modifTask, editTask, clearTasks }: TaskEditProps) => {
  const [newTask, setNewTask] = useState<Task>(modifTask)

  const handleEditTask = () => {
    if (newTask.name.trim() !== '') {
      editTask(idx, newTask)
      setNewTask({
        name: '',
        completed: false,
        category: "Study"
      })
      clearTasks()
    }
  }

  return <section className='taskEdit'>
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
      onClick={handleEditTask}>Edit task</button>
    <button type='reset' onClick={clearTasks}>Cancel</button>
  </section>
}

export default TaskEdit