import React, { Component } from 'react';

import Item from '../../../components/Item';
import Button from '../../../components/Button';
import RadioButton from '../../../components/RadioButton';


const CheckingOrder = (props) => {

    const id = props.id;

    return (
        <div>
            <h2 className="checking-order__title">Проверьте ваш заказ</h2>

            <Item amount={props.itemCost} itemPic={props.itemPic}/>

            <h2 className="checking-order__title">Выберите способ оплаты</h2>
            <div className="checking-order__select-block">
                {props.radioButtons.map((button, index)=>{
                    return (<RadioButton labelText={button.main} labelTextAdditional={button.additional} index={index} key={index} nameGroup={id}/>);
                })}
            </div>


            <Button buttonText={`Оплатить ${props.itemCost} ₽`} onClick={props.stateChanger}/>
        </div>
    );
};

export default CheckingOrder;