import React, { Component } from 'react';

import CheckingOrder from '../../../components/CheckingOrder';
import Button from '../../../components/Button';

import payments from '../../../assets/payments.png';
import LinkLogo from '../../../components/Link';

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
     <div class="checking-order_Link">
         <Button  buttonText={'Оплатить'} onClick={props.stateChanger} classNames={'checking-order__redirect'}/>
         <LinkLogo className={'LinkLogoCheckOutRedirect'} textLogo={'Выбрать логотип QIWI'} link = {'https://corp.qiwi.com/business/connect/logotype.action'}
                   imgLink={'assets/qiwi_sign_rgb.png'}/>
     </div>


            <img src={payments} className="checking-order__payments" alt="payments" width="189"/>

        </CheckingOrder>
    );
};

export default CheckingOrderView;