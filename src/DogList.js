import { Link } from "react-router-dom";

/** DogList: Renders the list of all dogs to display
 *
 * Props:
 * - dogs: Array of dog objects
 *
 * App -> DogList
 */
function DogList({ dogs }){
  return (
    <ul>
      {dogs.map(dog => (
        <li key={dog.name}>
          <img src={`/${dog.src}.jpg`} alt={dog.name} />
          <p><b>
            <Link to={`/dogs/${dog.name}`}>
              {dog.name}
            </Link></b></p>
        </li>
      ))}
    </ul>
  )
}

export default DogList