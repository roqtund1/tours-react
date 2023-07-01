import { useState } from "react";

export default function Tour({ id, image, info, name, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            onClick={() => setReadMore(!readMore)}
            className="info-btn"
            href="#"
          >
            {readMore? "show less" : 'Read more'}
          </button>
        </p>
        <button
          onClick={() => removeTour(id)}
          className="btn btn-block delete-btn"
        >
          not interested
        </button>
      </div>
    </article>
  );
}
