import './CardFront.css';
import { Tag } from './components/Tag';
import { motion } from "framer-motion"
import { useState } from 'react';
import { CircleButton } from '../../../Buttons';
import { IconType } from 'react-icons';
import { FaGithub } from 'react-icons/fa';
import { SiDevpost } from 'react-icons/si';
import { CardButton } from './components';

interface Props {
  project: {
    image: string,
    title: string,
    tags: string[],
    //TODO: remove the ?s
    awards?: string[],
    description?: string,
    links?: {
      type: string,
      link: string,
    }[],
    hackathon?: string | null
  }
}

//TODO: rename to card
export const CardFront = ({project}: Props) => {
  const {image, title, tags, awards, description, links, hackathon} = project;
  const [isFlipped, setIsFlipped] = useState(false);
  const tagsMarkup = tags.map((tag, index) => (
    <Tag key={index} text={tag} />
  ));

  const toggleFlip = () => setIsFlipped(!isFlipped);

  const frontMarkup = (
    <div className="tag">
      {tagsMarkup}
    </div>
  );

  const crown = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M5.25 18.75H18.75" stroke="#160042" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.75 15.75H5.25V7.75L9 9.5L12 5.25L15 9.5L18.75 7.75V15.75Z" stroke="#160042" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const awardsMarkup = awards?.map((award, index) => {
    return (
      <div key={index} className='awards'>
        {crown} {award}
        <br/>
      </div>
    );
  });

  const getIcon = (iconType :string) => {
    if (iconType == 'github') {
      return <FaGithub />;
    }
    if (iconType == 'devpost' ) {
      return <SiDevpost />;
    }
    return <></>;
  }

  const buttonMarkup = links?.map((button, index) => {
    return (
      <CardButton key={index} icon={getIcon(button.type)} link={button.link} />
    );
  });

  const backMarkup = (
    <div className='back'>
      {awardsMarkup}
      <h5 className="card-subtitle">Description</h5>
      <p>{description}</p>
      <div className='button-center pt-2'>
        {buttonMarkup}
      </div>
    </div>
  );

  return (
    <motion.div className="card text-center card-more"
      whileHover={{ scale: 1.07 }}
      onHoverStart={ e => {}}
      onHoverEnd={ e => {}}
      onClick={toggleFlip}
      layout
    >
      { !isFlipped && <img src={image} className="card-img-top rounded mx-auto d-block card-image" />}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {isFlipped?
          backMarkup
          : frontMarkup
        }
      </div>
    </motion.div>
  );
}
