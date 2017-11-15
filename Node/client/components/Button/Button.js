import React, { Component } from 'react';

import './Button.scss';

const Button = (props) => {
    return (
        <button type="button" className={`main-action ${props.classNames}`} onClick={props.handler}>{props.buttonText}</button>
    );
};

Button.defaultProps = {
    classNames: '',
    buttonText: 'Оплатить'
};

export default Button;