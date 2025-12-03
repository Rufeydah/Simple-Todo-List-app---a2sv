import { useState } from "react";
import { addTodo, deleteTodo, editTodo, toggleTodo } from "./utils/crud";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import type { Todo } from "./Todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    setTodos((prev) => addTodo(prev, text));
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => deleteTodo(prev, id));
  };

  const handleEditTodo = (id: string, text: string) => {
    setTodos((prev) => editTodo(prev, { id, text }));
  };

  const handleToggleTodo = (id: string) => {
    setTodos((prev) => toggleTodo(prev, id));
  };

  return (
    <div className="app-container">
      <h1>Todo App</h1>

      <TodoForm addTodo={handleAddTodo} />

      <TodoList
        todos={todos}
        deleteTodo={handleDeleteTodo}
        editTodo={handleEditTodo}
        toggleTodo={handleToggleTodo}
      />
    </div>
  );
}

export default App;
