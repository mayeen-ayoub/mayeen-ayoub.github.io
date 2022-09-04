import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
