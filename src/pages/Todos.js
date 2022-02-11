import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import TodoList from "../components/TodoList";
import { fetchTodos } from "../store/actions/TodoActions";

export default function Todos() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      <TodoList />
    </div>
  );
}
