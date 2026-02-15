import TodoItem from "./TodoItem";
import type { Todo } from "../types/todo";

type Props = {
  todos: Todo[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

const TodoList = ({ todos, onDelete, onToggle }: Props) => {
  if (todos.length === 0) {
    return <p className="text-muted-foreground">No tasks</p>;
  }

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default TodoList;
