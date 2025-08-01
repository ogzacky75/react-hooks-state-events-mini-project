import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = { text, category };
    onTaskFormSubmit(newTask);
    setText("");
    setCategory("Code");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          {categories
            .filter(cat => cat !== "All")
            .map(cat => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;