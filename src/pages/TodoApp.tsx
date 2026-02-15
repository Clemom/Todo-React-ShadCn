import { useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { useTodos } from "../hooks/useTodos";
import { Button } from "../components/ui/button";
import useTheme from "../hooks/useTheme";
import { Priority } from "../enums/priorities";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useNavigate } from "react-router-dom";

const TodoApp = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [priority, setPriority] = useState<Priority>(Priority.Medium);
  const { todos, addTodo, deleteTodo, toggleTodo, filter, setFilter } = useTodos();
  const { theme, toggleTheme } = useTheme();

  const handleInputChange = (value: string) => {
    setInput(value);
  };

  const handlePriorityChange = (value: Priority) => {
    setPriority(value);
  };

  const handleAdd = () => {
    if (!input.trim()) return;

    addTodo(input, priority);
    setInput("");
    setPriority(Priority.Medium);
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-10">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex gap-3 justify-between items-center">
          <Button variant="outline" onClick={() => navigate("/")}>
            ← Retour
          </Button>

          <div className="flex gap-3">
            <Button variant="outline" onClick={toggleTheme}>
              {theme === "dark" ? "Light Theme" : "Dark Theme"}
            </Button>
            
            <Select value={filter} onValueChange={(value) => setFilter(value as Priority | "All")}>
              <SelectTrigger className="w-[120px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value={Priority.High}>High</SelectItem>
                <SelectItem value={Priority.Medium}>Medium</SelectItem>
                <SelectItem value={Priority.Low}>Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TodoForm
          input={input}
          priority={priority}
          onInputChange={handleInputChange}
          onPriorityChange={handlePriorityChange}
          onAdd={handleAdd}
        />

        <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
      </div>
    </div>
  );
};

export default TodoApp;
