import Card from "./Card"

function CardBox({pokemon}){
    


    return (
        <div className="card-box">
            {pokemon.map((element)=>
            <Card name={element.name} url={element.url} key={element.id}/>
                )
            }


        </div>

    )
}

export default CardBox