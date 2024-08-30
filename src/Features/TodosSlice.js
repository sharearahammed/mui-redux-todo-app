// src/features/todosSlice.js
import { createSlice } from '@reduxjs/toolkit';

const TodosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ text: action.payload, completed: false });
    },
    toggleComplete: (state, action) => {
      const todo = state[action.payload];
      todo.completed = !todo.completed;
    },
    removeTodo: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },
  },
});

export const { addTodo, toggleComplete, removeTodo } = TodosSlice.actions;
export default TodosSlice.reducer;
