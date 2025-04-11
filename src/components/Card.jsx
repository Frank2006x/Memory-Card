function Card({ name, url }) {
 
    const id = url.split('/')[6]; 
  
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  
    return (
      <div className="card">
        <img src={imageUrl} alt={name} />
        <h3>{name}</h3>
      </div>
    );
  }
  
  export default Card;
  