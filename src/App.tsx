import './App.css'
import {useState} from 'react'

function App() {
  const [tasks, setTasks] = useState(["Learn React", "Build Project", "Go for a walk"])
  return <div>
      <h1>My Task Master</h1>
      {
        <ul>
          {tasks.map((task, index)=>(
            <li key={index}>{task}</li>
          ))}
        </ul>
      }
    </div>
}

export default App
