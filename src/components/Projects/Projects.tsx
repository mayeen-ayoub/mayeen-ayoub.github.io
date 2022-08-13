import { CardFront } from './components/CardFront';
import './Projects.css';

export const Projects = () => {
  return (
    <div className="row mt-5">
      <h3>Projects</h3>
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
  );
}
