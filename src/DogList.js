import { Link } from "react-router-dom";

/** TODO: */
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