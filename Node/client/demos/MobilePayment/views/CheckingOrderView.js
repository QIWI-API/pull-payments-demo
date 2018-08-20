import React, { Component } from 'react';

import CheckingOrder from '../../../components/CheckingOrder';
import Button from '../../../components/Button';
import RadioButton from '../../../components/RadioButton';
import IconsRaw from '../../../components/IconsRow';

import { translate } from 'react-i18next';


const CheckingOrderView = (props) => {

    const id = props.id;

    const currentPaymentMethod = 'mobile';

    const { t } = props;

    return (
        <CheckingOrder itemCost={props.itemCost} itemPic={props.itemPic}>

            <h2 className="checking-order__title">{t('card_second-title')}</h2>
            <div className="checking-order__select-block">
                {props.radioButtons.map((button, index)=>{
                    return (<RadioButton labelText={button.main} labelTextAdditional={button.additional} index={index} key={index} nameGroup={id} disabled={button.disabled} handler={button.handler} checked={props.currentPaymentMethod === button.buttonPaymentMethod}><IconsRaw icons={button.icons}/></RadioButton>);
                })}
            </div>

            <Button buttonText={`${t('pay')} ${props.itemCost} ₽`} onClick={props.stateChanger} disabled={!(props.currentPaymentMethod === currentPaymentMethod)}/>

        </CheckingOrder>
    );
};

export default translate()(CheckingOrderView);