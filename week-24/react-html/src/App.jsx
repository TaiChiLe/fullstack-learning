import React from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Task';
import AdvancedTasks from './components/AdvancedTasks';

function App() {
  const items = [
    { content: 'Go for a walk', completed: false },
    { content: 'Have a good 1hour nap', completed: true },
    { content: 'Game whole night', completed: true },
  ];

  return (
    <div className="container">
      <Header title="tasks of the day" />
      <div>
        <Tasks>
          <ul>
            <li>Had a good diet meal</li>
            <li>Completed today coding class</li>
          </ul>
        </Tasks>

        <div>
          <Tasks>Damn I have not done anything</Tasks>
        </div>

        <div>
          <AdvancedTasks items={items} />
        </div>
      </div>
    </div>
  );
}

export default App;
