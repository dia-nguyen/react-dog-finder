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
 */
function App() {
  const [dogs, setDogs] = useState({});

  async function fetchDogs() {
    const result = await axios.get(BASE_URL);
    setDogs(result.data);
  }

  return (
    <div className="App">
      <Nav dogs={dogs}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DogList />} />
          <Route path="/dogs/:name" element={<DogDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
