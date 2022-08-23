import HopiBot from './images/hopibot.png';
import './CardFront.css';
import { Tag } from './components';

export const CardFront = () => {
  return (
    <div className="card text-center card-more" >
      <img src={HopiBot} className="card-img-top rounded mx-auto d-block" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        {/* <span className="badge rounded-pill text-bg-primary">Primary</span> */}
        <Tag text='hello'/><Tag text='hello'/><Tag text='hello'/><Tag text='hello'/><Tag text='hello'/>
      </div>
    </div>
  );
}
