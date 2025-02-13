import { useState } from "react";

function CardItem({cardId, cardImage, cardTitle, onclick}){
    return (
        <div className="card" key={cardId} onClick={onclick} >
            <img src={cardImage} alt="" className="cardImage"/>
            <div className="cardTitle" >{cardTitle}</div>
        </div>
    );
}

export default CardItem;