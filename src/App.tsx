import './App.css'
import { useEffect, useState } from 'react'
import TaskInput from './components/TaskInput'
import TaskLeft from './components/TaskLeft'
import TaskList from './components/TaskList'
import TaskEdit from './components/TaskEdit'
import type { Task } from './type'
import HeaderSection from './components/HeaderSection'

const App = () => {
  const maxTasks = 10
  const [newNote, setNewNote] = useState(false)
  const [editingIndex, setEditingIndex] = useState<number | null>(null)

  const handleTaskInputShow = () => {
    setNewNote(!newNote)
  }

  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks")
    if (saved) return JSON.parse(saved)
    return [{ name: "Learn React", completed: false, category:'Work' }]
  })

  const fnsTasks = (tasks.filter((task) => (
    task.completed
  ))).length

  const taskLeft = maxTasks - tasks.length

  const handleAddNewTask = (newTask: Task) => {
    if (tasks.length < maxTasks) {
      setTasks([...tasks, newTask])
    }
  }

  const handleEditTask = (indexTask: number, taskEdit: Task) => {
    setTasks(tasks.map((task, index) => (
      indexTask == index ? taskEdit : task
    )))
    setEditingIndex(null)
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
        ? { ...task, completed: !task.completed }
        : task
    )))
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  return <div className='app'>
    <HeaderSection
      showTaskInput={handleTaskInputShow}
    />
    {editingIndex !== null && (
      <TaskEdit
        idx={editingIndex}
        modifTask={tasks[editingIndex]}
        editTask={handleEditTask}
        clearTasks={() => setEditingIndex(null)}
      />
    )}
    <article>
      {newNote && <TaskInput
        addNewTask={handleAddNewTask}
        showTaskInput={handleTaskInputShow}
      />}

      <TaskList
        tasks={tasks}
        deleteTask={handleDeleteTask}
        finishTask={handleFinishTask}
        editTask={handleEditTask}
        onEditTask={setEditingIndex}
      />

    </article>
    <TaskLeft
      lfTask={taskLeft}
      fnsTask={fnsTasks}
      clearTask={handleClearTasks}
    />
  </div >
}

export default App
