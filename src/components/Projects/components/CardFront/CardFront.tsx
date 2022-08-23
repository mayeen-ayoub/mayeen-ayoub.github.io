import './CardFront.css';
import { Tag } from './components';

interface Props {
  image: string,
  title: string,
  tags: string[],
}

export const CardFront = ({image, title, tags}: Props) => {
  const tagsMarkup = tags.map((tag, index) => (
    <Tag key={index} text={tag} />
  ));
  return (
    <div className="card text-center card-more" >
      <img src={image} className="card-img-top rounded mx-auto d-block card-image" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="tag">
          {tagsMarkup}
        </div>
        {/* <span className="badge rounded-pill text-bg-primary">Primary</span> */}
        {/* <Tag text='hello'/><Tag text='hello'/><Tag text='hello'/><Tag text='hello'/><Tag text='hello'/> */}
      </div>
    </div>
  );
}
