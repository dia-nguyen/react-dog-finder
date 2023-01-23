import { Link } from "react-router-dom";

/** TODO: */
function Nav({ dogs }) {
  return (
    <nav>
      <Link to={'/'}>Home</Link>
      {dogs.map(dog => (
        <Link
          key={dog.name}
          to={`/dogs/${dog.name}`}
        >{dog.name}</Link>
      ))}
    </nav>
  )
}

export default Nav;