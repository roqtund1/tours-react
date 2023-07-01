import Tour from "./Tour";

export default function Tours({ tours, removeTour }) {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="title-underline"></div> 
      </div>
      {tours.length ? "" : <button className="btn">refresh</button>}
      <div className="tours">
        {tours.map((tour) => {
          return <Tour key={tour.id} removeTour={removeTour} {...tour} />;
        })}
      </div>
    </section>
  );
}
