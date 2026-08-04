const TaskLeft = ({ lfTask, fnsTask }: { lfTask: number, fnsTask: number }) => {
  return <p>You have {lfTask} tasks left. ({fnsTask} completed)</p>
}

export default TaskLeft