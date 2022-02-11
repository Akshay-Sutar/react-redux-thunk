import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodoComment, removeTodo } from "../store/actions/TodoActions";

export default function TodoItem({ todo }) {
  const [showComment, setShowComment] = useState(false);
  const dispatch = useDispatch();

  const commentRef = useRef();

  const style = {
    border: "1px solid black",
    margin: "5px",
    padding: "5px",
  };

  const showCommentHandler = () => {
    setShowComment((prev) => !prev);
  };
  
  const completeHandler = () => {
    dispatch(removeTodo(todo.id));
  };

  const addCommentHandler = () => {
    const comment = commentRef.current.value;
    dispatch(addTodoComment(todo.id, comment));
    setShowComment((prev) => !prev);
  };

  useEffect(() => {
    if (showComment) {
      commentRef.current.focus();
    }
  }, [showComment]);

  return (
    <div style={style}>
      <p>{todo.title}</p>
      {todo.comments.length > 0 && (
        <div>
          <ul>
            {todo.comments.map((comment) => (
              <li>{comment}</li>
            ))}
          </ul>
        </div>
      )}
      {showComment && (
        <div>
          <textarea ref={commentRef}></textarea>
          <button onClick={addCommentHandler}>Add Comment</button>
        </div>
      )}
      <button onClick={showCommentHandler}>comment</button>
      <button onClick={completeHandler}>complete</button>
    </div>
  );
}
