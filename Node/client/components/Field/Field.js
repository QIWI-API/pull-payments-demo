import React, { Component } from 'react';
import MaskedInput from 'react-input-mask';

import './Field.scss';

export default class Field extends Component {

    constructor (props) {
        super(props);

        this.state = {
            mask: '',
            phone: '+7'
        };
    }

    changeHandler = (e) => {

        let phone = e.target.value.replace(/[^0-9]/g, '');
        let mask = '+7 (999) 999-99-99';

        if(!phone) {
            phone = '+7';
            mask = '';
        }

        this.setState({
            mask,
            phone
        });

        this.props.handler(phone);
    }

    render() {

        const defaultValue = '+7';

        return (<div className="field">
            <MaskedInput
            maskChar={null}
            mask={this.state.mask}
            name="phone"
            ref="input"
            id={this.props.id}
            className={'field__input'}
            type="tel"
            onChange={this.changeHandler}
            onFocus={this.changeHandler}
            onBlur={this.changeHandler}
            value={this.state.phone}
            />
            <label className="field__label" htmlFor={this.props.id}>Номер телефона:</label>

            <div className="field__bar"></div>
            <div className="field__message">Введите сумму</div>
        </div>);
    }
}