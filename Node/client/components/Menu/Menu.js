import React, { Component } from 'react';

import './Menu.scss';

export default class Menu extends Component {

    constructor(props) {

        super(props);
    }

    render() {
        return (<nav className="menu">
            <ul>
                <li>
                    <a href="#" className="menu__item--active">Оплата с баланса мобильного →</a>
                    <ul>
                        <li><a href="#">Документация</a></li>
                        <li><a href="#">Github</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">Выставление счета на сайте партнера →</a>
                    <ul>
                        <li><a href="#">Документация</a></li>
                        <li><a href="#">Github</a></li>
                    </ul>
                </li>
            </ul>


        </nav>)
    }
}