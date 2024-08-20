import DisplayName from './components/DisplayName';
import { useState } from 'react';

function App() {
  let [render, setRender] = useState(false);
  let [firstName, setFirstName] = useState();
  let [lastName, setLastName] = useState();
  let onBtnClick = () => {
    setRender(true);
    setFirstName(document.querySelector('.first-name').value);
    setLastName(document.querySelector('.last-name').value);
  };

  return (
    <div className="container d-flex w-75 flex-column border rounded-2 mt-4 pb-4 pt-4 shadow-sm">
      <div>
        <h2>Enter Your Names</h2>
      </div>
      <div className="d-flex flex-row gap-1">
        <input
          className="form-control w-25 first-name"
          type="text"
          placeholder="First Name"
        />
        <input
          className="form-control w-25 last-name"
          type="text"
          placeholder="Last Name"
        />
        <button onClick={onBtnClick} className="btn btn-primary">
          Show Full Name
        </button>
      </div>
      {render && <DisplayName firstName={firstName} lastName={lastName} />}
    </div>
  );
}

export default App;
