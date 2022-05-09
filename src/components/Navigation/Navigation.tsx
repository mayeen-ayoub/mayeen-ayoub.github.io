import React from 'react';
import './Navigation.css';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Navigation = () => {
  return (
    <div className="row mt-4">
      <a 
        className="btn btn-outline-light btn-pill btn-xl ms-2 me-3 fw-bold"
        href="https://drive.google.com/file/d/1tGY4gKJkRBGLWi8PIl7XqkjW8TpoCz7k/view?usp=sharing"
        target="_blank"
      >
        Resume
      </a>
      <a 
        className="btn btn-outline-light btn-circle btn-xl me-3"
        href="https://github.com/mayeen-ayoub"
        target="_blank"
      >
        <FaGithub />
      </a>
      <a 
        className="btn btn-outline-light btn-circle btn-xl"
        href="https://www.linkedin.com/in/mayeen-ayoub"
        target="_blank"
      >
        <FaLinkedinIn />
      </a>
    </div>
  );
}

export default Navigation;
