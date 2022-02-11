import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useSelector((state) => state.todo.todos);
  const paginatedTodos = todos.slice(0, 5);
  return (
    <div>
      {paginatedTodos.length > 0 &&
        paginatedTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  );
}
