import { useRef, useState } from 'react';
import './App.css';

function App() {
  const firstName = useRef(null);
  const lastName = useRef(null);
  const age = useRef(null);
  const occupation = useRef(null);
  const avatar = useRef(null);
  const [info, setInfo] = useState();

  const onClick = () => {
    setInfo({
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      age: age.current.value,
      occupation: occupation.current.value,
      avatar: avatar.current.value,
    });
  };

  return (
    <div className="container">
      {info && (
        <div className="card" data-component="profile-details">
          <h2 className="card-title">Profile details</h2>
          <div className="card-body">
            <div className="col">
              <img className="avatar" src={info.avatar} />
              <div>
                <p>
                  <span className="label">
                    Name: {info.firstName} {info.lastName}
                  </span>
                </p>
                <p>
                  <span className="label">Age: {info.age}</span>{' '}
                </p>
                <p>
                  <span className="label">Occupation: {info.occupation}</span>{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="card">
        <h2 className="card-title">Enter and Submit Your Details</h2>
        <div className="card-body">
          <div className="col">
            <div>
              <label>First name</label>
              <input
                type="text"
                className="form-input"
                placeholder="First Name"
                name="firstname"
                disabled=""
                ref={firstName}
              />
            </div>
            <div>
              <label>Last name</label>
              <input
                type="text"
                name="lastname"
                className="form-input"
                placeholder="Last Name"
                disabled=""
                ref={lastName}
              />
            </div>
          </div>
          <div className="col">
            <div>
              <label>Age</label>
              <input
                type="number"
                className="form-input"
                name="age"
                min="0"
                max="100"
                placeholder="Age"
                disabled=""
                ref={age}
              />
            </div>
            <div>
              <label>Occupation</label>
              <input
                type="text"
                name="occupation"
                className="form-input"
                placeholder="Occupation"
                disabled=""
                ref={occupation}
              />
            </div>
          </div>

          <div className="col">
            <div>
              <label>Avatar URL</label>
              <input
                type="text"
                name="avatar"
                className="form-input"
                placeholder="https://..."
                disabled=""
                ref={avatar}
              />
            </div>
          </div>

          <div>
            <button onClick={onClick} className="submit-button" disabled="">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
