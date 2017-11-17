import React, { Component } from 'react';

import './ErrorPage.scss';

import errorIcon from '../../assets/stop.svg';

import Button from '../Button';


export default class ErrorPage extends Component {
    render() {

        return (<div>
            <h2 className="checking-order__title">Возникла ошибка при оплате</h2>

            <div className="error-form">
                <img className="error-form__icon" src={errorIcon} alt="info" width="32" height="32"/>
                <p className="error-form__status" >Не удалось совершить платеж. <span className="error-form__item">{this.props.errorText}</span></p>
            </div>

            <Button buttonText={'Повторить платеж'} onClick={this.props.requestAgain}/>

            <Button buttonText={'Вернуться на главную страницу'} onClick={this.props.stateChanger} classNames={'error-form__link'}/>
        </div>)
    }
}