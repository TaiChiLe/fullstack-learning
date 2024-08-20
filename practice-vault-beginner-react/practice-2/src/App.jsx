function App() {
  let onBtnClick = () => {
    let input = document.querySelector('input');
    input.value = 'A button is clicked';
  };
  return (
    <div className="container d-flex justify-content-center mt-4 w-50">
      <input type="text" className="form-control form-control-sm me-2"></input>
      <button onClick={onBtnClick} className="btn btn-primary w-75">
        Click meto change the input value
      </button>
    </div>
  );
}

export default App;
