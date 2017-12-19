import React, { Component } from 'react';

import CheckingOrder from '../../../components/CheckingOrder';
import Button from '../../../components/Button';

import payments from '../../../assets/payments.png';

const CheckingOrderView = (props) => {

    const id = props.id;

    const currentPaymentMethod = 'wallet';

    return (
        <CheckingOrder itemCost={props.itemCost} itemPic={props.itemPic}>

            <Button buttonText={'Оплатить'} onClick={props.stateChanger} classNames={'checking-order__redirect'}/>

            <img src={payments} className="checking-order__payments" alt="payments" width="189"/>

        </CheckingOrder>
    );
};

export default CheckingOrderView;