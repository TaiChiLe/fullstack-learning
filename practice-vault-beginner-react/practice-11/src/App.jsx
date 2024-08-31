import { useState } from 'react';
import './App.css';

function App() {
  const [names, setNames] = useState([]);
  const onClick = () => {
    setNames(['Alice', 'Bob', 'Charlie', 'Diana', 'Edward']);
  };
  return (
    <>
      <div className="container shadow">
        <h2>List of Names</h2>
        <button className="button" onClick={onClick}>
          Print Names
        </button>
      </div>
      <ul className="list">
        {names.map((name, index) => (
          <li className="list-item shadow" key={index}>
            {name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
