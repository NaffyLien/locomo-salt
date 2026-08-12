import './taskLeft.css'

const TaskLeft = ({ lfTask, fnsTask, clearTask }: {
  lfTask: number, fnsTask: number, clearTask: () => void
}) => {
  return <p className='taskLeft'>
    You have {lfTask} tasks left.{" "}
    {fnsTask!==0 && <span onClick={clearTask}>Clear {fnsTask} finished task?</span>}
  </p>
}

export default TaskLeft