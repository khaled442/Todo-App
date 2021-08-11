import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilterTasks } from "../../Redux/Todo/Action";

const FilterTask = () => {
    const [name, setName] = useState("")
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch()
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter Todo..."
        onChange={(e) => setName(e.target.value) }
        value={name}
      />
      <button onClick={() => dispatch(FilterTasks(filter))}>Filter</button>
    </div>
  );
};

export default FilterTask;
