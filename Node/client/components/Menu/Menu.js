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

        return (<nav className="menu">
            <Scrollspy items={order} currentClassName="menu__item--active">

                {order.map((method, index)=>{
                    return (<li key={index}>
                        <a href={`#${info[method].id}`} className="menu__item-main-link">{info[method].name} <span className="menu__indicator">→</span></a>
                        <ul className="menu__item-second-links">
                            {info[method].doc?<li><a href={info[method].doc} className="menu__item-second-link">Документация <img src={link} alt="link" height="10"/></a></li>: null}
                            {info[method].git?<li><a href={info[method].git} className="menu__item-second-link">Github <img src={link} alt="link" height="10"/></a></li>:null}
                        </ul>
                    </li>);
                })}

             </Scrollspy>


        </nav>)
    }
}