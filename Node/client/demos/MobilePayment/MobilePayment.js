import React, { Component } from 'react';

import './MobilePayment.scss';

import itemPic from '../../assets/item.png';
import beeIcon from '../../assets/bee.svg';
import megaIcon from '../../assets/mega.svg';
import mtsIcon from '../../assets/mts.svg';
import teleIcon from '../../assets/tele.svg';

import Card from '../../components/Card';
import CheckingOrder from './views/CheckingOrder';
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
    }

    stateChanger = (state) => {
        return () => this.props.stateChanger(state);
    }

    request = () => {


        this.redirect();

    }

    redirect = () => {

    }


    render() {

        const state = this.props.state;

        const id = state.id;

        const icons = [ beeIcon, megaIcon, mtsIcon, teleIcon];

        const itemCost = 5;

        const orderInfo = {
            number: '540-201',
            method: 'мобильный баланс',
            sum: '5'
        };

        const errorText = 'Недостаточно средств на счете.';

        const radioButtons = [{
            main: 'Картой',
            additional: '1% комиссии',
            icons: []
        }, {
            main: 'C баланса мобильного',
            additional: '0% комиссии',
            icons
        }, {
            main: 'Наличными',
            additional: '0% комиссии',
            icons: []
        }];

        const statesMap = {
            checkingOrder:{
                view: <CheckingOrder itemCost={itemCost} itemPic={itemPic} stateChanger={this.stateChanger('paymentByMobile')} id={id} radioButtons={radioButtons}/>
            },
            paymentByMobile:{
                view: <MobileForm itemCost={itemCost} stateChanger={this.stateChanger('confirmation')} id={id} icons={icons}/>
            },
            confirmation:{
                view: <ConfirmForm stateChanger={this.request}/>
            },
            success: {
                view: <SuccessPage stateChanger={this.stateChanger('checkingOrder')} itemPic={itemPic} number={orderInfo.number} method={orderInfo.method} sum={orderInfo.sum}/>
            },
            error: {
                view: <ErrorPage stateChanger={this.stateChanger('checkingOrder')} requestAgain={this.request} errorText={errorText}/>
            }
        };

        return (<div>
            <Card title={'Оплата товаров с помощью мобильного'} id={state.id}>{statesMap[state.view].view}</Card>
        </div>)
    }
}