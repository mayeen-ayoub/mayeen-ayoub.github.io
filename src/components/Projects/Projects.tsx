import { PillButton } from '../Buttons';
import { CardFront } from './components/CardFront';
import { projectData } from './ProjectsData';
import './Projects.css';

export const Projects = () => {
  const filterBtns = [
    {
      text: 'Hackathon',
      action: () => {},
    },
    {
      text: 'Website',
      action: () => {},
    },
    {
      text: 'Outreach',
      action: () => {},
    },
  ];

  const filterBtnsMarkup = filterBtns.map((btn, index) => (
    <PillButton key={index} text={btn.text} action={btn.action}/>
  ));

  const cardsMarkup = projectData.map((project, index) => {
    const {image, title, tags} = project;
    return (
      <div key={index} className="col">
        <CardFront image={image} title={title} tags={tags} />
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
