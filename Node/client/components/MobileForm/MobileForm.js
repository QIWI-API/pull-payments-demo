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
            <h2>Введите номер телефона</h2>

            <div className="mobile-form">

                <Field id={this.props.id} error={this.props.numberError} handler={this.props.getPhoneNumber}/>

                {this.props.icons?<IconsRaw wrapperClassName={'mobile-form__icons-row'} icons={this.props.icons}/>:null}
            </div>

            <Button buttonText={`Оплатить ${this.props.itemCost} ₽`} onClick={this.props.stateChanger} disabled={this.props.phone.length <= 10}/>

            <Button buttonText={'Вернуться назад'} onClick={this.props.returning} classNames={'mobile-form__link'}/>

        </div>)
    }
}