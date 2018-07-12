/*
import React from 'react';
import './App.css';

import AddTodo from './components/addTodo/AddTodo';

const App = () => (
  <div>
    <h1>Todo list</h1>
    <AddTodo submitTodo={() => {}} />
  </div>
);

export default App;
*/

import React from 'react';
import { connect as reactReduxConnect } from 'react-redux';
import PropTypes from 'prop-types';
import AddTodo from './components/addTodo/AddTodo';
import TodoList from './components/todoList/TodoList';
import actions from './actions/actions';

export const App = ({ submitTodo, todos, deleteTodo }) => (
  <div>
    <h1>Todo list</h1>
    <AddTodo submitTodo={submitTodo} />
    <TodoList todos={todos} deleteTodo={deleteTodo} />
  </div>
);

App.propTypes = {
  submitTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    },
  )).isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => state.todoListApp;

const mapDispatchToProps = dispatch => ({
  submitTodo: (text) => {
    if (text) {
      dispatch(actions.submitTodo(text));
    }
  },
  deleteTodo: (id) => {
    dispatch(actions.deleteTodo(id));
  },
});

export default reactReduxConnect(mapStateToProps, mapDispatchToProps)(App);
