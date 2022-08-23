import { PillButton } from '../Buttons';
import { CardFront } from './components/CardFront';
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
  ]

  const filterBtnsMarkup = filterBtns.map((btn, index) => (
    <PillButton key={index} text={btn.text} action={btn.action}/>
  ));

  return (
    <div className='projects'>
      <div className="row mt-5">
        <h3>Projects</h3>
      </div>
      <div className="row mt-2">
        {filterBtnsMarkup}
      </div>
      <div className="row mt-3">
        <div className="col">
          <CardFront />
        </div>
        <div className="col">
          <CardFront />
        </div>
        <div className="col">
          <CardFront />
        </div>
      </div>
    </div>
  );
}
