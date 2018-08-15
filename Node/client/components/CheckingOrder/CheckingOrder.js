import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Item from '../Item';


const CheckingOrder = (props) => {
    const { t } = props;
    return (<div>
        <h2>{t('card_first-title')}</h2>

        <Item itemCost={props.itemCost} itemPic={props.itemPic}/>

        {props.children}
    </div>)
}

export default translate()(CheckingOrder);