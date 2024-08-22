import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Task';
import AdvancedTasks from './components/AdvancedTasks';
import Counter from './components/Counter';
import AnimeDropdown from './components/AnimeDropdown';
import InputBox from './components/InputBox';

function App() {
  const items = [
    { content: 'Go for a walk', completed: false },
    { content: 'Have a good 1hour nap', completed: true },
    { content: 'Game whole night', completed: true },
  ];

  const [animeRequestUrl, setAnimeRequestUrl] = useState('');
  const onTopAnimeClick = () => {
    setAnimeRequestUrl('https://api.jikan.moe/v4/top/anime');
  };
  const onSportAnimeClick = () => {
    setAnimeRequestUrl('https://api.jikan.moe/v4/anime?genres=30&page=1');
  };

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
        <div>
          <Counter />
        </div>
        <div>
          <div>
            <button onClick={onTopAnimeClick}>Load top anime</button>
            <button onClick={onSportAnimeClick}>Load sport anime</button>
          </div>
          <AnimeDropdown requestUrl={animeRequestUrl} />
        </div>
      </div>
      <div>
        <InputBox />
      </div>
    </div>
  );
}

export default App;
