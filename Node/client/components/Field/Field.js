import React, { Component } from 'react';
import cn from 'classnames';
import MaskedInput from 'react-input-mask';

import './Field.scss';

export default class Field extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mask: '',
            phone: ''
        };
    }

    /* detectAutofill(number) {
        console.log(number);
        if (number.length > 10 && /^[7]{2}/g.exec(number)) {
            number = number.slice(2);
        }

        return number;
    } */
    
    changeHandler = (e) => {
        let phone = e.target.value.replace(/[^0-9]/g, '');

        let mask = '+7 (999) 999-99-99';

        if (!phone) {
            phone = '+7';
            mask = '';
        }

        this.setState({
            mask,
            phone
        });

        this.props.handler(phone);
    };

    render() {
        const fieldClass = () => {
            return cn({
                field: true,
                'field__field--error': this.props.error
            });
        };

        const defaultValue = '+7';

        return (
            <div className={fieldClass()}>
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
                <label className="field__label" htmlFor={this.props.id}>
                    Номер телефона:
                </label>

                <div className="field__bar" />
                <div className="field__message">{this.props.error}</div>
            </div>
        );
    }
}
