import React, { Component } from 'react';

import './MobilePayment.scss';

import itemPic from './assets/item.png'

import Card from '../../components/Card';
import CheckingOrder from './views/CheckingOrder';

/*
 ссылка вида #[метод оплаты]/[номер оплаты]/[success/fail]
 */

export default class MobilePayment extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const state = this.props.state;

        const statesMap = {
            checkingOrder:{
                view: <CheckingOrder itemCost={state.info.itemCost}/>
            },
            paymentByMobile:{
                view: <div>mobilePayment</div>
            },
            confirmation:{
                view: <div>confirmation</div>
            },
            success: {
                view: <div>success</div>
            },
            error: {
                view: <div>error</div>
            }
        };

        return (<div>
            <Card title={'Оплата товаров с помощью мобильного'}>{statesMap[state.view].view}</Card>
        </div>)
    }
}