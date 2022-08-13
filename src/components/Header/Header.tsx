import './Header.css';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import {MdEmail} from 'react-icons/md';
import {SiDevpost} from 'react-icons/si';
import { CircleButton, PillButton } from '../Buttons';
// import Email from './icons/email.svg';

export const Header = () => {
  const circleBtn = [
    {
      icon: <FaGithub />,
      link: 'https://github.com/mayeen-ayoub'
    },
    {
      icon: <FaLinkedinIn />,
      link: 'https://www.linkedin.com/in/mayeen-ayoub/'
    },
    {
      icon: <SiDevpost />,
      link: 'https://devpost.com/mayeen-ayoub'
    },
    {
      icon: <MdEmail />,
      link: 'mailto:mayeen.ayoub@gmail.com'
    },
  ];

  const circleBtnsMarkup = circleBtn.map((btn) => (
    <CircleButton icon={btn.icon} link={btn.link} />
  ));
  
  return (
    <>
    <div className='row'>
      <h1>Hi, I'm Mayeen.</h1>
      <article>This is a website about me</article>
    </div>
    <div className="row mt-4">
      <PillButton text='Resume' link='https://drive.google.com/file/d/1tGY4gKJkRBGLWi8PIl7XqkjW8TpoCz7k/view?usp=sharing' />
      <>{circleBtnsMarkup}</>
    </div>
    </>
  );
}
