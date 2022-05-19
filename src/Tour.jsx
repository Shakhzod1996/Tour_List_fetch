import React, { useState } from "react";

export default function Tour({ id, image, info, price, name, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="single-tour">
      <img src={image} alt={name} />

      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p className="info">
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            className={"read-more"}
            onClick={() => setReadMore(!readMore)}
          >{readMore ? 'Show less' : 'Read more'}
          </button>

        </p>
        <div className="delete-div">
          <button className="delete-btn"onClick={() =>removeTour(id)}>not interested</button>
        </div>
      </footer>
    </div>
  );
}
