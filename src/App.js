import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";
// import DogFinder from "./DogFinder";
import DogSelector from "./DogSelector";
import DogList from "./DogList";
import Nav from "./Nav";
import { useState } from "react";

const BASE_URL = "http://localhost:5001/dogs";

/**
 * App - Renders a list of dogs
 *
 * State:
 * - dogs: Object with dog data and loading status {Object, Boolean}
 *
 * App -> { DogList, DogSelector }
 */
function App() {
  const [dogs, setDogs] = useState({
    data: null,
    loading: true
  });

  async function fetchDogs() {
    const result = await axios.get(BASE_URL);
    setDogs({
      data: result.data,
      loading: false
    });
  }

  if (dogs.loading) {
    fetchDogs();
    return <p>Loader</p>
  }

  return (
    <div className="App">
      <h1>Dogfinder!!!</h1>
      <BrowserRouter>
      <Nav dogs={dogs.data}/>
        <Routes>
          <Route path="/" element={<DogList dogs={dogs.data} />} />
          <Route path="/dogs/:name" element={<DogSelector dogs={dogs.data} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
