import { useState } from 'react';

function Counter(props) {
  const [count, setCount] = useState(0);
  const onDecreaseClick = () => {
    const newCount = count - 1;

    setCount(newCount);
  };
  const onIncreaseClick = () => {
    const newCount = count + 1;

    setCount(newCount);
  };

  return (
    <div>
      <div>Counter</div>
      <div>
        <button onClick={onDecreaseClick}>-</button>
        <span>{count}</span>
        <button onClick={onIncreaseClick}>+</button>
      </div>
    </div>
  );
}

export default Counter;
