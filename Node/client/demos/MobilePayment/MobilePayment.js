import React, { Component } from 'react';
import paymentForMobile from '../../../examples/pull-payments-white-label-example/request.js';

import itemPic from '../../assets/item.png';
import beeIcon from '../../assets/bee.svg';
import megaIcon from '../../assets/mega.svg';
import mtsIcon from '../../assets/mts.svg';
import teleIcon from '../../assets/tele.svg';

import Card from '../../components/Card';
import CheckingOrderView from './views/CheckingOrderView';
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
            phone: '',
            numberError: '',
            paymentError: 'Недостаточно средств на счете.'
        };

        this.itemCost = 5;
    }

    stateChanger = (state) => {
        return () => this.props.stateChanger(state);
    }

    getPhoneNumber = (phone) =>{

        this.setState({
            phone,
            numberError: ''
        });
    }


    makeRequest = () => {

        let url = 'paymentForMobile';

        if(__DEV__) {
            url = `http://localhost:5000/${url}`;
        }

        const phone = `+${this.state.phone}`;

        return paymentForMobile(url, phone, this.itemCost)
            .then(response => response.json());

    }

    toConfirmation = () => {

        const self = this;

        const stateChanger = this.stateChanger('confirmation');

        this.makeRequest().then((data)=>{

            if(data.response.result_code === 0) {

                stateChanger();
            }
            if(data.response.result_code === 150) {

                self.setState({
                    numberError: 'Ошибка авторизации.'
                });
            }
            if(data.response.result_code === 300) {

                self.setState({
                    numberError: 'Ошибка! Ваш оператор не поддерживается.'
                });
            }
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

        const {currentPaymentMethod, phone, numberError, paymentError} = this.state;

        const id = state.id;

        const icons = [ beeIcon, megaIcon, mtsIcon, teleIcon];

        const itemCost = this.itemCost;

        const orderInfo = {
            number: '540-201',
            method: 'мобильный баланс',
            sum: itemCost
        };

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
                view: <MobileForm itemCost={itemCost} stateChanger={this.toConfirmation} getPhoneNumber={this.getPhoneNumber} phone={phone} id={id} icons={icons} numberError={numberError}/>
            },
            confirmation:{
                view: <ConfirmForm stateChanger={this.makeRequest}/>
            },
            success: {
                view: <SuccessPage stateChanger={this.stateChanger('checkingOrder')} itemPic={itemPic} number={orderInfo.number} method={orderInfo.method} sum={orderInfo.sum}/>
            }
        };

        return (<div>
            <Card title={state.name} id={id}>{statesMap[state.view].view}</Card>
        </div>)
    }
}