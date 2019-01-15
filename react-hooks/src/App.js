import React, { useState } from "react";
import "./App.css";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "React Hooks",
      isCompleted: false
    },
    {
      text: "Go Browns",
      isCompleted: false
    },
    {
      text: "Go Bucks",
      isCompleted: false
    }
  ]);
  return (
    <div className="app">
      <header className="app-header">React Hooks</header>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
}
export default App;
