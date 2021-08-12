import { DELETE_TASK } from "./Type";
import { ADD_TASK } from "./Type";
import { EDIT_TASK } from "./Type";
import { COMPLETE_TASK } from "./Type";


const insitialTask = {
  tasks: [
    {
      name: "lern redux",
      isDone: true,
      id: Math.random(),
    },
    {
      name: "lern Route",
      isDone: false,
      id: Math.random(),
    },
    {
      name: "lern Hooks",
      isDone: true,
      id: Math.random(),
    },
  ],
};

const taskReducer = (state = insitialTask, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payLoad],
      };
      

    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === action.payLoad.id ? { ...el, name: action.payLoad.newValue } : el
        ),
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((el) => el.id !== action.payLoad),
      };
    case COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === action.payLoad ? { ...el, isDone: !el.isDone } : el
        ),
      };
    default:
      return state;
  }
};

export default taskReducer;
