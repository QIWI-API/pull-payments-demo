import React, { Component } from 'react';

import './MobileForm.scss';

import { translate } from 'react-i18next';

import Field from '../Field';
import Button from '../Button';
import IconsRaw from '../IconsRow';

@translate()
export default class MobileForm extends Component {
    constructor(props) {
        super(props);
    }

    onSubmitForm = (e) => {
        e.preventDefault();

        this.props.stateChanger();
    };

    render() {
        const { t } = this.props;
        return (

            <form onSubmit={this.onSubmitForm}>
                <h2>{t('mobile-form')}</h2>

                <div className="mobile-form">
                    <Field
                        id={this.props.id}
                        error={this.props.numberError}
                        handler={this.props.getPhoneNumber}
                    />

                    {this.props.icons ? (
                        <IconsRaw
                            wrapperClassName={'mobile-form__icons-row'}
                            icons={this.props.icons}
                        />
                    ) : null}
                </div>

                <Button
                    buttonText={`${t('pay')} ${this.props.itemCost} ₽`}
                    type={'submit'}
                    disabled={this.props.phone.length <= 10}
                />

                <Button
                    buttonText={t('come-back')}
                    onClick={this.props.returning}
                    classNames={'mobile-form__link'}
                />
            </form>
        );
    }
}
