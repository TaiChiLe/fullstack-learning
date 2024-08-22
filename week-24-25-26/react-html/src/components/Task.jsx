import React from 'react';
import './Tasks.css';

function Tasks(props) {
  return (
    <div className="tasks">
      <div>Great tasks we have accomplished today!</div>

      <div className="tasks-body">{props.children}</div>
    </div>
  );
}

export default Tasks;
