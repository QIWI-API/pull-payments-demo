import React, { Component } from 'react';
import cn from 'classnames';

import './Header.scss';
import Logo from './assets/Logo.png';

export default class Header extends Component {
    render() {

        const langClass = (lang) => {
            return cn({
                'header__menu-item': true,
                'header__menu-item--active': this.props.lang === lang
            });
        };

        return (<header className="header">

            <a href="/" className="header__logo">
                <img alt="QIWI" src={Logo} height="43" />
            </a>

            <ul className="header__menu">
                <li className="header__menu-item">
                    <a href="">Документация</a>
                </li>
                <li className="header__menu-item header__menu-item--active">
                    <a href="">Демо</a>
                </li>
            </ul>

            <div className="header__help">
                <div className="header__help-title">Вопросы</div>
                <a href="mailto:api_help@qiwi.com">api_help@qiwi.com</a>
            </div>

            <ul className="header__lang">
                <li className={langClass('en')}>
                    <a href="">En</a>
                </li>
                <li className={langClass('ru')}>
                    <a href="">Ru</a>
                </li>
            </ul>

        </header>)
    }
}