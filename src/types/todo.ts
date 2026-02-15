import { Priority } from "../enums/priorities";

type Todo = {
  id: number
  content: string
  priority: Priority
  completed: boolean
}

export type { Todo };