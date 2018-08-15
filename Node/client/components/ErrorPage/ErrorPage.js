import React, { Component } from 'react';

import './ErrorPage.scss';

import errorIcon from '../../assets/stop.svg';

import Button from '../Button';

import { translate } from 'react-i18next';

@translate()
export default class ErrorPage extends Component {
    render() {
    const { t } = this.props;
        return (<div>
            <h2>{t('error-with-payment')}</h2>

            <div className="error-form">
                <img className="error-form__icon" src={errorIcon} alt="info" width="32" height="32"/>
                <p className="error-form__status" >{t('error-with-payment_status')} <span className="error-form__item">{this.props.errorText}</span></p>
            </div>

            <Button buttonText={t('error-with-payment_button')} onClick={this.props.stateChanger}/>
        </div>)
    }
}