import './ContactMe.css';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import {MdEmail} from 'react-icons/md';
import {SiDevpost} from 'react-icons/si';
import { CircleButton, PillButton } from '../Buttons';
import { Globals } from '../../global';


export const ContactMe = () => {
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
  ];
	
	const circleBtnsMarkup = circleBtn.map((btn, index) => (
    <CircleButton key={index} icon={btn.icon} link={btn.link} />
  ));

  return (
		<div className="contact-me">
			<h3>Contact Me</h3>
      <a className='d-flex align-items-center mt-2 text-decoration-none text-white' href={Globals.MAIL_LINK}>
        <MdEmail className="fa-2x pe-2" />
        <h4>{Globals.MAIL_TEXT}</h4>
      </a>
			<div className="row mt-2">
				<PillButton text='Resume' link={Globals.RESUME} />
				<>{circleBtnsMarkup}</>
			</div>
	</div>
  );
}
