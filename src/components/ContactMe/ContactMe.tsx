import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { CircleButton, PillButton } from '../Buttons';
import { RESUME_LINK } from '../constants';
import './ContactMe.css';

export const ContactMe = () => {
  const mail = (
    <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.8232 0C22.0143 0 23 0.981818 23 2.16818V15.8318C23 17.0182 22.0143 18 20.8232 18H2.17679C0.985714 18 0 17.0182 0 15.8318V2.16818C0 0.981818 0.985714 0 2.17679 0H20.8232ZM20.5357 4.62273V2.45455L11.5 8.46818L2.46429 2.45455V4.62273L11.5 10.6364L20.5357 4.62273Z" fill="white"/>
    </svg>
  );

  const circleBtn = [
    {
      icon: <FaGithub />,
      link: 'https://github.com/mayeen-ayoub'
    },
    {
      icon: <FaLinkedinIn />,
      link: 'https://www.linkedin.com/in/mayeen-ayoub/'
    },
  ];

  const circleBtnsMarkup = circleBtn.map((btn, index) => (
    <CircleButton key={index} icon={btn.icon} link={btn.link} />
  ));

  return (
    <div className='contact-me'>
    <h3>Contact Me</h3>
    <div className='mb-3 mt-3'>
      <span className='mx-3'>{mail}</span>
      <span className='email-text'>mayeen.ayoub@gmail.com</span>
    </div>
    <div className='buttons-margins'>
    <PillButton text='Resume' link={RESUME_LINK} />
    {circleBtnsMarkup}
    </div>
    </div>
  );
}
