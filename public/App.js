import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { ContentA } from './components/ContentA';
import { ContentB } from './components/ContentB';
import { Button } from './components/SharedComponents';

function App() {
  const handleClick = () => alert('Button works across components!');
  
  return (
    <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      <Header />
      <main style={{flex: 1, padding: '2rem'}}>
        <ContentA />
        <ContentB />
      </main>
      <Footer />
    </div>
  );
}

export default App;
