import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';

import link from '../../assets/external-link.svg';

import './Menu.scss';

export default class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const order = this.props.order;

        const info = this.props.info;

        const toggleMenu = this.props.toggleMenu;

        const isMenuOpen = this.props.isMenuOpen;

        return (
            <nav className="menu">
                <div className="main-menu-wrapper">
                    <ul className="main-menu">
                        <li className="main-menu-item">
                            <a href="https://developer.qiwi.com/#products">
                                Документация
                            </a>
                        </li>
                        <li className="main-menu-item main-menu-item--active">
                            <a href="https://developer.qiwi.com/demo">Демо</a>
                        </li>
                        <li className="main-menu-item">
                            <a href="https://developer.qiwi.com/#news">
                                Новости
                            </a>
                        </li>
                        <li className="main-menu-item">
                            <a href="https://developer.qiwi.com/#contacts">
                                Контакты
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="nav" onClick={toggleMenu}>
                    <Scrollspy
                        items={order}
                        currentClassName="nav__item--active">
                        {order.map((method, index) => {
                            return (
                                <li key={index}>
                                    <a
                                        href={`#${info[method].id}`}
                                        className="nav__item-main-link">
                                        {info[method].name}{' '}
                                        <span className="nav__indicator">
                                            →
                                        </span>
                                    </a>
                                    <ul className="nav__item-second-links">
                                        {info[method].doc ? (
                                            <li>
                                                <a
                                                    href={info[method].doc}
                                                    target="_blank"
                                                    className="nav__item-second-link">
                                                    Документация{' '}
                                                    <img
                                                        src={link}
                                                        alt="link"
                                                        height="10"
                                                    />
                                                </a>
                                            </li>
                                        ) : null}
                                        {info[method].git ? (
                                            <li>
                                                <a
                                                    href={info[method].git}
                                                    target="_blank"
                                                    className="nav__item-second-link">
                                                    Github{' '}
                                                    <img
                                                        src={link}
                                                        alt="link"
                                                        height="10"
                                                    />
                                                </a>
                                            </li>
                                        ) : null}
                                    </ul>
                                </li>
                            );
                        })}
                    </Scrollspy>
                </div>
            </nav>
        );
    }
}
