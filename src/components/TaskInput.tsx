import { useState } from 'react'

type TaskInputProps = {
  addNewTask: (task: { name: string, completed: boolean }) => void
}

const TaskInput = ({ addNewTask }: TaskInputProps) => {
  const [newTask, setNewTask] = useState('')

  const handleAddNewTask = () => {
    if (newTask.trim() !== "") {
      addNewTask({ name: newTask, completed: false })
      setNewTask("")
    }
  }

  return <section>
    <input
      type='text'
      placeholder='Insert next task here'
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
    />
    <button onClick={handleAddNewTask}>Add task</button>
  </section>
}

export default TaskInput