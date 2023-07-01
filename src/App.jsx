import { useEffect, useState } from "react";
import Tours from "./components/Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [tours, setTours] = useState([]);

  async function fetchTours() {
    setIsLoading(true);
    try {
      const resp = await fetch(url);

      if (!resp.ok) {
        setIsLoading(false);
        setIsError(true);
      }

      const tours = await resp.json();
      setTours(tours);
      console.log(tours);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  }

  function removeTour(id) {
    console.log(id);
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <div className="loading"></div>
      </main>
    );
  }
  if (isError) {
    return (
      <main>
        <h3>Something went wrong...</h3>
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button
            style={{ marginTop: "2rem" }}
            onClick={() => fetchTours()}
            className="btn"
          >
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
