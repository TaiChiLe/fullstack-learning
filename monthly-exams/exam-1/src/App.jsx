import { useState } from 'react';
import './App.css';

function App() {
  const colours = ['red', 'green', 'blue', 'purple', 'orange', 'black'];
  const [backgrounColor, setBackgroundColor] = useState();

  const onColourClick = (e) => {
    setBackgroundColor(e.target.innerHTML);
  };
  return (
    <div className={'container ' + backgrounColor}>
      {colours.map((item, index) => (
        <span onClick={onColourClick} className={'btn ' + item} key={index}>
          {item}
        </span>
      ))}

      {backgrounColor && (
        <div className="footer-text">Current color is: "{backgrounColor}"</div>
      )}
    </div>
  );
}

export default App;
