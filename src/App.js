import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <div className="circle-bg uno"></div>
      <div className="circle-bg dos"></div>

      <h1>To-do Yoc</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
