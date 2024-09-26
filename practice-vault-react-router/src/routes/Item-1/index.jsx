import React from 'react';
import './Item-1.css';

function Item1() {
  const onClick = () => {
    alert('Button clicked');
  };

  return (
    <div className="container">
      <button className="button" onClick={onClick}>
        Click me to open an alert
      </button>
    </div>
  );
}

export default Item1;
