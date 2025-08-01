import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleTaskFormSubmit(newTask) {
    const id = crypto.randomUUID();
    setTasks([...tasks, { ...newTask, id }]);
  }

  function handleDeleteTask(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  
  const visibleTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryClick={setSelectedCategory}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={visibleTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;