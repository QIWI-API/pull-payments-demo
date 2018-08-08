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
     <div style={{display: "flex"}}>
         <Button  buttonText={'Оплатить'} onClick={props.stateChanger} classNames={'checking-order__redirect'}/>
         <LinkLogo className={'LinkLogoCheckOutRedirect'}/>
     </div>


            <img src={payments} className="checking-order__payments" alt="payments" width="189"/>

        </CheckingOrder>
    );
};

export default CheckingOrderView;