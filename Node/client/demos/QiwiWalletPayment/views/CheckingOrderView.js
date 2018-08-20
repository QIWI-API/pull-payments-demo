import React, { Component } from 'react';

import CheckingOrder from '../../../components/CheckingOrder';
import Button from '../../../components/Button';
import RadioButton from '../../../components/RadioButton';
import LinkWithIcon from '../../../components/LinkWithIcon';
import {radioButtonsTypes} from '../QiwiWalletPayment';
import qiwiSign from "../../../assets/qiwi_sign_rgb.png";
import { translate } from 'react-i18next';

const CheckingOrderView = (props) => {

    const id = props.id;

    const currentPaymentMethod = 'wallet';
    const { t } = props;
    return (
        <CheckingOrder itemCost={props.itemCost} itemPic={props.itemPic}>
            <h2 className="checking-order__title">{t('card_second-title')}</h2>
            <div className="checking-order__select-block">

                {props.radioButtons.map((button, index)=>{
                    if(button.type == radioButtonsTypes.BUTTON_WITH_LINK){
                        return (
                            <div style={{display: "flex"} } key={index}>
                                <RadioButton labelText={button.main} labelTextAdditional={button.additional} index={index} key={index} nameGroup={id} disabled={button.disabled} checked={props.currentPaymentMethod === button.buttonPaymentMethod} handler={button.handler}/>
                                <LinkWithIcon imgLink={qiwiSign} link={"https://corp.qiwi.com/business/connect/logotype.action"} textLogo={t('standards-of-representation')} />
                        </div>
                        )
                    }
                    return (<RadioButton labelText={button.main} labelTextAdditional={button.additional} index={index} key={index} nameGroup={id} disabled={button.disabled}  handler={button.handler} checked={props.currentPaymentMethod === button.buttonPaymentMethod}/>);
                })}

            </div>
            <Button buttonText={`${t('pay')} ${props.itemCost} ₽`} onClick={props.stateChanger} disabled={!(props.currentPaymentMethod === currentPaymentMethod)} />
        </CheckingOrder>
    );
};

export default translate()(CheckingOrderView);