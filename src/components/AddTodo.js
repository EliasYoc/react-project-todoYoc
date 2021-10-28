import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { addNewTodo } from "../features/todoSlice";
import { IoSendOutline } from "react-icons/io5";
import "./AddTodo.css";
const AddTodo = () => {
  const [inputForm, setInputForm] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInputForm(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!inputForm) return;
    const newTodo = {
      id: v4(),
      info: inputForm,
      done: false,
    };
    dispatch(addNewTodo(newTodo));
    setInputForm("");
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        className="form__todo"
        onChange={handleChange}
        type="text"
        value={inputForm}
      />
      <button className="form__add">
        <IoSendOutline />
      </button>
    </form>
  );
};

export default AddTodo;
