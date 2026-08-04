import './App.css'
import { useEffect, useState } from 'react'
import TaskInput from './components/TaskInput'
import TaskLeft from './components/TaskLeft'
import TaskList from './components/TaskList'

const App = () => {
  const maxTasks = 10

  const [tasks, setTasks] = useState<{ name: string, completed: boolean }[]>(() => {
    const saved = localStorage.getItem("tasks")
    if (saved) return JSON.parse(saved)
    return [{ name: "Learn React", completed: false }]
  })

  const fnsTasks = (tasks.filter((task) => (
    task.completed
  ))).length

  const taskLeft = maxTasks - tasks.length

  const handleAddNewTask = (newTask: { name: string, completed: boolean }) => {
    if (tasks.length < maxTasks) {
      setTasks([...tasks, { name: newTask.name, completed: newTask.completed }])
    }
  }

  const handleDeleteTask = (indexToDelete: number) => {
    setTasks(tasks.filter((_, idx) => (
      idx !== indexToDelete
    )))
  }

  const handleClearTasks = () => {
    setTasks(tasks.filter((task) => (
      !task.completed
    )))
  }

  const handleFinishTask = (indexToFinish: number) => {
    setTasks(tasks.map((task, idx) => (
      (idx == indexToFinish)
        ? { name: task.name, completed: !task.completed }
        : task
    )))
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  return <div>
    <h1>My Task Master</h1>
    <TaskInput
      addNewTask={handleAddNewTask}
    />
    <button type='reset' onClick={handleClearTasks}>Clear</button>
    <TaskList
      tasks={tasks}
      deleteTask={handleDeleteTask}
      finishTask={handleFinishTask}
    />
    <TaskLeft
      lfTask={taskLeft}
      fnsTask={fnsTasks}
    />
  </div>
}

export default App
