import type { Todo } from "./Todo";

export function addTodo(todos: Todo[], text: string): Todo[] {
  return [
    ...todos,
    {
      id: crypto.randomUUID(),
      text,
      completed: false,
    },
  ];
}

export function deleteTodo(todos: Todo[], id: string): Todo[] {
  return todos.filter((todo) => String(todo.id) !== id);
}

export function editTodo(
  todos: Todo[],
  payload: { id: string; text: string }
): Todo[] {
  return todos.map((todo) =>
    String(todo.id) === payload.id ? { ...todo, text: payload.text } : todo
  );
}

export function toggleTodo(todos: Todo[], id: string): Todo[] {
  return todos.map((todo) =>
    String(todo.id) === id ? { ...todo, completed: !todo.completed } : todo
  );
}
