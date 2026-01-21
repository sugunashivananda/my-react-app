import React, { useState } from 'react';

const CounterButton: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p>Counter: {count}</p>
    </div>
  );
};

export default CounterButton;
