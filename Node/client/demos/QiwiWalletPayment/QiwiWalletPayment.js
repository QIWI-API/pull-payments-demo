import React, { Component } from 'react';

import './QiwiWalletPayment.scss';

import itemPic from '../../assets/item.png'

import Card from '../../components/Card';
import CheckingOrder from './views/CheckingOrder';
import MobileForm from '../../components/MobileForm';

/*
 ссылка вида #[метод оплаты]/[номер оплаты]/[success/fail]
 */

export default class QiwiWalletPayment extends Component {

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

        const itemCost = 5;

        const radioButtons = [{
            main: 'Картой',
            additional: '1% комиссии',
            icons: []
        }, {
            main: 'Qiwi кошельком',
            additional: '0% комиссии',
            icons: []
        }, {
            main: 'Наличными',
            additional: '0% комиссии',
            icons: []
        }];

        const state = this.props.state;



        const statesMap = {
            checkingOrder:{
                view: <CheckingOrder itemCost={itemCost} itemPic={itemPic} stateChanger={this.stateChanger('paymentByMobile')} radioButtons={radioButtons} id={state.id}/>
            },
            paymentByMobile:{
                view: <MobileForm itemCost={itemCost} stateChanger={this.request} id={state.id} />
            },
            success: {
                view: <div>success</div>
            },
            error: {
                view: <div>error</div>
            }
        };

        return (<div>
            <Card title={'Оплата товаров с помощью QIWI кошелька'} id={state.id}>{statesMap[this.props.state.view].view}
            </Card>
        </div>)
    }
}