import { PillButton } from '../Buttons';
import { CardFront } from './components/CardFront';
import { projectData } from './ProjectsData';
import './Projects.css';
import { useState } from 'react';

export const Projects = () => {
  const [cards, setCards] = useState(projectData);

  const hackathonCards = () => {
    const hackathon = projectData.filter((project) => {
      return project.filters.hackathon;
    });
    setCards(hackathon);
  }

  const websiteCards = () => {
    const website = projectData.filter((project) => {
      return project.filters.website;
    });
    setCards(website);
  }

  const allCards = () => {
    setCards(projectData);
  }

  const filterBtns = [
    {
      text: 'All',
      action: allCards,
    },
    {
      text: 'Hackathon',
      action: hackathonCards,
    },
    {
      text: 'Website',
      action: websiteCards,
    },
    // {
    //   text: 'Outreach',
    //   action: () => {},
    // },
  ];

  const filterBtnsMarkup = filterBtns.map((btn, index) => (
    <PillButton key={index} text={btn.text} action={btn.action}/>
  ));

  const cardsMarkup = cards.map((project, index) => {
    return (
      <div key={index} className="col card-space">
        <CardFront project={project} />
      </div>
    );
  });



  return (
    <div className='projects'>
      <div className="row mt-5">
        <h3>Projects</h3>
      </div>
      <div className="row mt-2">
        {filterBtnsMarkup}
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
        {cardsMarkup}
      </div>
    </div>
  );
}
