import React, { useState } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Buy a new gaming laptop', completed: false },
    { id: 2, name: 'Complete a previous task', completed: false },
    { id: 3, name: 'Create a video for yoy tube', completed: true },
    { id: 4, name: 'Create a Portofolio site', completed: true },
  ]);

  const addTask = (name) => {
    const newTask = { id: tasks.length + 1, name, completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <TaskList tasks={tasks} addTask={addTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;