import './Header.css';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import {MdEmail} from 'react-icons/md';
import {SiDevpost} from 'react-icons/si';
import { CircleButton, PillButton } from '../Buttons';
import { motion } from 'framer-motion';
import { Globals } from '../../global';

// TODO: convert icons to local SVGs
export const Header = () => {
  const circleBtn = [
    {
      icon: <FaGithub />,
      link: Globals.GITHUB
    },
    {
      icon: <FaLinkedinIn />,
      link: Globals.LINKEDIN
    },
    {
      icon: <SiDevpost />,
      link: Globals.DEVPOST
    },
    {
      icon: <MdEmail />,
      link: Globals.MAIL_LINK
    },
  ];

  const circleBtnsMarkup = circleBtn.map((btn, index) => (
    <CircleButton key={index} icon={btn.icon} link={btn.link} />
  ));

  const downArrow = (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" viewBox="0 0 60 56" fill="none">
      <path d="M17.5 30.3333L30 42L42.5 30.3333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.5 14L30 25.6667L42.5 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <div className='header-main'>
      <div className='row'>
        <h1>Hi, I'm Mayeen.</h1>
        <article>Dev Degree Intern @ Shopify | CS @ Carleton</article>
      </div>
      <div className="row mt-4">
        <PillButton text='Resume' link={Globals.RESUME} />
        <>{circleBtnsMarkup}</>
      </div>
      <motion.div
        animate= {{
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
        }}
        className='down-arrow'
      >
        {downArrow}
      </motion.div>
    </div>
  );
}
