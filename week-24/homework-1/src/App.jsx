import './App.css';

function App() {
  return (
    <div>
      <form>
        <h1>About Me</h1>
        <div>
          <label>
            Name
            <div>
              {' '}
              <input class="input input2" type="text" name="name" />
            </div>
          </label>
        </div>

        <div>
          <label>
            Age
            <div>
              {' '}
              <input class="input input2" type="number" name="age" />
            </div>
          </label>
        </div>

        <div>
          <label>
            DoB
            <div>
              {' '}
              <input class="input input2" type="date" name="dob" />
            </div>
          </label>
        </div>

        <div>
          <label>
            About me
            <div>
              {' '}
              <textarea class="input input2" name="about-me"></textarea>
            </div>
          </label>
        </div>

        <div>
          <label>Gender</label>
          <div>
            <select class="input input2" name="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <div class="">Hobbies</div>
          <div>
            <label>
              <input type="checkbox" name="hobbies" value="soccer" /> Soccer
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" name="hobbies" value="video-game" /> Video
              game
            </label>
          </div>
          <div>
            <label>
              <input
                class="input2"
                type="checkbox"
                name="hobbies"
                value="sleep"
              />{' '}
              Sleep
            </label>
          </div>
        </div>

        <div>
          Are you a code ninja?
          <label>
            <input type="radio" name="codeninja" value="yes" />
            Yes
          </label>
          <label>
            <input class="input2" type="radio" name="codeninja" value="no" />
            No
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
