import { combineReducers, createStore } from 'redux';
import todoListApp from './reducers/reducers';

const reducers = combineReducers({
  todoListApp,
});

export default createStore(reducers);
