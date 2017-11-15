import React, { Component } from 'react';

import './CheckingOrder.scss';

import beeIcon from '../../assets/bee.svg';
import megaIcon from '../../assets/mega.svg';
import mtsIcon from '../../assets/mts.svg';
import teleIcon from '../../assets/tele.svg';

import Item from '../../../../components/Item';
import Button from '../../../../components/Button';
import RadioButton from '../../../../components/RadioButton';


const CheckingOrder = (props) => {

    const RadioButtons = [{
        main: 'Картой',
        additional: '1% комиссии',
        icons: []
    }, {
        main: 'C баланса мобильного',
        additional: '0% комиссии',
        icons: [ beeIcon, megaIcon, mtsIcon, teleIcon]
    }, {
        main: 'Наличными',
        additional: '0% комиссии',
        icons: []
    }];

    const nameGroup = 'mobilePayment';

    return (
        <div>
            <h2 className="checking-order__title">Проверьте ваш заказ</h2>

            <Item amount={props.itemCost}/>

            <h2 className="checking-order__title">Выберите способ оплаты</h2>
            <div className="checking-order__select-block">
                {RadioButtons.map((button, index)=>{
                    return (<RadioButton labelText={button.main} labelTextAdditional={button.additional} index={index} key={index} nameGroup={nameGroup}>{button.icons.map((icon, index)=>{
                            return (<img src={icon} alt="icon" width="20" height="20" key={index} className="checking-order__icon"/>);
                    })}</RadioButton>);
                })}
            </div>


            <Button buttonText={`Оплатить ${props.itemCost} ₽`}/>
        </div>
    );
};

export default CheckingOrder;