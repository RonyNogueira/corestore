import React from 'react';
import './index.css';
import {Routes} from './routes'
import {Header, Footer} from './components'
function App() {
  return (
    <>
      <Header/>
      <Routes/>
      <Footer/>
    </>
  );
}

export default App;
