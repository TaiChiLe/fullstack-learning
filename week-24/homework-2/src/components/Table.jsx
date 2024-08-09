function Table(props) {
  return (
    <table>
      <tr>
        {props.headers.map((item, index) => {
          return <th key={index}>{item}</th>;
        })}
      </tr>
      {props.data.map((item, index) => {
        return (
          <tr>
            <td key={index}>{item.company}</td>
            <td key={index}>{item.contact}</td>
            <td key={index}>{item.country}</td>
            <td key={index}>
              <button>{item.button}</button>
            </td>
          </tr>
        );
      })}
    </table>
  );
}

export default Table;
