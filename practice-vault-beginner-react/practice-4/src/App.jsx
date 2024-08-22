import { useState } from 'react';
import Capitalised from './components/Capitalised';

function App() {
  let [display, setDisplay] = useState(false);
  let [text, setText] = useState();

  let onBtnClick = () => {
    setDisplay(true);
    setText(document.querySelector('input').value);
  };

  return (
    <div className="container d-flex w-50 flex-column border rounded-2 mt-4 pb-4 pt-4 shadow-sm">
      <h4 className="mb-4">Convert Text to Uppercase</h4>
      <input
        className="form-control mb-4"
        type="text"
        placeholder="Enter text here"
      />
      <button onClick={onBtnClick} className="btn btn-primary">
        Convert to uppercase
      </button>
      {display && <Capitalised text={text} />}
    </div>
  );
}

export default App;
