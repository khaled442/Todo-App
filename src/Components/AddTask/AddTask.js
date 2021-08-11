import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../Redux/Todo/Action";


const AddTask = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const add = () => {
    dispatch(addTask({ id: Math.random, name: name, isDone: false }));
    setName("")
  };
  return (
    <div className="add">
        <h4>Todo App</h4>
      <input
        type="text"
        placeholder="Add Todo..."
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button onClick={add}>Add</button>
    </div>
  );
};

export default AddTask;
