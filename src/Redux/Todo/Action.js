import {EDIT_TASK, FILTER_TASK} from './Type'
import {ADD_TASK} from './Type'
import {DELETE_TASK} from './Type'
import {COMPLETE_TASK} from './Type'



export const deletTask = (id) => {
    return{
        type: DELETE_TASK,
        payLoad: id
    }
}

export const addTask = (newTask) => {
    return{
        type: ADD_TASK,
        payLoad: newTask
    }
}

export const editTask = (id, newValue) => {
    return{
        type: EDIT_TASK,
        payLoad: {id,newValue}
    }
}

export const Complete = (id) => {
    return {
        type: COMPLETE_TASK,
        payLoad: id
    }
}

export const FilterTasks = (id, isDone) => {
    return{
        type: FILTER_TASK,
        payLoad: {id, isDone}
    }
}


