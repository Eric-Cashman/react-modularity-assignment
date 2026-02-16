import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <h1>React Modularity Assignment</h1>
      <p>Demonstrating Default and Named Exports/Imports</p>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#282c34',
    padding: '20px',
    color: 'white',
    textAlign: 'center',
    marginBottom: '20px'
  }
};

export default Header;