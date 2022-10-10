import React from "react";
import '../App.css';

const Card = ({ characters = [] }) => {
    
    return (
        <div className="card">
            {characters.map((item, index) => (
                <div key={index} className="cardContainer">
                    <div className="cardImage"> {/* onClick={openModal()} colocar isso aqui sepa*/} 
                        <img id="cardImages" src={item.image} alt="" />
                    </div>
                    <div className="cardStatus">
                        <h2 className="center">{item.name}</h2>
                        <p>Especies: {item.species}</p>
                        <p>Location: {item.location.name}</p>
                    </div>        
                </div>
            ))}
        </div>
    )
}

export default Card;