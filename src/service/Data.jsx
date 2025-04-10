import { useEffect } from "react";

function Data({setpokemon}){
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const data=await fetch("https://pokeapi.co/api/v2/pokemon/");
                const reponse=await data.json();
                setpokemon(reponse)
            }catch(error){
                console.error(error);
            }
        }
        fetchData();
    },[])
}
export default Data;
