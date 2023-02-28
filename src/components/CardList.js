import React from 'react';
import Card from './Card';
import '../index.css';

const CardList = ({ sushis }) => {
    const SushiArray = sushis.map((user, i) => {
        return (
        <Card 
        key={i} 
        name={sushis[i].name} 
        price={sushis[i].price} 
        ingredients={sushis[i].ingredients} 
        link={sushis[i].link}
        />
        )
    })
    return (
        <div className="card-grid">
            {SushiArray}
        </div>
    );
}

export default CardList