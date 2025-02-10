function CardItem({cardImage, cardTitle}){
    return (
        <div className="card">
            <img src={cardImage} alt="" className="cardImage"/>
            <div className="cardTitle">{cardTitle}</div>
        </div>
    );
}

export default CardItem;