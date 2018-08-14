import React, { Component } from 'react';

import './Button.scss';


const Button = (props) => {
    return (
        <button id="button-translateion-text"
            type={props.type ? props.type : 'button'}
            className={`main-action ${props.classNames}`}
            disabled={props.disabled}
            onClick={props.onClick}>
            {props.buttonText}
        </button>
    );
};





Button.defaultProps = {
    classNames: '',
    buttonText: 'Оплатить'
};

export default Button;
