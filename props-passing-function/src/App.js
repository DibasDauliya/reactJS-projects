import "./App.css";
import { Todo } from "./components/Todo";

function App() {
  return (
    <div className="container">
      <h1>My Todo List</h1>
      <Todo todo="Yooo" />
      <Todo todo="Eat" />
      <Todo todo="Eat" />
      <Todo todo="Eat" />
      <Todo todo="Eat" />
    </div>
  );
}

export default App;
