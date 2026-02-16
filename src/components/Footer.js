import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2026 React Modularity Assignment | Created by [Your Name]</p>
      <p>This demonstrates component modularity in React</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#282c34',
    padding: '20px',
    color: 'white',
    textAlign: 'center',
    marginTop: '20px',
    position: 'fixed',
    bottom: 0,
    width: '100%'
  }
};

export default Footer;