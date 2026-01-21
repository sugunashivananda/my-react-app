import React, { useState } from 'react';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = (): void => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p>Counter: {count}</p>
    </div>
  );
};

export default App;
