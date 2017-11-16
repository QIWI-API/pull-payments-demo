import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';

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
                        <a href={`#${info[method].id}`}>{info[method].name} →</a>
                        <ul>
                            {info[method].doc?<li><a href={info[method].doc}>Документация</a></li>: null}
                            {info[method].git?<li><a href={info[method].git}>Github</a></li>:null}
                        </ul>
                    </li>);
                })}

             </Scrollspy>


        </nav>)
    }
}