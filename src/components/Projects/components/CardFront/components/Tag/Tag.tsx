import './Tag.css';

interface Props {
  text: string
}

export const Tag = ({text}: Props) => {
  return (
    <div className='Tag'>
      {text}
    </div>
  );
}
