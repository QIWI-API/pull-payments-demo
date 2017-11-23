import React, { Component } from 'react';

import Item from '../Item';


const CheckingOrder = (props) => {

    return (<div>
        <h2>Проверьте ваш заказ</h2>

        <Item itemCost={props.itemCost} itemPic={props.itemPic}/>

        {props.children}
    </div>)
}

export default CheckingOrder;