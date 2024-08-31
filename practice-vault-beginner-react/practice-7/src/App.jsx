import { useState } from 'react';
import './App.css';
import ShowData from './components/ShowData';

function App() {
  let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    occupation: 'Software engineer',
  };

  let [showData, setShowData] = useState(false);

  const onShowDetailsClick = () => {
    setShowData(!showData);
  };

  return (
    <div className="container d-flex flex-column justify-content-center w-75 h-75 border rounded mt-5 p-0">
      <div className="content border-bottom pt-2 pb-2 ps-2">Person Details</div>
      <div className="content d-flex w-50 h-50 pt-2 pb-2 ps-2">
        {showData ? <ShowData person={person} /> : `Hidden Content`}
      </div>
      <div className="d-flex flex-row-reverse border-top pt-2 pb-2">
        <button
          onClick={onShowDetailsClick}
          className="btn btn-outline-primary"
        >
          {showData ? `hide` : `show`} details
        </button>
      </div>
    </div>
  );
}

export default App;
