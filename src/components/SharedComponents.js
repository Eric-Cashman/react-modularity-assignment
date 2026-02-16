import React from 'react';

export function Button({ children, onClick, variant = 'primary' }) {
  const styles = {
    primary: {
      backgroundColor: '#007bff',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      margin: '5px'
    },
    secondary: {
      backgroundColor: '#6c757d',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      margin: '5px'
    }
  };

  return (
    <button 
      style={variant === 'primary' ? styles.primary : styles.secondary}
      onClick={onClick}
    >
      {children}
    </button>
  );
}