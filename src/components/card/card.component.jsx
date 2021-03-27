import React from 'react';

import './card.style.css';

export const Card = props => (
    <div className='card-container'> 
        <img alt='monter' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
        <h4>{props.monster.name }</h4>
        <p> {props.monster.email }</p>
    </div>


); 