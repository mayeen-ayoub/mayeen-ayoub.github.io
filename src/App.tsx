import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Projects } from './components/Projects';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Projects />
    </div>
  );
}

export default App;
