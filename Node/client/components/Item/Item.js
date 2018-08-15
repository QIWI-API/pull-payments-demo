import React from 'react';
import {translate} from 'react-i18next';
import './Item.scss';

const Item = (props) => {

    const deliveryCost = 0;
    const { t, tReady } = props;
    return (

        <div className="item">
            <img
                className="item__pic"
                src={props.itemPic}
                alt="Item"
            />

            <h3 className="item__title">Philips SHE3855</h3>

            <p className="item__about">
                {t('card_item-about')}
            </p>

            <ul className="values">
                <li className="values__lines values__lines--dotted">
                    <span>{t('card_item-quantity')}</span>
                    <span>{props.itemCost} ₽</span>
                </li>
                <li className="values__lines values__lines--dotted values__lines--minor">
                    <span>{t('card_item-delivery')}</span>
                    <span>{deliveryCost} ₽</span>
                </li>
                <li className="values__lines values__lines--counted">
                    <span>{t('card_item-total')}</span>
                    <span>{props.itemCost + deliveryCost} ₽</span>
                </li>
            </ul>
        </div>
    );
};

export default translate()(Item);
