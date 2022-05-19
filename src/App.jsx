import { useState, useEffect } from "react";
import "./App.css";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour, i) => tour.id !== id)
    setTours(newTours)
  }

  const fetchTour = async () => {
    setLoading(true);
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setTimeout(() => {
        setLoading(false)
      setTours(tours)
      }, 2000);
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTour()
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours Left </h2>
          <button onClick={fetchTour}>Reset</button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours}
        removeTour={removeTour}/>
    </main>
  );
}

export default App;
