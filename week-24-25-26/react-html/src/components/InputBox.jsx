import { useRef } from 'react';

function InputBox() {
  const inputRef = useRef(null);
  const onClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={onClick}>Set focus</button>
    </div>
  );
}

export default InputBox;
