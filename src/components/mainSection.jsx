import { useEffect, useState } from "react";
import CardItem from "./card.jsx";

function MainSection(){

    const [pokemonDetails, setPokemonDetails] = useState([]);

    const [highestScore, setHighestScore] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedCards, setClickedcards] = useState([]);
    

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

    function reshuffle(details){
        const reshuffledDetails = [...details].sort(() => 0.5 - Math.random()); 
        setPokemonDetails(reshuffledDetails);
    }

    useEffect(() => {
        getData();
    }, []);

    // useEffect(() => {
    //     reshuffle(pokemonDetails);
    // }, [pokemonDetails]);

  

    function handleClick (cardId) {
        console.log( clickedCards.includes(cardId));
        const scoreElement = document.getElementById("score");
        const bestScore = document.getElementById("bestScore");
        
        if ( clickedCards.includes(cardId)){
            if (score > highestScore){
                setHighestScore(score)
                bestScore.textContent = `${score}`
               
            } else {
                setScore(0);
                setClickedcards([]);     
            };
            
            scoreElement.textContent = 0;
             
            
           
        } else {
            const currentScore = score + 1;
            scoreElement.textContent = `${currentScore}`
            bestScore.textContent = `${highestScore}`
            setScore(currentScore);
            setClickedcards([...clickedCards, cardId]);

            
        };
        reshuffle(pokemonDetails);
    };

    
    return (
        <div className="mainSection">
            {pokemonDetails.map((detail) => (
                <CardItem key={detail.id} cardImage={detail.sprite} cardTitle={detail.name} cardId={detail.id}  onclick={()=> {handleClick(detail.id)}}/>
            
            ))}
        
        </div>
        
    );
}

export default MainSection;