import React, { Component } from 'react';
import paymentByRedirect from '../../../examples/bill-payments-redirect-example/request.js';

import { translate } from 'react-i18next';

import './CheckOutRedirect.scss';

import itemPic from '../../assets/item.png';


import Card from '../../components/Card';
import CheckingOrderView from './views/CheckingOrderView';
import SuccessPage from '../../components/SuccessPage';

@translate()
export default class CheckOutRedirect extends Component {

    constructor(props) {

        super(props);

        this.itemCost = 1;
    }

    stateChanger = (state) => {
        return () => this.props.stateChanger(state);
    }

    makeRequest = () => {

        let url = '/demo/api/createPaymentForm';

        if(__DEV__) {
            url = `http://localhost:5000/${url}`;
        }

        return paymentByRedirect(url, this.itemCost)
            .then(response => response.json());
    }

    makeRedirect = () => {

        const self = this;

        const stateChangerToError = self.stateChanger('checkingOrderError');

        this.makeRequest().then( data =>{

            if(data.redirect) {
                window.location.href = data.redirect;
            } else {
                stateChangerToError();
            }
        }).catch( err => {
            stateChangerToError();
        });
    }


    render() {

        const state = this.props.state;
        const { t } = this.props;
        const id = state.id;

        const itemCost = this.itemCost;

        const orderInfo = {
            number: '540-201',
            method: 'Qiwi кошелек',
            sum: itemCost
        };

        const statesMap = {
            checkingOrder:{
                view: <CheckingOrderView itemCost={itemCost} itemPic={itemPic} stateChanger={this.makeRedirect} id={id} />
            },
            checkingOrderError:{
                view: <CheckingOrderView itemCost={itemCost} itemPic={itemPic} stateChanger={this.makeRedirect} id={id} errorState={true}/>
            },
            success: {
                view: <SuccessPage stateChanger={this.stateChanger('checkingOrder')} itemPic={itemPic} number={orderInfo.number} method={orderInfo.method} sum={orderInfo.sum}/>
            }
        };

        return (<div>
            <Card title={t('pay-invoicing')} id={id}>{statesMap[state.view].view}
            </Card>
        </div>)
    }
}