import React from 'react';
import './cards.css';

const Card = ({ link, name, price, ingredients }) => {
    return (
        <div className="card-box">
            <img className="roll" alt='roll' src={link} />
            <div>
                <h2 className="sushi-name">{name}</h2>
                <p className="price">${price}</p>
                <p className="ingredients">{ingredients}</p>
            </div>
        </div>
    );
}

export default Card;