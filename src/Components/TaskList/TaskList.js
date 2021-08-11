import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "../TaskItem/TaskItem";

const TaskList = () => {
  const todos = useSelector((state) => state.tasks);
  

  return (
    <div>
      {todos.map((todo) => {
        return <TaskItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default TaskList;
