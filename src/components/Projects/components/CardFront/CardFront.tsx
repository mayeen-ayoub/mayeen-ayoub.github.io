import HopiBot from './images/hopibot.png';
import './CardFront.css';
import { Tag } from './components';

export const CardFront = () => {
  return (
    <div className="card">
      <img src={HopiBot} height='170px' width='180px'/>
      <h4>HopiBot</h4>
      <Tag text='hello' />
    </div>
  );
}
