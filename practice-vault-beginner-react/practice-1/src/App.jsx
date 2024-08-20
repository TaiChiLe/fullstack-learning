function App() {
  let onBtnClick = () => {
    alert('hi');
  };

  return (
    <div className="container d-flex justify-content-center">
      <button onClick={onBtnClick} className="btn btn-primary">
        Click me to open an alert
      </button>
    </div>
  );
}

export default App;
