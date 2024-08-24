import './Header.css';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import {MdEmail} from 'react-icons/md';
import {SiDevpost} from 'react-icons/si';
import { CircleButton, PillButton } from '../Buttons';
import { motion } from 'framer-motion';
import { Globals } from '../../global';
import classNames from 'classnames';

interface HeaderProps {
  isMobile: boolean
}

export const Header = ({isMobile}: HeaderProps) => {
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

  const downArrowMarkup = (
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
  )

  const mobileMarkup = (
    <>
      <div className='row'>
        <h1 className='mobile-h1 ms-2'>Hi, I'm Mayeen.</h1>
        <article className='mobile-article ms-2'>
          Dev Degree Intern @ Shopify
          <br/>
          Computer Science @ Carleton
        </article>
      </div>
      <div className="row ms-1 mt-3">
        <PillButton text='Resume' link={Globals.RESUME} />
      </div>
      <div className="row mt-2 ms-2">
        {circleBtnsMarkup}
      </div>
    </>
  )

  return (
    <div className='header-main ms-4 me-4'>
      {isMobile ? mobileMarkup : (
      <>
        <div className='row'>
          <h1>Hi, I'm Mayeen.</h1>
          <article>Dev Degree Intern @ Shopify | CS @ Carleton</article>
        </div>
        <div className="row mt-4">
          <PillButton text='Resume' link={Globals.RESUME} />
          <>{circleBtnsMarkup}</>
        </div>
      </>
      )}
      {downArrowMarkup}
    </div>
  );
}
