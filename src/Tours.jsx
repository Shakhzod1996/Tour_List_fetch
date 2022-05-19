import React from "react";
import Tour from "./Tour";

export default function Tours({ tours, removeTour }) {
  return (
    <section className="tours">
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>

      <div className="tour">
        {tours.map(tour => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />
        })}
      </div>
    </section>
  );
}
