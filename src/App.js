import React from 'react';
import Header from './components/Header';
import Main from './Router';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header brand="andihermantyo" />
      <Main />
      <Footer />
    </>
  );
}

export default App;
