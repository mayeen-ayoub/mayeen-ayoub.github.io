import {ReactNode} from 'react';
import './CircleButton.css';

interface Props {
  icon: ReactNode,
  link: string,
}
export const CircleButton = ({icon, link}: Props) => {
  return (
    <a 
      className="btn btn-outline-light btn-circle btn-xl me-3"
      href={link}
      target="_blank"
    >
      <>{icon}</>
    </a>
  );
}
