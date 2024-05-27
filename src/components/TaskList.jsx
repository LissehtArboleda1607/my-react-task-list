import React, { useState } from 'react';
import Task from './Task';

const TaskList = ({ tasks, deleteTask, editTask, addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      addTask(taskName, taskDescription);
      setTaskName('');
      setTaskDescription('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Add task title"
        />
        <input
          type="text"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="Add task description"
        />
        <button type="submit">Add Task</button>
      </form>
      {tasks.map((task) => (
        <div key={task.id} className="task-item">
          <Task
            task={task}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        </div>
      ))}
    </div>
  );
};

export default TaskList;