import TaskCard from '../TaskCard'
import './taskList.css'
import type { TaskListProps } from '../../type'

const TaskList = (props: TaskListProps) => {

  return <section className='taskList'>
    <div className="listTitle">
      <h2 className=''>Task lists</h2>
      {props.fnsTask!==0 && <span onClick={props.clearTask}>Clear {props.fnsTask} finished task?</span>}
    </div>
    <div className='list'>
      {props.tasks.map((task, index) => (
        <TaskCard
          key={index}
          idx={index}
          task={task}
          deleteTask={props.deleteTask}
          finishTask={props.finishTask}
          editTask={props.editTask}
          onEditTask={props.onEditTask}
        />
      ))}
    </div>

  </section>
}

export default TaskList
