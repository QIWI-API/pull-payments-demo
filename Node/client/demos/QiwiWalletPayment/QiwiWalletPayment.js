import React, { Component } from 'react';
import paymentForMobile from '../../../examples/pull-payments-white-label-example/request.js';

import './QiwiWalletPayment.scss';

import itemPic from '../../assets/item.png'

import Card from '../../components/Card';
import CheckingOrderView from './views/CheckingOrder';
import MobileForm from '../../components/MobileForm';
import SuccessPage from '../../components/SuccessPage';
import ErrorPage from '../../components/ErrorPage';

/*
 ссылка вида #[метод оплаты]/[номер оплаты]/[success/fail]
 */

export default class QiwiWalletPayment extends Component {

    constructor(props) {

        super(props);

        this.state = {
            currentPaymentMethod: ''
        };

    }

    stateChanger = (state) => {
        return () => this.props.stateChanger(state);
    }

    makeRequest = () => {

        const url = 'paymentByBill';

        const phone = `+${this.state.phone}`;

        paymentByBill(url, phone, this.itemCost).then((data) => {
            this.redirect(data.redirect);
        });

    }

    makeRedirect = (url) => {
        window.location.href = url;
    }

    paymentMethod = (currentPaymentMethod) => {

        return () => {
            this.setState({
                currentPaymentMethod
            })
        }
    }


    render() {

        const state = this.props.state;

        const {currentPaymentMethod} = this.state;

        const id = state.id;

        const itemCost = 5;

        const orderInfo = {
            number: '540-201',
            method: 'мобильный баланс',
            sum: '5'
        };

        const errorText = 'Недостаточно средств на счете.';

        const radioButtons = [{
            main: 'Картой',
            disabled: true,
            additional: '1% комиссии',
            handler: this.paymentMethod('card'),
            icons: []
        }, {
            main: 'Qiwi кошельком',
            disabled: false,
            additional: '0% комиссии',
            handler: this.paymentMethod('wallet'),
            icons: []
        }, {
            main: 'Наличными',
            disabled: true,
            additional: '0% комиссии',
            handler: this.paymentMethod('cash'),
            icons: []
        }];

        const statesMap = {
            checkingOrder:{
                view: <CheckingOrderView itemCost={itemCost} itemPic={itemPic} stateChanger={this.stateChanger('paymentByMobile')} radioButtons={radioButtons} id={id} currentPaymentMethod={currentPaymentMethod}/>
            },
            paymentByMobile:{
                view: <MobileForm itemCost={itemCost} stateChanger={this.makeRequest} id={id} />
            },
            success: {
                view: <SuccessPage stateChanger={this.stateChanger('checkingOrder')} itemPic={itemPic} number={orderInfo.number} method={orderInfo.method} sum={orderInfo.sum}/>
            },
            error: {
                view: <ErrorPage stateChanger={this.stateChanger('checkingOrder')} requestAgain={this.makeRequest} errorText={errorText}/>

            }
        };

        return (<div>
            <Card title={'Оплата товаров с помощью QIWI кошелька'} id={id}>{statesMap[state.view].view}
            </Card>
        </div>)
    }
}