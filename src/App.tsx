import React, { useState } from 'react';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to My React App</h1>
      <p>This is some existing text on the page.</p>
      <div style={{ marginTop: '10px' }}>
        <button onClick={handleClick}>Click me</button>
        <span style={{ marginLeft: '10px' }}>Count: {count}</span>
      </div>
    </div>
  );
};

export default App;
