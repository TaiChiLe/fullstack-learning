import { useState } from 'react';
import classNames from 'classnames';
import './App.css';

function App() {
  const [state, setState] = useState({
    colorChanged: false,
    sizeChanged: false,
    display: false,
  });

  const boxClassName = classNames(
    {
      red: state.colorChanged,
      larger: state.sizeChanged,
      display: state.display,
    },
    'box'
  );

  const onBackgroundChange = () => {
    setState({ ...state, colorChanged: !state.colorChanged });
  };

  const onSizeChange = () => {
    setState({ ...state, sizeChanged: !state.sizeChanged });
  };

  const onDisplayChange = () => {
    setState({ ...state, display: !state.display });
  };

  return (
    <div>
      <div className="container d-flex flex-row justify-content-center mt-4 pb-4 pt-4 gap-4">
        <button
          onClick={onBackgroundChange}
          className="btn btn-outline-primary"
        >
          Change the box background to
          {state.colorChanged ? ' default colour' : ' red'}
        </button>
        <button onClick={onSizeChange} className="btn btn-outline-warning">
          Make the box {state.sizeChanged ? ' normal' : ' bigger'}
        </button>
        <button onClick={onDisplayChange} className="btn btn-outline-danger">
          {state.display ? 'Show' : 'Hide'} the box
        </button>
      </div>
      <div className="d-flex justify-content-center">
        <div className={boxClassName}></div>
      </div>
    </div>
  );
}

export default App;
