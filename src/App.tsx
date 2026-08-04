import './App.css'
import { useState } from 'react'
import TaskInput from './components/TaskInput'
import TaskLeft from './components/TaskLeft'
import TaskList from './components/TaskList'

const App = () => {
  const maxTasks = 9

  const [tasks, setTasks] = useState(["Learn React", "Build Project", "Go for a walk"])

  const taskLeft = maxTasks - tasks.length

  const handleAddNewTask = (newTask:string) => {
    if(tasks.length < maxTasks){
      setTasks([...tasks, newTask])
    }
  }

  const handleDeleteTask = (indexToDelete:number) => {
    setTasks(tasks.filter((_, idx) => (
      idx !== indexToDelete
    )))
  }

  return <div>
    <h1>My Task Master</h1>
    <TaskInput
      addNewTask={handleAddNewTask}
    />

    <TaskList
      tasks={tasks}
      deleteTask={handleDeleteTask}
    />

    <TaskLeft
      lfTask={taskLeft}
    />
  </div>
}

export default App
