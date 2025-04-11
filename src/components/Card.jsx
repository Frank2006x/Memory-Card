function Card({ name, url,click}) {
 
    const id = url.split('/')[6]; 
  
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  
    return (
      <div className="card" onClick={()=>click()}>
        <img src={imageUrl} alt={name} />
        <h3>{name}</h3>
      </div>
    );
  }
  
  export default Card;
  