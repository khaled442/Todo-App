import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddTask from "../AddTask/AddTask";
import TaskItem from "../TaskItem/TaskItem";

const TaskList = () => {
  const todos = useSelector((state) => state.tasks);
  const [filter, setFilter] = useState(false);
  const handleFilter = () => setFilter(!filter);

  return (
    <div>
      <AddTask handleFilter={handleFilter} filter={filter} />
      {filter
        ? todos
            .filter((el) => el.isDone)
            .map((todo) => <TaskItem todo={todo} key={todo.id} />)
        : todos.map((todo) => <TaskItem todo={todo} key={todo.id} />)}
    </div>
  );
};

export default TaskList;
