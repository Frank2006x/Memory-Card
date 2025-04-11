import { useEffect } from "react";

function Data({ setPokemon }) {
    useEffect(() => {
        const fetchData = async () => {
            try {
                let count = 1;
                const data = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=100&limit=1000");
                const response = await data.json();
                let pokeArray = response.results.sort(() => 0.5 - Math.random());
                pokeArray = pokeArray.slice(0, 20);
                pokeArray = pokeArray.map((element) => {
                    
                    return { ...element, id: count++ };
                });
                setPokemon(pokeArray);
                console.log(pokeArray);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [setPokemon]);

    return null;
}

export default Data;
