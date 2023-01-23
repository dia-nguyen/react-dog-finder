import { useParams, Navigate } from "react-router-dom";
import DogDetails from "./DogDetails";

/** DogSelector: Renders the DogDetails component with the correct
 * dog or redirects home if no such dog
 *
 * Props:
 * - dogs: Array of dog objects
 *
 * App -> DogSelector -> DogDetails
 */
function DogSelector({ dogs }) {
  const { name } = useParams();

  const currentDog = dogs.filter(dog => (
    dog.name === name
  ))[0];

  if (!currentDog) return <Navigate to="/" />

  return <DogDetails dog={currentDog} />;
}

export default DogSelector;