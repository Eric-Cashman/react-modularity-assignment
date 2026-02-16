import React, { useState } from 'react';
import { Button } from './SharedComponents';

export function ContentB() {
  const [message, setMessage] = useState('Click a button to change this message!');

  const handleHello = () => {
    setMessage('Hello from ContentB! 👋');
  };

  const handleGoodbye = () => {
    setMessage('Goodbye from ContentB! 👋');
  };

  return (
    <div style={styles.content}>
      <h2>Content B Component</h2>
      <p>This component also uses a <strong>named export</strong>.</p>
      <p>It demonstrates reusing the same Button component from SharedComponents.</p>
      
      <div style={styles.demo}>
        <p style={styles.message}>{message}</p>
        <Button onClick={handleHello} variant="primary">
          Say Hello
        </Button>
        <Button onClick={handleGoodbye} variant="secondary">
          Say Goodbye
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
    border: '2px solid #6c757d'
  },
  demo: {
    marginTop: '15px',
    padding: '15px',
    backgroundColor: 'white',
    borderRadius: '5px'
  },
  message: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: '15px'
  }
};