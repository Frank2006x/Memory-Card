

function Card({name,url}){

    
    return(
        <div className="card">
            <img src={url} alt={name} />
            <h3>{name}</h3>
        </div>

    )
}

export default Card;