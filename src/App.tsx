import React, { useEffect, useState } from 'react';
import './App.css';
import { AboutMe, ContactMe, Header, Navbar, Projects, Skills } from './components';

const App = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Navbar/>
      <div id="home" className='container'>
        <Header isMobile={isMobile} />
        <AboutMe/>
        <Projects isMobile={isMobile} />
        <Skills />
        <ContactMe />
      </div>
    </>
  );
}

export default App;
