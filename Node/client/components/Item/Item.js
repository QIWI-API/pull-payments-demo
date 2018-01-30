import React, { Component } from 'react';

import './Item.scss';

const Item = (props) => {
    const deliveryCost = 0;

    return (
        <div className="item">
            <img
                className="item__pic"
                src={props.itemPic}
                alt="Item"
            />

            <h3 className="item__title">Philips SHE3855</h3>

            <p className="item__about">
                Стильные и удобные наушники-вкладыши Philips Chromz (SHE3855) с
                превосходным дизайном обеспечивают воспроизведение насыщенных
                басов. Цвета матовой отделки, выполненной методом вакуумной
                металлизации, соответствуют цветам iPhone 6s.
            </p>

            <ul className="values">
                <li className="values__lines values__lines--dotted">
                    <span>1 шт</span>
                    <span>{props.itemCost} ₽</span>
                </li>
                <li className="values__lines values__lines--dotted values__lines--minor">
                    <span>Доставка</span>
                    <span>{deliveryCost} ₽</span>
                </li>
                <li className="values__lines values__lines--counted">
                    <span>Итог</span>
                    <span>{props.itemCost + deliveryCost} ₽</span>
                </li>
            </ul>
        </div>
    );
};

export default Item;
