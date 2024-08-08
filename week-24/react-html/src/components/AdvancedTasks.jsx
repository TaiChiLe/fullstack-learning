import React from 'react';
import './AdvancedTasks.css';

function AdvancedTasks(props) {
  return (
    <div className="advanced-tasks">
      <div>Things to do today!</div>
      <ul>
        {props.items.map((item, index) => {
          return (
            <li key={index}>
              <input type="checkbox" checked={item.completed} />
              <span>{index + 1}</span>
              {item.content}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AdvancedTasks;
