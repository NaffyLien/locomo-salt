const TaskLeft = ({ lfTask, fnsTask, clearTask }: {
  lfTask: number, fnsTask: number, clearTask: () => void
}) => {
  return <p>
    You have {lfTask} tasks left.{" "}
    {fnsTask!==0 && <a href="#" onClick={clearTask}>Clear {fnsTask} finished task?</a>}
  </p>
}

export default TaskLeft