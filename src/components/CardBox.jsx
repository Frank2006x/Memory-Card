import Card from "./Card"
// import { useEffect } from "react";
function CardBox({pokemon,setPokemon,selected,setSelected,gameOver,setGameOver,score,setScore}){
    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); 
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
    function handleClick(id){
        if (!gameOver){
            const newArray = [...pokemon];
            if (selected.includes(id)){
                console.log("game over")
                setGameOver(true);
            }else{
                selected.push(id);
                setSelected(selected);
                console.log(selected);

                setScore(score+1);
                shuffleArray(newArray);
                setPokemon(newArray);
            }


            

        }
        
    }
    // useEffect(() => {
    //     // console.log("Pokemon state updated!", pokemon);
    // }, [pokemon]);


    return (
        <div className="card-box">
            {pokemon.map((element)=>
            <Card name={element.name} url={element.url} click={handleClick} key={element.id} />
                )
            }


        </div>

    )
}

export default CardBox