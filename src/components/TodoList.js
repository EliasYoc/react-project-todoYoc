import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectTodoList } from "../features/todoSlice";
import EmptyList from "./EmptyList";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = () => {
  const todoList = useSelector(selectTodoList);
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(todoList));
  }, [todoList]);
  return (
    <div className="todoList">
      <EmptyList isEmpty={todoList.length === 0} />
      {todoList.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodoList;
