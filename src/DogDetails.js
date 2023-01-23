/** DogDetails: Renders dog detail page
 *
 * Props:
 * - dog: Object with dog info
 *
 * DogSelector -> DogDetails
 */
function DogDetails({ dog }){
  return (
    <div>
      <img src={`/${dog.src}.jpg`} alt={dog.name} />
      <h2>Name: {dog.name}</h2>
      <h4>Age: {dog.age}</h4>
      <ul>
        {dog.facts.map((fact, i) => (
          <li key={i}>{fact}</li>
        ))}
      </ul>
    </div>
  )
}

export default DogDetails