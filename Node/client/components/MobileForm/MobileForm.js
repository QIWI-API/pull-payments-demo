import React, { Component } from 'react';

import './MobileForm.scss';

import Field from '../Field';
import Button from '../Button';
import IconsRaw from '../IconsRow';

export default class MobileForm extends Component {

    constructor (props) {
        super(props);
    }

    render() {

        return (<div>
            <h2 className="checking-order__title">Введите номер телефона</h2>

            <div className="mobile-form">

                <Field id={this.props.id} handler={this.props.getPhoneNumber}/>

                {this.props.icons?<IconsRaw wrapperClassName={'mobile-form__icons-row'} icons={this.props.icons}/>:null}
            </div>

            <Button buttonText={`Оплатить ${this.props.itemCost} ₽`} onClick={this.props.stateChanger} disabled={this.props.phone.length <= 10}/>
        </div>)
    }
}