import type { TaskProps } from '../../type'
import './oneTask.css'
import edit from '../../assets/edit-4-svgrepo-com.svg'
import del from '../../assets/delete-note-svgrepo-com.svg'
import check from '../../assets/checkbox-unchecked-svgrepo-com.svg'
import { TaskType } from '../../utils'

const OneTask = (props: TaskProps) => {
  return <div className={`oneTask ${TaskType(props.task)}`}>
    <div className='toogle'>
      <input
        type="checkbox"
        checked={props.task.completed}
        id={`task-${props.idx}`}
        onChange={() => props.finishTask(props.idx)}
      />
      <label
        htmlFor={`task-${props.idx}`}
        className={props.task.completed ? 'taskFinish true' : 'taskFinish false'}
      >
        {/* // onDoubleClick={() => setEdit(props.idx)} */}
        <img className='icon' src={check} alt='Delete task' />
      </label>

      <button aria-label='Edit task' onClick={() => props.deleteTask(props.idx)}>
        <img className='icon' src={edit} alt='Edit task' />
      </button>

      <button onClick={() => props.deleteTask(props.idx)} >
        <img className='icon' src={del} alt='Delete task' />
      </button>
    </div>
    <div className='details'>
      <h3>{props.task.name}</h3>
      <div>
        <span>{props.task.dueDate ? props.task.dueDate + " | " : null}</span>
        <span>{props.task.category}</span>
      </div>
      {props.task.details !== '' && <p>{props.task.details}</p>}
    </div>


    {/* {edit == props.key && <TaskEdit
      idx={props.key}
      modifTask={props.task}
      editTask={editTask}
      clearTasks={() => setEdit(null)}
    />} */}
  </div>
}

export default OneTask