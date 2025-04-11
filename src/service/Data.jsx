import { useEffect } from "react";

function Data({setPokemon}){
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const data=await fetch("https://pokeapi.co/api/v2/pokemon/?offset=100&limit=1000");
                const reponse=await data.json();
                setPokemon(reponse.results)
                console.log(reponse.results)
            }catch(error){
                console.error(error);
            }
        }
        fetchData();
    },[])
    return null
}
export default Data;
