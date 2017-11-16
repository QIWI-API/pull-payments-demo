import React, { Component } from 'react';

import './MobilePayment.scss';

import itemPic from './assets/item.png'

import Card from '../../components/Card';
import CheckingOrder from './views/CheckingOrder';
import MobileForm from '../../components/MobileForm';

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

    render() {

        const nameGroup = 'mobilePayment';

        const state = this.props.state;

        const statesMap = {
            checkingOrder:{
                view: <CheckingOrder itemCost={state.info.itemCost} stateChanger={this.stateChanger('paymentByMobile')}/>
            },
            paymentByMobile:{
                view: <MobileForm itemCost={state.info.itemCost} stateChanger={this.stateChanger('confirmation')} id={nameGroup}/>
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
            <Card title={'Оплата товаров с помощью мобильного'} id={state.id}>{statesMap[state.view].view}</Card>
        </div>)
    }
}