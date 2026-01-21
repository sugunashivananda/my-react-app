import React, { useState } from 'react';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
      <button onClick={handleClick} style={{ padding: '0.5rem 1rem', fontSize: '1rem' }}>
        Click Me
      </button>
      <p style={{ marginTop: '1rem', fontSize: '1.25rem' }}>Counter: {count}</p>
    </div>
  );
};

export default App;
