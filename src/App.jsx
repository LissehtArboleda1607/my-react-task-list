import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import useTaskManager from './hooks/useTaskManager'; // Importamos nuestro hook personalizado

const App = () => {
  // Usamos nuestro hook personalizado para manejar las tareas
  const { tasks, addTask, deleteTask, toggleTask, editTask } = useTaskManager();

  return (
    <div className="container">
      <Header />
      <TaskList 
        tasks={tasks} 
        toggleTask={toggleTask} 
        deleteTask={deleteTask} 
        addTask={addTask} 
        editTask={editTask} 
      />
    </div>
  );
};

export default App;