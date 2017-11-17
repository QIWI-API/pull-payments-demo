import React, { Component } from 'react';

import './SuccessPage.scss';

import successIcon from '../../assets/success.svg';

import Button from '../Button';


export default class SuccessPage extends Component {
    render() {

        return (<div>
            <h2 className="checking-order__title">Оплата прошла успешно</h2>

            <div className="success-form">
                <img className="success-form__icon" src={successIcon} alt="info" width="32" height="32"/>
                <p className="success-form__status" >Вы успешно совершили покупку <span className="success-form__item">наушников Philips SHE3855</span></p>
                <img className="success-form__pic" src={this.props.itemPic} alt="Item" height="128"/>
            </div>

            <h3 className="success-form__about-payment-title">Данные платежа</h3>

             <ul className="values">
                <li className="values__lines values__lines--dotted values__lines--minor values__lines--right-minor">
                    <span>Номер закза</span>
                    <span>{this.props.number}</span>
                </li>
                <li className="values__lines values__lines--dotted values__lines--minor values__lines--right-minor">
                    <span>Способ оплаты</span>
                    <span>{this.props.method}</span>
                </li>
                <li className="values__lines values__lines--dotted">
                    <span>Сумма платежа</span>
                    <span>{this.props.sum} ₽</span>
                </li>
            </ul>


            <Button buttonText={'Вернуться на главную страницу'} onClick={this.props.stateChanger} classNames={'success-form__link'}/>
        </div>)
    }
}