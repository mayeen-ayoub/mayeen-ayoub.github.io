import './PillButton.css';

interface Props {
  text: string,
  link?: string,
  action?: () => void,
}

export const PillButton = ({text, link, action}: Props) => {
  return (
    link 
    ? <a 
        className="btn btn-outline-light btn-pill btn-xl ms-2 me-3 fw-bold"
        href={link}
        target="_blank"
      >
        <>{text}</>
      </a>
    : <button onClick={action} className="btn btn-outline-light btn-pill btn-xl ms-2 me-2 fw-bold">
        {text}
      </button>
  );
}
