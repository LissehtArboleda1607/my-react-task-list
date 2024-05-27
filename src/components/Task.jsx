import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit, faSave } from '@fortawesome/free-solid-svg-icons';

const Task = ({ task, deleteTask, editTask }) => {
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(task.title);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    editTask(task.id, newName);
    setEditing(false);
  };

  const handleCancel = () => {
    setNewName(task.title);
    setEditing(false);
  };

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  return (
    <div className="task-item">
      <div className="task-checkbox">
        <input type="checkbox" checked={task.completed} readOnly />
      </div>
      <div className="task-details">
        {editing ? (
          <>
            <input type="text" value={newName} onChange={handleChange} />
            <div className="task-actions">
              <FontAwesomeIcon icon={faSave} onClick={handleSave} />
              <FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteTask(task.id)} />
              <FontAwesomeIcon icon={faEdit} onClick={handleCancel} />
            </div>
          </>
        ) : (
          <>
            <div className={`task-name ${task.completed ? 'completed' : ''}`}>
              {task.title}
            </div>
            <div className="task-actions">
              <FontAwesomeIcon icon={faEdit} onClick={handleEdit} />
              <FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteTask(task.id)} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Task;