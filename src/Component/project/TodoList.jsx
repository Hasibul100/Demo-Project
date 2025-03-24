import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-slate-300 m-2 p-6 shadow-xl rounded-md">
      <h2 className="text-xl font-bold mb-4">To-Do List</h2>
      <div className="flex gap-2">
        <input
          type="text"
          className="border p-2 flex-grow"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a task..."
        />
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-md"
          onClick={addTask}
        >
          Add
        </button>
      </div>
      <ul className="mt-4">
        {tasks.map((t, index) => (
          <li key={index} className="bg-gray-100 p-2 my-1 rounded">
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
