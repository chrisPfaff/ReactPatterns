import React, { useState } from "react";
import "./App.css";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="enter a task"
      />
    </form>
  );
}

export default TodoForm;
