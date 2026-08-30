import type { Task } from "./type"

export  const TaskType = (task: Task) => {
    return (task.category || 'Other').toLowerCase()
  }