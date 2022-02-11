import { TODO_ACTIONS } from "../constants/TodoActionConstants";

const initalState = {
  todos: [],
};

export const TodoReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case TODO_ACTIONS.ADD_TODO:
      return { ...state, todos: payload };
    case TODO_ACTIONS.ADD_TODO_COMMENT:
      const todos = [...state.todos];
      const { id, comment } = payload;
      const todo = todos.find((item) => item.id === id);
      todo.comments.push(comment);
      return { ...state, todos: todos };

    case TODO_ACTIONS.REMOVE_TODO:
      const updatedTodos = [...state.todos].filter(
        (todo) => todo.id !== payload
      );
      return { ...state, todos: updatedTodos };
    default:
      return state;
  }
};
