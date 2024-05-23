import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

const Task = ({ task, deleteTask }) => {
  const handleEdit = (id) => {
    // Aquí puedes implementar la lógica para editar la tarea con el id dado
    console.log(`Edit task with id ${id}`);
  };

  return (
    <div className="task-item">
      <div className="task-checkbox">
        <input type="checkbox" checked={task.completed} readOnly />
      </div>
      <div className="task-name" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.name}
      </div>
      <div className="task-actions">
        <FontAwesomeIcon icon={faEdit} onClick={() => handleEdit(task.id)} />
        <FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteTask(task.id)} />
      </div>
    </div>
  );
};

export default Task;