import React, { useState } from 'react';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <p>This is the existing text above the button.</p>
      <button onClick={handleClick} style={{ marginRight: '10px' }}>
        Click me
      </button>
      <span>Count: {count}</span>
    </div>
  );
};

export default App;
