export type Task = {
  name: string,
  dueDate?: string,
  category: "Work" | "Study" | "Personal" | "Shopping" | "Other"
  details: string
  completed: boolean,
}