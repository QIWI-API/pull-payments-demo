import React, { Component } from 'react';

import './QiwiWalletPayment.scss';

import itemPic from './assets/item.png'

import Card from '../../components/Card';
import CheckingOrder from './views/CheckingOrder';

/*
 ссылка вида #[метод оплаты]/[номер оплаты]/[success/fail]
 */

export default class QiwiWalletPayment extends Component {

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
            success: {
                view: <div>success</div>
            },
            error: {
                view: <div>error</div>
            }
        };

        return (<div>
            <Card title={'Оплата товаров с помощью QIWI кошелька'}>{statesMap[this.props.state.view].view}
            </Card>
        </div>)
    }
}