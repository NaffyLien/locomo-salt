import './App.css'
import { useState } from 'react'
import TaskInput from './components/TaskInput'
import TaskLeft from './components/TaskLeft'
import TaskList from './components/TaskList'

const App = () => {
  const maxTasks = 10
  const dfTasks = [
    {name : "Learn React", completed: false},
    {name : "Build Project", completed: false},
    {name : "Go for a walk", completed: false},
  ]
  const [tasks, setTasks] = useState(dfTasks)
  const fnsTasks= (tasks.filter((task) => (
      task.completed == true
    ))).length
    
  const taskLeft = maxTasks - tasks.length

  const handleAddNewTask = (newTask: {name: string, completed: boolean}) => {
    if(tasks.length < maxTasks){
      setTasks([...tasks, {name:newTask.name, completed: newTask.completed}])
    }
  }

  const handleDeleteTask = (indexToDelete:number) => {
    setTasks(tasks.filter((_, idx) => (
      idx !== indexToDelete
    )))
  }

  const handleClearTasks = () =>{
    setTasks(tasks.filter((task)=>(
      task.completed == false
    )))
  }

  const handleFinishTask = (indexToFinish:number) => {
    setTasks(tasks.map((task, idx)=>(
      task = (idx==indexToFinish)? {name: task.name, completed: !task.completed} : task
    )))
  }

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
