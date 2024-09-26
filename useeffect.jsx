import { useEffect, useState } from 'react';

function AnimeDropdown(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (props.requestUrl) {
      fetch(props.requestUrl)
        .then((response) => response.json())
        .then((result) => {
          setItems(result.data);
        });
    } else {
      setItems([]);
    }
  }, [props.requestUrl]);

  return (
    <div>
      <div>
        Loading anime from: <b>{props.requestUrl}</b>
      </div>
      <select>
        {items.map((item) => (
          <option key={item.mal_id} value={item.mail_id}>
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
}

export default AnimeDropdown;
