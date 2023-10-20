import React from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <TodoList />
    </div>
  );
}

export default App;
