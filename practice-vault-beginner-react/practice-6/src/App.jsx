import { useState } from 'react';
import './App.css';

function App() {
  let colours = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
  ];

  const [colour, setColour] = useState('red');
  const [prevColor, setPrevColor] = useState('violet');

  const getNextColours = () => {
    setPrevColor(colour);
    const index = colours.indexOf(colour);
    if (index >= colours.length - 1) {
      setColour('red');
    } else {
      setColour(colours[index + 1]);
    }
  };

  return (
    <div className={prevColor}>
      <div className="container">
        <div className="button" onClick={getNextColours}>
          To <span className={colour}> {colour} </span>
        </div>
      </div>
    </div>
  );
}

export default App;
