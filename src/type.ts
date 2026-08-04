export type Task = {
  name: string,
  completed: boolean,
  dueDate?: string,
  category: "Work" | "Study" | "Personal" | "Shopping" | "Other"
}