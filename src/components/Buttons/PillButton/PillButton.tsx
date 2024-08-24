import './PillButton.css';
import classNames from 'classnames';

interface Props {
  text: string,
  link?: string,
  isFullWidth?: boolean,
  action?: () => void,
}

export const PillButton = ({text, link, isFullWidth, action}: Props) => {
  return (
    link 
    ? <a 
        className="btn btn-outline-light btn-pill btn-xl ms-2 me-3 fw-bold"
        href={link}
        target="_blank"
      >
        <>{text}</>
      </a>
    : <button 
        onClick={action} 
        className={classNames("btn btn-outline-light btn-pill btn-xl ms-2 me-2 fw-bold", {"full-btn": isFullWidth})}
      >
        {text}
      </button>
  );
}
