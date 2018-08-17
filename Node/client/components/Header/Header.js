import React, { Component } from 'react';

import burgerMenu from './assets/burger.svg';

import './Header.scss';

import { translate } from 'react-i18next';

@translate()
export default class Header extends Component {
    render() {
        const isMenuOpen = this.props.isMenuOpen;
        const { t } = this.props;

        return (
            <header className="header">
                <button
                    type="button"
                    className="header__toggle-menu"
                    onClick={this.props.toggleMenu}>
                    <img src={burgerMenu} alt="Menu" width="22" />
                </button>

                <a href="/" className="header__logo">
                    <img
                        alt="QIWI"
                        src="https://static.qiwi.com/img/qiwi_com/logo/logo-qiwi-slogan.svg"
                        height="43"
                    />
                </a>

                <ul className="header__menu">
                    <li className="header__menu-item">
                        <a href={this.props.header_documentation}>
                            {t('documentation')}
                        </a>
                    </li>
                    <li className="header__menu-item header__menu-item--active">
                        <a href={window.location.href}>
                            {t('demo')}
                            </a>
                    </li>
                </ul>

                <div className="header__help">
                    <div className="header__help-title">
                        {t('feedback')}
                    </div>
                    <a href="mailto:api_help@qiwi.com">api_help@qiwi.com</a>
                </div>

                <ul className="header__lang">
                    <li className="header__menu-item">
                        <button
                            type="button"
                            onClick={() => {
                                this.props.changeLang('/en/');

                            }}
                            disabled={this.props.lang === 'en'}>
                            EN
                        </button>
                    </li>
                    <li className="header__menu-item">
                        <button
                            type="button"
                            onClick={() => {
                                this.props.changeLang('/ru/');

                            }}
                            disabled={this.props.lang === 'ru'}>
                            RU
                        </button>
                    </li>
                </ul>
            </header>
        );
    }
}
