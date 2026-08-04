import './App.css'
import { useState } from 'react'

function App() {
  const maxTasks = 9
  
  const [tasks, setTasks] = useState(["Learn React", "Build Project", "Go for a walk"])
  const [newTask, setNewTask] = useState('')

  const taskLeft = maxTasks - tasks.length

  const handleAddNewTask = () => {
    if (newTask.trim() !== "" && tasks.length < maxTasks) {
      setTasks([...tasks, newTask])
      setNewTask("")
    }
  }

  function handleDeleteTask(index: number) {
    setTasks(tasks.filter((_, idx) => (
      idx !== index
    )))
  }

  return <div>
    <h1>My Task Master</h1>
    <section>
      <input
        type='text'
        placeholder='Insert next task here'
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddNewTask}>Add task</button>
    </section>

    <ul>
      {tasks.map((task, index) => (
        <div key={index}>
          <li key={index}>{task}</li>
          <button onClick={() => handleDeleteTask(index)}>Delete</button>
        </div>
      ))}
    </ul>

    <p>You have {taskLeft} tasks left</p>
  </div>
}

export default App
