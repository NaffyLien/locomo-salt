export type Task = {
  name: string,
  dueDate?: string,
  category: "Work" | "Study" | "Personal" | "Shopping" | "Other",
  details?: string,
  completed: boolean,
}

export type TaskListProps = {
  tasks: Task[],
  deleteTask: (index: number) => void,
  finishTask: (index: number) => void,
  editTask: (index: number, task: Task) => void,
}

export type TaskProps = {
  idx: number,
  task: Task,
  deleteTask: (index: number) => void,
  finishTask: (index: number) => void,
  editTask: (index: number, task: Task) => void,
}