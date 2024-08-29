import { useState } from 'react';
import './App.css';
function App() {
  const [items, setItems] = useState([]);
  const [layout, setLayout] = useState('vertical');

  const onAddClick = () => {
    const newItem = items.length + 1;
    setItems([...items, newItem]);
  };

  const onRemoveClick = () => {
    const newArray = items.slice(0, -1);
    setItems(newArray);
  };

  const onLayoutButtonChange = () => {
    if (layout === 'vertical') {
      setLayout('horizontal-layout');
    } else {
      setLayout('vertical');
    }
  };

  return (
    <div className="container">
      <h2>Manage List Items</h2>
      <button onClick={onAddClick}>Insert new item</button>
      <button className="danger" onClick={onRemoveClick}>
        Remove last item
      </button>
      <button className="warning" onClick={onLayoutButtonChange}>
        Change to "{layout === 'vertical' ? 'Horizontal' : 'Vertical'}" layout
      </button>
      <ul className={'list ' + layout}>
        {items.map((item, index) => (
          <li className="item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
