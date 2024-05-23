import React from 'react';

const Task = ({ name, completed }) => {
  return (
    <div>
      <input type="checkbox" checked={completed} readOnly />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {name}
      </span>
    </div>
  );
};

export default Task;