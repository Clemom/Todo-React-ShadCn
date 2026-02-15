import { useEffect, useState } from "react";
import type { Todo } from "../types/todo"
import { Priority } from "../enums/priorities"

const isValidTodo = (todo: unknown): todo is Todo => {
  if (typeof todo !== "object" || todo === null) return false;
  const t = todo as Record<string, unknown>;
  return (
    typeof t.id === "number" &&
    typeof t.content === "string" &&
    typeof t.priority === "string" &&
    typeof t.completed === "boolean"
  );
};

export const useTodos = () => {
  const loadTodos = (): Todo[] => {
    try {
      const saved = localStorage.getItem("todos");
      if (!saved) return [];
      const parsed = JSON.parse(saved);
      if (!Array.isArray(parsed)) return [];
      return parsed.filter(isValidTodo);
    } catch (error) {
      console.error("Error loading todos from localStorage:", error);
      return [];
    }
  };

  const [todos, setTodos] = useState<Todo[]>(loadTodos());
  const [filter, setFilter] = useState<Priority | "All">("All");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (content: string, priority: Priority) => {
    if (!content.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      content: content.trim(),
      priority,
      completed: false,
    };

    setTodos((prev) => [newTodo, ...prev]);
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos =
    filter === "All" ? todos : todos.filter((todo) => todo.priority === filter);

  return {
    todos: filteredTodos,
    addTodo,
    deleteTodo,
    toggleTodo,
    filter,
    setFilter,
  };
};
