import React, { Component } from 'react';

import './SuccessPage.scss';

import successIcon from '../../assets/success.svg';

import Button from '../Button';

import { translate } from 'react-i18next';

@translate()
export default class SuccessPage extends Component {
    render() {

        const { t } = this.props;
        return (
            <div>
                <h2>{t('success-page_main')}</h2>

                <div className="success-form">
                    <img
                        className="success-form__pic"
                        src={this.props.itemPic}
                        alt="Item"
                    />
                    <div className="success-form__result">
                        <img
                            className="success-form__icon"
                            src={successIcon}
                            alt="info"
                            width="32"
                            height="32"
                        />
                        <p className="success-form__status">
                            {t('success-page_status')}{' '}
                            <span className="success-form__item">
                                {t('headphones')} Philips SHE3855
                            </span>
                        </p>
                    </div>
                </div>

                <h3 className="success-form__about-payment-title">
                    {t('success-page_about-payment-title')}
                </h3>

                <ul className="values">
                    <li className="values__lines values__lines--dotted values__lines--minor values__lines--right-minor">
                        <span>{t('product-order-number')}</span>
                        <span>{this.props.number}</span>
                    </li>
                    <li className="values__lines values__lines--dotted values__lines--minor values__lines--right-minor">
                        <span>{t('product-payment')}</span>
                        <span>{this.props.method}</span>
                    </li>
                    <li className="values__lines values__lines--dotted">
                        <span>{t('product_sum')}</span>
                        <span>{this.props.sum} ₽</span>
                    </li>
                </ul>

                <Button
                    buttonText={t('success-page_button')}
                    onClick={this.props.stateChanger}
                    classNames={'success-form__link'}
                />
            </div>
        );
    }
}
