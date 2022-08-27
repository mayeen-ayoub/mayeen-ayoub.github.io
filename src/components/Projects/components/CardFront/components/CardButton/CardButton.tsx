import {ReactNode} from 'react';
import './CardButton.css';

interface Props {
  icon: ReactNode,
  link: string,
}
export const CardButton = ({icon, link}: Props) => {
  return (
    <a
      className="btn btn-outline-light btn-circle-2 me-3"
      href={link}
      target="_blank"
      // onClick={(e) => e.preventDefault()}
    >
      <>{icon}</>
    </a>
  );
}
