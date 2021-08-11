import {createStore} from 'redux'
import taskReducer from './Todo/Reducer'

const devtool= window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(taskReducer,devtool)

export default store;