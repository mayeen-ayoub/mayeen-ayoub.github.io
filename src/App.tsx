import React from 'react';
import './App.css';
import { ContactMe } from './components/ContactMe';
import { Header } from './components/Header';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Projects />
      <Skills />
      <ContactMe />
    </div>
  );
}

export default App;
