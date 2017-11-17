import React, { Component } from 'react';

import './Item.scss';

const Item = (props) => {
    return (
        <div className="item">

            <h3 className="item__title">Philips SHE3855</h3>

            <p className="item__about">Стильные и удобные наушники-вкладыши Philips Chromz (SHE3855) с превосходным дизайном обеспечивают воспроизведение насыщенных басов. Цвета матовой отделки, выполненной методом вакуумной металлизации, соответствуют цветам iPhone 6s.</p>

            <img className="item__pic" src={props.itemPic} alt="Item" height="128"/>

            <ul className="values">
                <li className="values__lines values__lines--dotted">
                    <span>1 шт</span>
                    <span>{props.amount} ₽</span>
                </li>
                <li className="values__lines values__lines--dotted values__lines--minor">
                    <span>Доставка</span>
                    <span>0 ₽</span>
                </li>
                <li className="values__lines values__lines--counted">
                    <span>Итог</span>
                    <span>{props.amount} ₽</span>
                </li>
            </ul>

        </div>
    );
};

export default Item;