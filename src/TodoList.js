import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          className="w-64 p-2 border border-gray-300 rounded"
          placeholder="Add a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="ml-2 p-2 bg-blue-500 text-white rounded"
          onClick={addTask}
        >
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            {task}
            <button
              className="p-2 bg-red-500 text-white rounded"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
