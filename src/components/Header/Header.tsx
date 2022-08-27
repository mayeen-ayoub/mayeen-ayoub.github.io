import './Header.css';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import {MdEmail} from 'react-icons/md';
import {SiDevpost} from 'react-icons/si';
import { CircleButton, PillButton } from '../Buttons';

// TODO: convert icons to local SVGs
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

  const circleBtnsMarkup = circleBtn.map((btn, index) => (
    <CircleButton key={index} icon={btn.icon} link={btn.link} />
  ));

  return (
    <div className='header-main'>
      <div className='row'>
        <h1>Hi, I'm Mayeen.</h1>
        <article>Dev Degree Intern @ Shopify | CS @ Carleton</article>
      </div>
      <div className="row mt-4">
        <PillButton text='Resume' link='https://drive.google.com/file/d/1APv2w_c19pVMDy655ziOJwdfbKLsPTJM/view?usp=sharing' />
        <>{circleBtnsMarkup}</>
      </div>
      {/* TODO: animate the down arrow */}
      <div className='down-arrow'>
        <svg xmlns="http://www.w3.org/2000/svg" width="80" viewBox="0 0 60 56" fill="none">
          <path d="M17.5 30.3333L30 42L42.5 30.3333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17.5 14L30 25.6667L42.5 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}
