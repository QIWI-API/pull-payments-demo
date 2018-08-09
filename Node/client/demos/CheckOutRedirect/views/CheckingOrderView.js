import React, { Component } from 'react';

import CheckingOrder from '../../../components/CheckingOrder';
import Button from '../../../components/Button';

import payments from '../../../assets/payments.png';
import Link from '../../../components/Link';

const CheckingOrderView = (props) => {

    const id = props.id;

    document.body.style.overflow = 'auto';

    if(props.errorState) {
        document.body.style.overflow = 'hidden';
    }

    return (

        <CheckingOrder itemCost={props.itemCost} itemPic={props.itemPic}>

            {props.errorState?<div className="checking-order__backdrop">
                <div className="checking-order__backdrop-text">
                    <div>Не отображается страница QIWI?</div>

                    <button type="button" onClick={() => window.location.reload()}>Попробуйте перезагрузить страницу</button>
                </div>
            </div>:null}

         <Button  buttonText={'Оплатить'} onClick={props.stateChanger} classNames={'checking-order__redirect'}/>




            <img src={payments} className="checking-order__payments" alt="payments" width="189"/>
            <Link className={'checking-order__link'} textLogo={'Выбрать логотип QIWI'} link = {'https://corp.qiwi.com/business/connect/logotype.action'}/>

        </CheckingOrder>
    );
};

export default CheckingOrderView;