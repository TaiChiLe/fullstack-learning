function ShowData(props) {
  console.log(props.person);

  return (
    <div>
      <div>
        <b>Name:</b> {props.person.firstName} {props.person.lastName}
      </div>
      <div>
        <b>Age:</b> {props.person.age}
      </div>
      <div>
        <b>Occupation:</b> {props.person.occupation}
      </div>
    </div>
  );
}

export default ShowData;
