import React, { Component } from 'react';

import Header from '../components/Header';
import Menu from '../components/Menu';

import MobilePayment from '../demos/MobilePayment';
import QiwiWalletPayment from '../demos/QiwiWalletPayment';

import './App.scss';

/*
 ссылка вида #[метод оплаты]/[номер оплаты]/[success/fail]
 */

export default class App extends Component {

    constructor(props) {

        super(props);

        this.state = {
            lang: 'ru',
            demos: {
                mobilePayment: {
                    view: 'checkingOrder',
                    info: {
                        itemCost: 5
                    }
                },
                qiwiWalletPayment: {
                    view: 'checkingOrder',
                    info: {
                        itemCost: 5
                    }
                }
            }
        };
    }

    stateChanger = () => {
        return () => {

        }
    }

    render() {

        const { mobilePayment, qiwiWalletPayment } = this.state.demos;

        return (<div>
            <Header lang={this.state.lang}/>
            <main className="main">
                <Menu/>
                <div className="layout">

                    <MobilePayment state={mobilePayment}/>

                    <QiwiWalletPayment state={qiwiWalletPayment} />


                </div>
            </main>
        </div>)
    }
}