import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: JSON.parse(localStorage.getItem("tareas")) || [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addNewTodo: (state, action) => {
      state.todoList.unshift(action.payload);
    },
    deleteTodo: (state, action) => {
      // console.log("reducer delete");
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },
    todoDone: (state, action) => {
      state.todoList = state.todoList.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    },
  },
});

export const { addNewTodo, deleteTodo, todoDone } = todoSlice.actions;
export const selectTodoList = (state) => state.todos.todoList;
export default todoSlice.reducer;
