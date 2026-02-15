import { Trash } from "lucide-react";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import type { Todo } from "../types/todo";

type Props = {
  todo: Todo;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

const TodoItem = ({ todo, onDelete, onToggle }: Props) => {
  return (
    <div className="flex justify-between items-center p-4 border rounded-lg">
      <div className="flex items-center gap-3">
        <Checkbox 
          checked={todo.completed}
          onCheckedChange={() => onToggle(todo.id)}
        />
        <span className={`font-medium ${todo.completed ? "line-through text-muted-foreground" : ""}`}>
          {todo.content}
        </span>

        <Badge variant="secondary">{todo.priority}</Badge>
      </div>

      <Button variant="ghost" size="icon" onClick={() => onDelete(todo.id)}>
        <Trash className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default TodoItem;
