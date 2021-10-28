import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, todoDone } from "../features/todoSlice";
import "./TodoItem.css";
import { FiTrash } from "react-icons/fi";
import { MdOutlineDone } from "react-icons/md";
const TodoItem = ({ id, info, done }) => {
  const dispatch = useDispatch();
  const hideArticle = useRef();
  const hideWrapper = useRef();
  let timeoutLeft;
  const hideArticleLeft = (e) => {
    hideArticle.current.classList.add("hide");
    timeoutLeft = setTimeout(() => hideWrapperTodoTop(), 200);
  };
  const hideWrapperTodoTop = () => {
    hideWrapper.current.classList.add("hide-top");
  };
  let timeoutDelete;
  const handleDeleteTodo = () => {
    // console.log("handle delete");
    timeoutDelete = setTimeout(() => dispatch(deleteTodo(id)), 500);
  };
  const handleDone = () => {
    dispatch(todoDone(id));
  };
  useEffect(() => {
    return () => {
      clearTimeout(timeoutDelete);
      clearTimeout(timeoutLeft);
    };
  }, [timeoutDelete, timeoutLeft]);
  return (
    <div
      ref={hideWrapper}
      onTransitionEnd={handleDeleteTodo}
      className="wrapper-todo"
    >
      <article
        onTransitionEnd={(e) => e.stopPropagation()}
        ref={hideArticle}
        className={`item${done ? " done" : ""}`}
      >
        <p>{info || "[vacío]"}</p>
        <div className="item__btns">
          <button onClick={handleDone} className="item__done">
            <MdOutlineDone />
          </button>
          <button onClick={hideArticleLeft} className="item__delete">
            <FiTrash />
          </button>
        </div>
      </article>
    </div>
  );
};

export default TodoItem;
