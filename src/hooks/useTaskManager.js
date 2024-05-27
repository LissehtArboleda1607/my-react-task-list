import { useState } from 'react';

function useTaskManager() {
  const [tasks, setTasks] = useState([]);

  const createTask = (newTask) => {
    // Lógica para crear una nueva tarea
  };

  const deleteTask = (taskId) => {
    // Lógica para eliminar una tarea
  };

  const updateTask = (taskId, updatedTask) => {
    // Lógica para actualizar una tarea
  };

  return { tasks, createTask, deleteTask, updateTask };
}

export default useTaskManager;