import React, { Component } from 'react';
import paymentByBill from '../../../examples/pull-payments-example/request.js';

import './MobilePayment.scss';

import itemPic from '../../assets/item.png';
import beeIcon from '../../assets/bee.svg';
import megaIcon from '../../assets/mega.svg';
import mtsIcon from '../../assets/mts.svg';
import teleIcon from '../../assets/tele.svg';

import Card from '../../components/Card';
import CheckingOrderView from './views/CheckingOrder';
import MobileForm from '../../components/MobileForm';
import ConfirmForm from '../../components/ConfirmForm';
import SuccessPage from '../../components/SuccessPage';
import ErrorPage from '../../components/ErrorPage';

/*
 ссылка вида #[метод оплаты]/[номер оплаты]/[success/fail]
 */

export default class MobilePayment extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentPaymentMethod: '',
            phone: ''
        };

        this.itemCost = 5;
    }

    stateChanger = (state) => {
        return () => this.props.stateChanger(state);
    }

    getPhoneNumber = (phone) =>{

        this.setState({
            phone
        });
    }


    makeRequest = () => {

        const url = 'paymentByBill';

        const phone = `+${this.state.phone}`;

        paymentByBill(url, phone, this.itemCost).then((data) => {

        });

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

        const {currentPaymentMethod, phone} = this.state;

        const id = state.id;

        const icons = [ beeIcon, megaIcon, mtsIcon, teleIcon];

        const itemCost = this.itemCost;

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
            main: 'C баланса мобильного',
            disabled: false,
            additional: '0% комиссии',
            handler: this.paymentMethod('mobile'),
            icons
        }, {
            main: 'Наличными',
            disabled: true,
            additional: '0% комиссии',
            handler: this.paymentMethod('card'),
            icons: []
        }];

        const statesMap = {
            checkingOrder:{
                view: <CheckingOrderView itemCost={itemCost} itemPic={itemPic} stateChanger={this.stateChanger('paymentByMobile')} id={id} radioButtons={radioButtons} currentPaymentMethod={currentPaymentMethod}/>
            },
            paymentByMobile:{
                view: <MobileForm itemCost={itemCost} stateChanger={this.stateChanger('confirmation')} getPhoneNumber={this.getPhoneNumber} phone={phone} id={id} icons={icons}/>
            },
            confirmation:{
                view: <ConfirmForm stateChanger={this.makeRequest}/>
            },
            success: {
                view: <SuccessPage stateChanger={this.stateChanger('checkingOrder')} itemPic={itemPic} number={orderInfo.number} method={orderInfo.method} sum={orderInfo.sum}/>
            },
            error: {
                view: <ErrorPage stateChanger={this.stateChanger('checkingOrder')} requestAgain={this.makeRequest} errorText={errorText}/>
            }
        };

        return (<div>
            <Card title={'Оплата товаров с помощью мобильного'} id={id}>{statesMap[state.view].view}</Card>
        </div>)
    }
}