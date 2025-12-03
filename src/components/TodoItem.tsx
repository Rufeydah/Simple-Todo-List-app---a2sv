import React, { useState } from "react";
import type { Todo } from "./Todo";

interface TodoItemProps {
  todo: Todo;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, newText: string) => void;
  toggleTodo: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  deleteTodo,
  editTodo,
  toggleTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && newText.trim()) editTodo(todo.id, newText);
    setIsEditing(!isEditing);
  };

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      {isEditing ? (
        <input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="edit-input"
        />
      ) : (
        <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
      )}
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
      {!isEditing && (
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      )}
    </li>
  );
};

export default TodoItem;
