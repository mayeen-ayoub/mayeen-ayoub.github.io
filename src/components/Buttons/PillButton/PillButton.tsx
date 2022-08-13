import './PillButton.css';

interface Props {
  text: string,
  link: string,
}

export const PillButton = ({text, link}: Props) => {
  return (
    <a 
      className="btn btn-outline-light btn-pill btn-xl ms-2 me-3 fw-bold"
      href={link}
      target="_blank"
    >
      <>{text}</>
    </a>
  );
}
