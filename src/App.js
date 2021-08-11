// import { Provider } from "react-redux";

import "./App.css";
import AddTask from './Components/AddTask/AddTask'
import FilterTask from "./Components/FilterTask/FilterTask";
import TaskList from './Components/TaskList/TaskList'

function App() {
  return (
      <div className="app">
        <AddTask />
        <FilterTask/>
        <TaskList />
      </div>
    
  );
}

export default App;
