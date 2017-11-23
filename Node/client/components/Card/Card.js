import React, { Component } from 'react';

import './Card.scss';

const Card = (props) => {
    return (
        <div id={props.id} className="card-anchor">
            <h1>{props.title}</h1>
            <div className="card" >
                {props.children}
            </div>
        </div>
    );
};

export default Card;