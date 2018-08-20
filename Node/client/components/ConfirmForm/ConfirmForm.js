import React, { Component } from 'react';

import './ConfirmForm.scss';

import infoIcon from '../../assets/information.svg';

import Button from '../Button';

import { translate } from 'react-i18next';

@translate()
export default class ConfirmForm extends Component {
    render() {
    const{ t } = props;
        return (<div>
            <h2>{t('confirmation-by-SMS_main')}</h2>

            <div className="confirm-form">
                <img className="confirm-form__icon" src={infoIcon} alt="info" width="32" height="32"/>
                <ul className="confirm-form__instruction">
                    <li>{t('confirmation-by-SMS_secondary-first')}</li>
                    <li>{t('confirmation-by-SMS_secondary-second')}.</li>
                    <li>{t('confirmation-by-SMS_secondary-third')}</li>
                </ul>
            </div>


            <Button buttonText={t('confirmation-by-SMS_button')} onClick={this.props.stateChanger}/>
        </div>)
    }
}