import { useEffect, useState } from "react";
import CardItem from "./card.jsx";

function MainSection(){

    const [pokemonDetails, setPokemonDetails] = useState([]);

    async function getData(){

        const limit = 16;
        const randomStart = Math.floor(Math.random() * 150);

        const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${randomStart}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);

            const details = await Promise.all(
                data.results.map(async (item) => {
                    const pokemonItem = await fetch(item.url).then((res) => res.json());

                    return {
                        id : pokemonItem.id,
                        name :  pokemonItem.name,
                        sprite : pokemonItem.sprites.front_default

                    }
                })
            );

            setPokemonDetails(details);
            
        } catch (error) {
              console.log(error)
        }
        
    }

    useEffect(() => {
        getData();
    }, []);


    
    return (
        <div className="mainSection">
            {pokemonDetails.map((detail) => (
                <CardItem key={detail.id} cardImage={detail.sprite} cardTitle={detail.name}/>
            
            ))}
        
        </div>
        
    );
}

export default MainSection;