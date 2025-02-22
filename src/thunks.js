import axios from 'axios';
import {
  loadingStarted,
  loadingCompleted,
  loadingFailed,
} from './loadingSlice';
import {
  todosUpdated,
} from './todosSlice';

export const loadTodos = () => async (dispatch) => {
  const backendHostname = import.meta.env.VITE_BACKEND_HOSTNAME;
  dispatch(loadingStarted());
  try {
    const response = await axios.get(`${backendHostname}/api/todos`);
    const todos = response.data;
    console.log(todos);
    dispatch(loadingCompleted(todos));
  } catch (e) {
    loadingFailed(e);
  }
}

export const createTodo = (newTodoText) => async (dispatch, getState) => {
  try {
    const backendHostname = import.meta.env.VITE_BACKEND_HOSTNAME;
    const response = await axios.post(`${backendHostname}/api/todos`, { text: newTodoText });
    const newTodo = response.data;
    const updatedTodos = getState().todos.value.concat(newTodo);
    dispatch(todosUpdated(updatedTodos));
  } catch (e) {
    console.log(e);
  }
}

export const deleteTodo = (todoId) => async (dispatch, getState) => {
  try {
    const backendHostname = import.meta.env.VITE_BACKEND_HOSTNAME;
    await axios.delete(`${backendHostname}/api/todos/` + todoId);
    const updatedTodos = getState().todos.value.filter(t => t.id !== todoId);
    dispatch(todosUpdated(updatedTodos));
  } catch (e) {
    console.log(e);
  }
}

export const markTodoAsCompleted = (todoId) => async (dispatch, getState) => {
  try {
    const backendHostname = import.meta.env.VITE_BACKEND_HOSTNAME;
    const response = await axios.put(`${backendHostname}/api/todos/` + todoId, { isCompleted: true });
    const updatedTodo = response.data;
    const updatedTodos = getState().todos.value.map(t => t.id === todoId ? updatedTodo : t);
    dispatch(todosUpdated(updatedTodos));
  } catch (e) {
    console.log(e);
  }
}