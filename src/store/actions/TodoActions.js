import axios from "axios";
import { TODO_ACTIONS } from "../constants/TodoActionConstants";
export const fetchTodos = () => {
  return async (dispatch) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
    const todos = res.data.map((item) => {
      return { id: item.id, title: item.title, comments: [] };
    });
    dispatch({ type: TODO_ACTIONS.ADD_TODO, payload: todos.slice(0, 10) });
  };
};

export const addTodoComment = (id, comment) => {
  return async (dispatch) => {
    dispatch({ type: TODO_ACTIONS.ADD_TODO_COMMENT, payload: { id, comment } });
  };
};

export const removeTodo = (id) => async (dispatch) => {
  dispatch({ type: TODO_ACTIONS.REMOVE_TODO, payload: id });
};
