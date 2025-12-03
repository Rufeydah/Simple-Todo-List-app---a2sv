import React from "react";
import TodoItem from "../components/TodoItem";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: string) => void;
  editTodo: (id: string, newText: string) => void;
  toggleTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  deleteTodo,
  editTodo,
  toggleTodo,
}) => {
  if (todos.length === 0) return <p className="no-todos">No Tasks yet! </p>;

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
