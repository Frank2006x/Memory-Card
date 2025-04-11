import Card from "./Card"

function CardBox({pokemon}){
    


    return (
        <div className="card-box">
            {pokemon.map((element,index)=>
            <Card name={element.name} url={element.url} key={index}/>
                )
            }


        </div>

    )
}

export default CardBox