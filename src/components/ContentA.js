// ContentA.js - Uses NAMED export
import React, { useState } from 'react';
import { Button } from './SharedComponents';

export function ContentA() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={styles.content}>
      <h2>Content A Component</h2>
      <p>This component uses a <strong>named export</strong>.</p>
      <p>It imports a Button component using <strong>named import</strong>.</p>
      
      <div style={styles.demo}>
        <p>Click counter: <strong>{count}</strong></p>
        <Button onClick={handleClick} variant="primary">
          Increment Count
        </Button>
        <Button onClick={() => setCount(0)} variant="secondary">
          Reset
        </Button>
      </div>
    </div>
  );
}

const styles = {
  content: {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    margin: '20px',
    borderRadius: '10px',
    border: '2px solid #007bff'
  },
  demo: {
    marginTop: '15px',
    padding: '15px',
    backgroundColor: 'white',
    borderRadius: '5px'
  }
};
