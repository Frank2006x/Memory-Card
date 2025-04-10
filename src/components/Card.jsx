function Card({ name, url }) {
    // Extract the Pokémon ID from the URL (e.g., '3' from 'https://pokeapi.co/api/v2/pokemon/3/')
    const id = url.split('/')[6]; // Extract the ID after 'pokemon'
  
    // Construct the image URL based on the ID
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  
    return (
      <div className="card">
        <img src={imageUrl} alt={name} />
        <h3>{name}</h3>
      </div>
    );
  }
  
  export default Card;
  