function Capitalised(props) {
  let capitalised = props.text.toUpperCase();
  return <div className="mt-4">{capitalised}</div>;
}

export default Capitalised;
