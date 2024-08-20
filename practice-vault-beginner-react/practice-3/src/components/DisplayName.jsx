function DisplayName(props) {
  return (
    <div className="mt-4">
      <h4>Full Name:</h4>
      <div>
        {props.firstName} {props.lastName}
      </div>
    </div>
  );
}

export default DisplayName;
