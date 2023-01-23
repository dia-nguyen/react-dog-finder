import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";
// import DogFinder from "./DogFinder";
import DogDetails from "./DogDetails";
import DogList from "./DogList";
import Nav from "./Nav";
import { useState } from "react";

const BASE_URL = "http://localhost:5001/dogs";

/**
 * App - Renders a list of dogs
 *
 * TODO:
 */
function App() {
  const [dogs, setDogs] = useState({
    dogs: null,
    loading: true
  });

  async function fetchDogs() {
    const result = await axios.get(BASE_URL);
    console.log(result.data);
    setDogs({
      dogs: result.data,
      loading: false
    });
  }

  if (dogs.loading) {
    fetchDogs();
    return <p>Loader</p>
  }

  return (
    <div className="App">
      <Nav dogs={dogs}/>
      <h1>Dogfinder!!!</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DogList dogs={dogs} />} />
          <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
