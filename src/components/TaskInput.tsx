import { useState } from 'react'

type TaskInputProps = {
  addNewTask: (task: string) => void
}

const TaskInput = ({ addNewTask }: TaskInputProps) => {
  const [newTask, setNewTask] = useState('')

  const handleAddNewTask = () => {
    if (newTask.trim() !== "" ) {
      addNewTask(newTask)
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