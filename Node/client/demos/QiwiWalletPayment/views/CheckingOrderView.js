import React, { Component } from 'react';

import CheckingOrder from '../../../components/CheckingOrder';
import Button from '../../../components/Button';
import RadioButton from '../../../components/RadioButton';
import LinkLogo from '../../../components/Link';

const CheckingOrderView = (props) => {

    const id = props.id;

    const currentPaymentMethod = 'wallet';

    return (
        <CheckingOrder itemCost={props.itemCost} itemPic={props.itemPic}>
            <h2 className="checking-order__title">Выберите способ оплаты</h2>

            <div className="checking-order__select-block">

                {props.radioButtons.map((button, index)=>{
                    if(button.type == "withlogo"){
                        return (
                            <div style={{display: "flex"}}>
                                <RadioButton labelText={button.main} labelTextAdditional={button.additional} index={index} key={index} nameGroup={id} disabled={button.disabled} handler={button.handler}/>
                                <LinkLogo imgLink={button.imgLink} link={button.link} textLogo={button.textLogo} />
                        </div>
                        )
                    }
                    return (<RadioButton labelText={button.main} labelTextAdditional={button.additional} index={index} key={index} nameGroup={id} disabled={button.disabled} handler={button.handler}/>);
                })}

            </div>




            <Button buttonText={`Оплатить ${props.itemCost} ₽`} onClick={props.stateChanger} disabled={!(props.currentPaymentMethod === currentPaymentMethod) }/>
        </CheckingOrder>
    );
};

export default CheckingOrderView;