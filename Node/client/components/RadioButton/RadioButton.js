import React, { Component } from 'react';

import './RadioButton.scss';

const RadioButton = (props) => {
    return (
        <div className="select-payment-method">
            <input type="radio" onClick={props.handler} id={`${props.nameGroup}-${props.index}`} checked={props.checked} name={props.nameGroup} disabled={props.disabled}/>
            <label htmlFor={`${props.nameGroup}-${props.index}`} className="select-payment-method__label">
                <div className="select-payment-method__label--main">{props.labelText}</div>
                <span className="select-payment-method__label--additional">{props.labelTextAdditional}</span>
                <div className="select-payment-method__radio-button">
                <div className="select-payment-method__radio-button-indicator"></div>
                </div>
            </label>
            <div className="select-payment-method__icons">{props.children}</div>

        </div>

    );
};

RadioButton.defaultProps = {
    labelText: 'Оплатить',
    nameGroup: 'group',
    type: ''

};
//исправить для другого окошка, и для телефона
export default RadioButton;