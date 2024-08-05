import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { ContactMe } from './components/ContactMe';
import { Navbar } from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar/>
      <div id="home" className='container'>
        <Header />
        <Projects />
        <Skills />
        <ContactMe />
      </div>
    </>
  );
}

export default App;
