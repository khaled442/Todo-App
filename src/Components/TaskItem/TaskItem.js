import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Complete, deletTask, editTask } from "../../Redux/Todo/Action";
import "./TaskItem.css";

const TaskItem = ({ todo }) => {
  const [edit, setEdit] = useState(false);
  const [nameTodo, setNameTodo] = useState(todo.name);
  const dispatch = useDispatch();
  const editTodo = () => {
    dispatch(editTask(todo.id, nameTodo));
  };
  const deletTodo = () => {
    dispatch(deletTask(todo.id));
  };
  return (
    <div className="task">
      {edit ? (
        <input
          style={{ color: "black", fontSize: "20px" }}
          placeholder="Update Todo..."
          type="text"
          onChange={(e) => setNameTodo(e.target.value)}
          value={nameTodo}
        />
      ) : (
        <h4 className={todo.isDone ? "done" : null}>{todo.name}</h4>
      )}
      <button
        onClick={() => {
          setNameTodo(todo.name);
          editTodo();
          setEdit(!edit);
        }}
      >
        {edit ? "Update" : "Edit"}
      </button>
      <button onClick={() => dispatch(Complete(todo.id))}>
        {todo.isDone ? "Undo" : "Complete"}
      </button>
      <button onClick={deletTodo}>Delete</button>
    </div>
  );
};

export default TaskItem;
